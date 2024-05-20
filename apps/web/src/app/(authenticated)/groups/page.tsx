'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GroupsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [groups, setGroups] = useState<Model.Group[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (userId) {
          const user = await Api.User.findOne(userId, {
            includes: ['groupMemberships.group'],
          })
          const userGroups =
            user.groupMemberships?.map(membership => membership.group) || []
          setGroups(userGroups)
        }
      } catch (error) {
        enqueueSnackbar('Failed to load groups', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchGroups()
  }, [userId])

  const handleGroupClick = (groupId: string) => {
    router.push(`/groups/${groupId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Groups
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Here you can find all the groups you are a member of.
      </Paragraph>
      {loading ? (
        <Spin tip="Loading...">
          <div style={{ height: '200px' }} />
        </Spin>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {groups.map(group => (
            <Col key={group.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                onClick={() => handleGroupClick(group.id)}
                cover={
                  <TeamOutlined
                    style={{
                      fontSize: '48px',
                      textAlign: 'center',
                      margin: '16px 0',
                    }}
                  />
                }
              >
                <Card.Meta title={group.name} description={group.description} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
