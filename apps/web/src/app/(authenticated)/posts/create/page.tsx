'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreatePostPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: { content: string }) => {
    if (!userId) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      return
    }

    setLoading(true)

    try {
      await Api.PostData.createOneByUserId(userId, {
        content: values.content,
        type: 'text',
      })
      enqueueSnackbar('Post created successfully', { variant: 'success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to create post', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Create a New Post</Title>
          <Paragraph>
            Share your thoughts with your friends and followers.
          </Paragraph>
          <Form name="create_post" layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="content"
              label="Post Content"
              rules={[
                {
                  required: true,
                  message: 'Please enter the content of your post',
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="What's on your mind?" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<PlusOutlined />}
              >
                Create Post
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
