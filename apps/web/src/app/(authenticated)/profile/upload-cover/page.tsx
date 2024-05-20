'use client'

import React, { useState } from 'react'
import { Typography, Upload, Button, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UploadCoverPhotoPage() {
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
      setFileList([{ url, status: 'done' }])
      await Api.CoverPhoto.createOneByUserId(userId, { url })
      enqueueSnackbar('Cover photo uploaded successfully!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to upload cover photo.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title>Upload Cover Photo</Title>
          <Text>Update your profile with a new cover photo.</Text>
          <Upload
            fileList={fileList}
            customRequest={handleUpload}
            maxCount={1}
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload Cover Photo</Button>
          </Upload>
        </Col>
      </Row>
    </PageLayout>
  )
}
