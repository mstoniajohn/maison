'use client'

import Head from 'next/head'
import React, { ReactNode, useState } from 'react'

import {
  Dialog,
  Fab,
  Toolbar,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Footer'

import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

import NavbarV2 from './NavbarV2'

import { isEmpty } from 'lodash'
import SignInSide from '../auth/SignIn'
import GuideFloatingIcon from '../features/GuideFloatingIcon'
import BottomNavMobile from '../features/BottomNavMobile'
import { useUser } from '@/hooks/useAuth'
import { logoutUser } from '@/api/auth'

import Script from 'next/script'
import NavbarV3 from './Navbar3'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const Layout = ({
  title,
  children,
  description = '',
  showGuideButton = false,
  hideGuideButton = false,
  footerComponent = <Footer />,
}: {
  title?: string
  children: ReactNode
  description?: string
  showGuideButton?: boolean
  hideGuideButton?: boolean
  footerComponent?: ReactNode
}) => {
  const theme: any = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [showPopUp, setShowPopUp] = useState(false)

  const { data: user } = useUser()

  // const googleUser = useAppSelector((state) => state.users)

  const handleClose = () => {
    setShowPopUp(false)

    if (!isEmpty(user)) {
      setShowPopUp(false)
    }
  }
  const showLogout = !isEmpty(user)
  const handleLogin = () => {
    setShowPopUp(true)
  }
  const handleLogout = () => {
    logoutUser()
    toast('Successfully logged out')
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <div className="relative flex h-screen flex-col justify-between">
      <Head>
        <title>
          {!!title
            ? `${title} - Skylark Negril Beach Resort`
            : 'Skylark Negril Beach Resort'}
        </title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Skylark Negril Beach Resort" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skylarknegril.com" />
        <meta
          property="og:image"
          content="https://skylarknegril.com/default-600x450.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarV2 />

      <Toolbar />
      {isMobile ? null : <Toolbar />}
      {/* <Toolbar /> */}

      <ToastContainer />
      {/* <Toolbar /> */}

      <main className=" flex-1">{children}</main>
      {/* <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp sx={{ color: 'white' }} />
        </Fab>
      </BackToTop> */}
      {showGuideButton ? <GuideFloatingIcon /> : null}

      {footerComponent}
      <BottomNavMobile />
      <div>
        {showLogout && (
          <Zoom
            in={true}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${transitionDuration.exit}ms`,
            }}
            unmountOnExit
          >
            <Fab
              sx={{
                position: 'fixed',
                bottom: 190,
                right: 10,
                opacity: 0.5,
                color: '#ffffff',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
              aria-label="Logout"
              color="primary"
              onClick={handleLogout}
              variant="extended"
            >
              <Avatar
                src={user?.profile_photo}
                sx={{ color: 'white', mr: 1 }}
              />
              Logout
            </Fab>
          </Zoom>
        )}
        {!hideGuideButton ? <GuideFloatingIcon /> : null}
        <Dialog open={showPopUp} onClose={handleClose}>
          <SignInSide />
        </Dialog>
        {/* <Script
          src="https://maison-labs.com/agent-inject.bundle.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log(
              '\n\n\nMaison Labs chat widget initialized successfully 🙃\n\n\n'
            )
            function getQueryParam(param: string) {
              const queryString = window.location.search
              console.log('QueryString: ' + queryString)
              const urlParams = new URLSearchParams(queryString)
              console.log('urlParams ' + urlParams)
              return urlParams.get(param)
            }
            // get sessionId from query params
            const sessionId: string | null = getQueryParam?.('mcbsid') || null
            console.log('sessionId ' + sessionId)
            // Initialize chat widget
            const mcAgent = (window as any).initMcbs({
              clientId: '80242036-cd1c-407e-82d8-cab57408117c',
              sessionId: sessionId,
              locale: 'en',
              iconPosition: {
                bottom: 130,
              },
              onSessionUpdate: (sessionId: string) => {
                console.log('Updated session ID: ', sessionId)
                // Use this callback to track session ID updates
              },
              onLocaleUpdate: (locale: string) => {
                console.log('Chat locale updated: ', locale)
              },
            })
            mcAgent.showIcon()
          }}
        /> */}
      </div>
    </div>
  )
}

export default Layout
