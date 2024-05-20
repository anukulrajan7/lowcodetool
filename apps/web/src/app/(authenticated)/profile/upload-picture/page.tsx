'use client'

import { useState } from 'react'
import { Typography, Upload, Button, Row, Col } from 'antd'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UploadProfilePicturePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      await Api.ProfilePicture.createOneByUserId(userId, { url })
      setFileList([{ url, status: 'done' }])
      enqueueSnackbar('Profile picture uploaded successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to upload profile picture', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Upload Profile Picture</Title>
          <Text>Choose a profile picture to upload</Text>
          <Row justify="center" style={{ marginTop: 20 }}>
            <Col>
              <Upload
                fileList={fileList}
                customRequest={handleUpload}
                maxCount={1}
                listType="picture-card"
                showUploadList={{ showRemoveIcon: false }}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
