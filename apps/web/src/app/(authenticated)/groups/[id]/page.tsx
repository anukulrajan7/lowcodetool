'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Avatar, Spin } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GroupDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [group, setGroup] = useState<Model.Group | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const groupId = params.id
        const groupFound = await Api.Group.findOne(groupId, {
          includes: ['groupMemberships', 'groupMemberships.user'],
        })
        setGroup(groupFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch group details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchGroupDetails()
  }, [params.id])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!group) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Group Not Found</Title>
        <Paragraph>The group you are looking for does not exist.</Paragraph>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{group.name}</Title>
      <Paragraph>{group.description}</Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {group.groupMemberships?.map(membership => (
          <Col key={membership.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <Avatar
                  size={64}
                  icon={<UserOutlined />}
                  src={membership.user?.pictureUrl}
                />
              }
            >
              <Card.Meta
                title={membership.user?.name}
                description={dayjs(membership.dateCreated).format(
                  'MMMM D, YYYY',
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
