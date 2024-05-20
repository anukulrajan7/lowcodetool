import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  let itemsLeftbar = []

  let itemsUser = []

  let itemsTopbar = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },

    {
      key: '/profile/edit',
      label: 'Edit Profile',
      onClick: () => goTo('/profile/edit'),
    },

    {
      key: '/profile/upload-picture',
      label: 'Upload Picture',
      onClick: () => goTo('/profile/upload-picture'),
    },

    {
      key: '/profile/upload-cover',
      label: 'Upload Cover Photo',
      onClick: () => goTo('/profile/upload-cover'),
    },

    {
      key: '/posts/create',
      label: 'Create Post',
      onClick: () => goTo('/posts/create'),
    },

    {
      key: '/connections',
      label: 'Connections',
      onClick: () => goTo('/connections'),
    },

    {
      key: '/directory',
      label: 'Directory',
      onClick: () => goTo('/directory'),
    },

    {
      key: '/groups',
      label: 'Groups',
      onClick: () => goTo('/groups'),
    },
  ]

  let itemsSubNavigation = [
    {
      key: '/home',
      label: 'Home',
    },

    {
      key: '/profile/edit',
      label: 'Edit Profile',
    },

    {
      key: '/profile/upload-picture',
      label: 'Upload Picture',
    },

    {
      key: '/profile/upload-cover',
      label: 'Upload Cover Photo',
    },

    {
      key: '/posts/create',
      label: 'Create Post',
    },

    {
      key: '/posts/:id',
      label: 'Post',
    },

    {
      key: '/connections',
      label: 'Connections',
    },

    {
      key: '/directory',
      label: 'Directory',
    },

    {
      key: '/groups',
      label: 'Groups',
    },

    {
      key: '/groups/:id',
      label: 'Group Details',
    },
  ]

  let itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar =
    itemsLeftbar.length > 0 && !isMobile && authentication.isLoggedIn

  if (!authentication.isLoggedIn) {
    itemsLeftbar = []
    itemsUser = []
    itemsTopbar = []
    itemsSubNavigation = []
    itemsMobile = []
  }

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              isLoggedIn={authentication.isLoggedIn}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
