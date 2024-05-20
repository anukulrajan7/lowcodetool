'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Avatar, List, Button, Space } from 'antd'
import { LikeOutlined, CommentOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ViewPostPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [post, setPost] = useState<Model.PostData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await Api.PostData.findOne(params.id, {
          includes: ['user', 'comments.user', 'likes.user'],
        })
        setPost(postData)
      } catch (error) {
        enqueueSnackbar('Failed to load post data', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  const handleLike = async () => {
    if (!post || !userId) return

    try {
      await Api.Like.createOneByPostId(post.id, { userId })
      enqueueSnackbar('Post liked!', { variant: 'success' })
      // Refresh post data
      const postData = await Api.PostData.findOne(params.id, {
        includes: ['user', 'comments.user', 'likes.user'],
      })
      setPost(postData)
    } catch (error) {
      enqueueSnackbar('Failed to like post', { variant: 'error' })
    }
  }

  if (loading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  if (!post) {
    return <PageLayout layout="narrow">Post not found</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Post Details</Title>
      <Paragraph>
        View the details of the post along with comments and likes.
      </Paragraph>
      <Card>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: 'flex' }}
            >
              <Avatar src={post.user?.pictureUrl} />
              <Text strong>{post.user?.name}</Text>
              <Text type="secondary">
                {dayjs(post.dateCreated).format('MMMM D, YYYY')}
              </Text>
              <Paragraph>{post.content}</Paragraph>
              <Button icon={<LikeOutlined />} onClick={handleLike}>
                Like ({post.likes?.length})
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>
      <Title level={3}>Comments</Title>
      <List
        itemLayout="horizontal"
        dataSource={post.comments}
        renderItem={comment => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={comment.user?.pictureUrl} />}
              title={comment.user?.name}
              description={comment.content}
            />
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
