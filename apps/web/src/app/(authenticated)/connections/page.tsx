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

export default function ConnectionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [connections, setConnections] = useState<Model.Connection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, {
        includes: [
          'connectionsAsRequester.requester',
          'connectionsAsRequester.receiver',
          'connectionsAsReceiver.requester',
          'connectionsAsReceiver.receiver',
        ],
      })
        .then(user => {
          const allConnections = [
            ...(user.connectionsAsRequester || []),
            ...(user.connectionsAsReceiver || []),
          ]
          setConnections(allConnections)
        })
        .catch(error => {
          enqueueSnackbar('Failed to load connections', { variant: 'error' })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [userId])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Connections</Title>
      <Paragraph>Here you can see all your connections.</Paragraph>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {connections.map(connection => {
            const otherUser =
              connection.requesterId === userId
                ? connection.receiver
                : connection.requester
            return (
              <Col key={connection.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={
                    <Avatar
                      size={64}
                      icon={<UserOutlined />}
                      src={otherUser?.pictureUrl}
                    />
                  }
                  onClick={() => router.push(`/profile/${otherUser?.id}`)}
                >
                  <Card.Meta
                    title={otherUser?.name || 'Unknown User'}
                    description={`Connected on ${dayjs(connection.dateCreated).format('MMMM D, YYYY')}`}
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      )}
    </PageLayout>
  )
}
