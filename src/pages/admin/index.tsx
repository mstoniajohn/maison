// components/AdminLayout.tsx

import React from 'react'
import {
  // AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Box,
  CssBaseline,
  IconButton,
  Typography,
  Divider,
  Container,
} from '@mui/material'

import Navbar from '../../components/layout/Navbar'
import { isEmpty } from 'lodash'
import Layout from '../../components/layout/Layout'
import { Router, useRouter } from 'next/router'
import {
  ChevronLeft,
  ChevronLeftOutlined,
  ChevronRight,
  LogoutTwoTone,
  MenuOpen,
  Person,
} from '@mui/icons-material'

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { logout, userInfo } from '@/features/auth/authSlice'
import CustomDialog from '@/components/layout/CustomDialog'
import SignInSide from '@/components/auth/SignIn'

type AdminLayoutProps = {
  children: React.ReactNode
}

const drawerWidth = 240
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const theme = useTheme()

  const appBarHeight = 64
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { user, isLoading, isError, isSuccess, message, currentUser } =
    useAppSelector((state) => state.auth)

  const [open, setOpen] = React.useState(false)
  const [openDrawer, setOpenDrawer] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }
  const handleCloseDrawer = () => {
    setOpenDrawer(false)
  }
  React.useEffect(() => {
    if (!isEmpty(user)) {
      if (router.pathname === '/admin') {
        router.push('/admin/dashboard')
      }
      dispatch(userInfo())
    }
  }, [dispatch])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={openDrawer}
        sx={{
          zIndex: 1,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'primary.light',
            color: 'white',
            padding: 1,
            boxShadow: 0,
            ...theme.mixins.toolbar,
            ...(open && { display: 'none' }),
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawer ? handleCloseDrawer : handleOpenDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
            disableRipple
          >
            {openDrawer ? (
              <Typography fontWeight={700} variant="h6">
                <ChevronLeft /> Close Menu
              </Typography>
            ) : (
              <Typography fontWeight={700} variant="h6">
                <ChevronRight /> Open Menu
              </Typography>
            )}
          </IconButton>
          <Link href="/">
            <Typography
              fontWeight={700}
              variant="h6"
              sx={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Go to Homepage
            </Typography>
          </Link>
          <Typography variant="h3" noWrap component="h1" align="center">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {currentUser?.is_admin ? (
          <div
            style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}
          >
            <Drawer
              variant="persistent"
              // variant="permanent"
              sx={{
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                },
              }}
              anchor="left"
              open={openDrawer}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <DrawerHeader>
                <IconButton
                  onClick={() => router.push('/')}
                  disableRipple
                  sx={{
                    alignItems: 'center',
                  }}
                >
                  <Typography fontWeight={700} variant="h6">
                    Go to Homepage
                  </Typography>
                </IconButton>
              </DrawerHeader>
              <Divider />

              <List
                sx={{
                  bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Manage Data
                  </ListSubheader>
                }
              >
                <ListItem component="div" disablePadding>
                  <ListItemButton
                    onClick={() => router.push('/admin/dashboard')}
                  >
                    <ListItemText
                      primary="Dashboard"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem component="div" disablePadding>
                  <ListItemButton
                    onClick={() => router.push('/admin/dashboard/rooms')}
                  >
                    <ListItemText
                      primary="Rooms"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem component="div" disablePadding>
                  <ListItemButton
                    onClick={() => router.push('/admin/dashboard/menus')}
                  >
                    <ListItemText
                      primary="Restaurant Menus"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem component="div" disablePadding>
                  <ListItemButton
                    onClick={() => router.push('/admin/dashboard/press')}
                  >
                    <ListItemText
                      primary="Press"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem component="div" disablePadding>
                  <ListItemButton
                    onClick={() => router.push('/admin/frontdesk')}
                  >
                    <ListItemText
                      primary="Front Desk"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />

                {/* <ListItem component="div" disablePadding>
                  <ListItemButton
                    onClick={() => router.push('/admin/dashboard/roomservice')}
                  >
                    <ListItemText
                      primary="Room Service"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider /> */}

                {/* <ListItem component="div" disablePadding>
                  <ListItemButton
                    onClick={() => router.push('/admin/dashboard/profile')}
                  >
                    <ListItemIcon>
                      <Person color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Profile"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem> */}

                <ListItem component="div" disablePadding>
                  <ListItemButton onClick={() => dispatch(logout())}>
                    <ListItemIcon>
                      <LogoutTwoTone color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Logout"
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 'medium',
                        color: 'primary.light',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
            <main
              style={{
                flexGrow: 1,
                // padding: 10,
                marginLeft: openDrawer ? drawerWidth : 0,
                // marginLeft: drawerWidth,
                marginTop: appBarHeight, // Push content below the Navbar
              }}
            >
              <DrawerHeader />
              <Stack mx="auto" px={10}>
                {children}
              </Stack>
            </main>
          </div>
        ) : (
          <Stack
            alignItems="center"
            justifyContent="center"
            height="100vh"
            mx="auto"
          >
            <Button
              size="large"
              variant="contained"
              onClick={handleOpen}
              color="secondary"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mx: 'auto',
              }}
            >
              Sign In
            </Button>
          </Stack>
        )}
        <CustomDialog open={open} handleClose={handleClose}>
          <SignInSide close handleClose={handleClose} />
        </CustomDialog>
      </div>
    </Box>
  )
}

export default AdminLayout

export function RenderRowImage({
  params,
  handleImageClick,
}: {
  params: any
  handleImageClick: (imageUrl: string) => void
}) {
  if (params.value) {
    return (
      <Image
        src={params.value}
        alt="Skylark"
        width={150}
        height={150}
        onClick={() => handleImageClick(params?.value)}
        objectFit="contain"
      />
    )
  }
  return <Typography>No Image</Typography>
}
