'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Button, Avatar, Spin } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DirectoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [users, setUsers] = useState<Model.User[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersFound = await Api.User.findMany({
          includes: [
            'profilePictures',
            'connectionsAsRequester',
            'connectionsAsReceiver',
          ],
        })
        setUsers(usersFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch users', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  const handleConnect = async (receiverId: string) => {
    if (!userId) {
      enqueueSnackbar('You need to be logged in to connect', {
        variant: 'error',
      })
      return
    }
    try {
      await Api.Connection.createOneByRequesterId(userId, {
        receiverId,
        status: 'pending',
      })
      enqueueSnackbar('Connection request sent', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to send connection request', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Discover and Connect</Title>
      <Text>Find and connect with colleagues and peers.</Text>
      <div style={{ marginTop: 20 }}>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Row gutter={[16, 16]} justify="center">
            {users.map(user => (
              <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={
                    <Avatar
                      size={128}
                      src={
                        user.profilePictures?.[0]?.url || '/default-avatar.png'
                      }
                      alt={user.name}
                      style={{ margin: '20px auto' }}
                    />
                  }
                >
                  <Card.Meta title={user.name} description={user.email} />
                  <Button
                    type="primary"
                    icon={<UserAddOutlined />}
                    style={{ marginTop: 10 }}
                    onClick={() => handleConnect(user.id)}
                  >
                    Connect
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </PageLayout>
  )
}
