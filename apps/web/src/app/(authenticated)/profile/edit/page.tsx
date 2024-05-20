'use client'

import { useState, useEffect } from 'react'
import { Typography, Form, Input, Button, Upload, Row, Col } from 'antd'
import {
  UserOutlined,
  MailOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditProfilePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [user, setUser] = useState<Model.User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [form] = Form.useForm()

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, { includes: ['profilePictures', 'coverPhotos'] })
        .then(user => {
          setUser(user)
          form.setFieldsValue({
            name: user.name,
            email: user.email,
            pictureUrl: user.profilePictures?.[0]?.url,
            coverUrl: user.coverPhotos?.[0]?.url,
          })
          setLoading(false)
        })
        .catch(error => {
          enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
          setLoading(false)
        })
    }
  }, [userId])

  const handleFormSubmit = (values: any) => {
    if (userId) {
      Api.User.updateOne(userId, values)
        .then(updatedUser => {
          enqueueSnackbar('Profile updated successfully', {
            variant: 'success',
          })
          router.push('/home')
        })
        .catch(error => {
          enqueueSnackbar('Failed to update profile', { variant: 'error' })
        })
    }
  }

  const handleUpload = async (options: any, field: string) => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    form.setFieldsValue({ [field]: url })
  }

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <LoadingOutlined />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Edit Profile</Title>
      <Text>Update your personal and professional information below.</Text>
      <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="pictureUrl" label="Profile Picture">
          <Upload
            customRequest={options => handleUpload(options, 'pictureUrl')}
            maxCount={1}
          >
            <Button icon={<PlusOutlined />}>Upload Profile Picture</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="coverUrl" label="Cover Photo">
          <Upload
            customRequest={options => handleUpload(options, 'coverUrl')}
            maxCount={1}
          >
            <Button icon={<PlusOutlined />}>Upload Cover Photo</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Row justify="center">
            <Col>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
