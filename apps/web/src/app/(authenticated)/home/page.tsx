'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Avatar, List } from 'antd'
import {
  UserOutlined,
  NotificationOutlined,
  PictureOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<Model.User | null>(null)
  const [notifications, setNotifications] = useState<Model.Notification[]>([])
  const [profilePictures, setProfilePictures] = useState<
    Model.ProfilePicture[]
  >([])
  const [coverPhotos, setCoverPhotos] = useState<Model.CoverPhoto[]>([])

  useEffect(() => {
    if (userId) {
      Api.User.find(userId, {
        includes: ['notifications', 'profilePictures', 'coverPhotos'],
      })
        .then(userData => {
          setUser(userData)
          setNotifications(userData.notifications || [])
          setProfilePictures(userData.profilePictures || [])
          setCoverPhotos(userData.coverPhotos || [])
        })
        .catch(error => {
          enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
        })
    }
  }, [userId])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Home</Title>
      <Paragraph>
        Welcome to your homepage. Here you can see your profile information and
        recent activities.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card title="Profile Information" bordered={false}>
            <Avatar size={64} icon={<UserOutlined />} src={user?.pictureUrl} />
            <Title level={4}>{user?.name}</Title>
            <Text>Email: {user?.email}</Text>
            <br />
            <Text>Status: {user?.status}</Text>
            <br />
            <Text>
              Member since: {dayjs(user?.dateCreated).format('MMMM D, YYYY')}
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Notifications"
            bordered={false}
            icon={<NotificationOutlined />}
          >
            <List
              itemLayout="horizontal"
              dataSource={notifications}
              renderItem={notification => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        icon={<NotificationOutlined />}
                        src={notification.senderPictureUrl}
                      />
                    }
                    title={notification.title}
                    description={notification.message}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Profile Pictures"
            bordered={false}
            icon={<PictureOutlined />}
          >
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={profilePictures}
              renderItem={picture => (
                <List.Item>
                  <Avatar shape="square" size={64} src={picture.url} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Cover Photos"
            bordered={false}
            icon={<PictureOutlined />}
          >
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={coverPhotos}
              renderItem={photo => (
                <List.Item>
                  <Avatar shape="square" size={64} src={photo.url} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
