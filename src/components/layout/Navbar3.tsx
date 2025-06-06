/* This example requires Tailwind CSS v2.0+ */
import { useState, MouseEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  Container,
  Drawer,
  Fade,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Popper,
  Paper,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Toolbar,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material'
import { Dehaze } from '@mui/icons-material'
import CustomImage from '../features/toolbox/CustomImage'

const stay = [
  {
    name: 'All Guest Rooms',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/stay',
  },
  {
    name: 'Specials',
    href: '/specials',
  },
  {
    name: 'Resort Amenities',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/resort-amenities',
  },
  {
    name: 'Gift Cards',
    href: '/gift-cards',
  },
  //   {
  //     name: 'Negril Guide',
  //     description:
  //       'Get a better understanding of where your traffic is coming from.',
  //     href: '/negril-guide',
  //   },
]

const play = [
  {
    name: 'Activities',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/activities',
  },
  {
    name: 'Our Blog',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/blog',
  },
  {
    name: 'Negril Guide',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/negril-guide',
  },
  {
    name: 'Psilocybin Soundbath',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/play/psilocybin',
  },
  {
    name: 'Candle Making',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/play/candle-making',
  },
]

const aboutus = [
  {
    name: 'All About Skylark',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '/about-us',
  },
  {
    name: 'Award & Press',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '/press-media',
  },
  {
    name: 'Contact Us',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '/contact-us',
  },
  {
    name: 'FAQ',
    description: 'Understand how we take your privacy seriously.',
    href: '/faq',
  },
]

export default function NavbarV3() {
  const { pathname } = useRouter()
  const trigger = useScrollTrigger()
  const currentPath = pathname.split('/')[1]
  const greaterThanMid = useMediaQuery((theme: any) =>
    theme.breakpoints.up('md')
  )
  const heightMd = trigger ? 70 : 80
  const heightSm = trigger ? 67 : 70
  const widthMd = trigger ? 165 : 190
  const widthSm = trigger ? 160 : 170

  // State for mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false)

  // State for menu anchors
  const [stayAnchorEl, setStayAnchorEl] = useState<null | HTMLElement>(null)
  const [playAnchorEl, setPlayAnchorEl] = useState<null | HTMLElement>(null)
  const [aboutAnchorEl, setAboutAnchorEl] = useState<null | HTMLElement>(null)

  // Mobile menu state
  const [stayMobileOpen, setStayMobileOpen] = useState(false)
  const [playMobileOpen, setPlayMobileOpen] = useState(false)
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false)

  // Handle desktop menu open/close
  const handleStayClick = (event: MouseEvent<HTMLElement>) => {
    setStayAnchorEl(stayAnchorEl ? null : event.currentTarget)
  }

  const handlePlayClick = (event: MouseEvent<HTMLElement>) => {
    setPlayAnchorEl(playAnchorEl ? null : event.currentTarget)
  }

  const handleAboutClick = (event: MouseEvent<HTMLElement>) => {
    setAboutAnchorEl(aboutAnchorEl ? null : event.currentTarget)
  }

  // Handle menu close
  const handleStayClose = () => {
    setStayAnchorEl(null)
  }

  const handlePlayClose = () => {
    setPlayAnchorEl(null)
  }

  const handleAboutClose = () => {
    setAboutAnchorEl(null)
  }

  // Toggle mobile drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  // Handle mobile menu toggles
  const toggleStayMobile = () => {
    setStayMobileOpen(!stayMobileOpen)
  }

  const togglePlayMobile = () => {
    setPlayMobileOpen(!playMobileOpen)
  }

  const toggleAboutMobile = () => {
    setAboutMobileOpen(!aboutMobileOpen)
  }

  // Check if menus are open
  const stayOpen = Boolean(stayAnchorEl)
  const playOpen = Boolean(playAnchorEl)
  const aboutOpen = Boolean(aboutAnchorEl)

  // Menu IDs
  const stayMenuId = 'stay-menu'
  const playMenuId = 'play-menu'
  const aboutMenuId = 'about-menu'

  return (
    <div className="navbar-container relative z-50 mb-8 sm:mb-0">
      <div id="back-to-top-anchor"></div>

      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: 'white',
          py: trigger ? 0.5 : 1,
        }}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters sx={{ pt: 1 }}>
            {/* Logo */}
            <Box sx={{ flexGrow: 0, justifyContent: 'flex-start' }}>
              <Link href="/">
                <Box sx={{ cursor: 'pointer' }}>
                  <CustomImage
                    src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1679786655/skylark/skylark-logo_zacyjl.svg"
                    height={greaterThanMid ? heightMd : heightSm}
                    width={greaterThanMid ? widthMd : widthSm}
                    alt="Skylark"
                  />
                </Box>
              </Link>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', lg: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              {/* Mobile Menu Button */}
              <Box
                sx={{
                  display: { xs: 'flex', lg: 'none' },
                  ml: 'auto',
                  alignItems: 'center',
                }}
              >
                <Button
                  onClick={toggleDrawer}
                  sx={{
                    color: '#E088A8',
                    '&:hover': { bgcolor: 'transparent' },
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    color="secondary"
                    variant="subtitle2"
                    align="center"
                    sx={{ fontWeight: 'bold' }}
                  >
                    MENU
                  </Typography>
                  <Dehaze fontSize="large" />
                </Button>
              </Box>

              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  gap: 6,
                }}
              >
                {/* STAY Menu */}
                <Box>
                  <Button
                    aria-controls={stayOpen ? stayMenuId : undefined}
                    aria-haspopup="true"
                    aria-expanded={stayOpen ? 'true' : undefined}
                    onClick={handleStayClick}
                    endIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: currentPath === 'stay' ? '#E088A8' : '#51BAB3',
                        }}
                      />
                    }
                    sx={{
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                  >
                    <Typography
                      color={currentPath === 'stay' ? 'secondary' : 'primary'}
                      variant="h5"
                      sx={{
                        fontWeight: '400',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
                      STAY
                    </Typography>
                  </Button>
                  <Popper
                    open={stayOpen}
                    anchorEl={stayAnchorEl}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={200}>
                        <Paper
                          elevation={3}
                          sx={{
                            mt: 1.5,
                            width: 200,
                            bgcolor: '#51BAB3',
                            border: '1px solid #E088A8',
                            borderRadius: 1,
                            '& .MuiMenuItem-root': {
                              py: 1.5,
                            },
                          }}
                        >
                          <ClickAwayListener onClickAway={handleStayClose}>
                            <List>
                              {stay.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <MenuItem
                                    onClick={handleStayClose}
                                    sx={{
                                      px: 2,
                                      '&:hover': { bgcolor: '#E088A8' },
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      color="white"
                                      sx={{ fontSize: '1.2rem' }}
                                    >
                                      {item.name}
                                    </Typography>
                                  </MenuItem>
                                </Link>
                              ))}
                            </List>
                          </ClickAwayListener>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </Box>

                {/* PLAY Menu */}
                <Box>
                  <Button
                    aria-controls={playOpen ? playMenuId : undefined}
                    aria-haspopup="true"
                    aria-expanded={playOpen ? 'true' : undefined}
                    onClick={handlePlayClick}
                    endIcon={
                      <ExpandMoreIcon
                        sx={{
                          color:
                            currentPath === 'play' || currentPath === 'blog'
                              ? '#E088A8'
                              : '#51BAB3',
                        }}
                      />
                    }
                    sx={{
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                  >
                    <Typography
                      color={
                        currentPath === 'play' || currentPath === 'blog'
                          ? 'secondary'
                          : 'primary'
                      }
                      variant="h5"
                      sx={{
                        fontWeight: '400',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
                      PLAY
                    </Typography>
                  </Button>
                  <Popper
                    open={playOpen}
                    anchorEl={playAnchorEl}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={200}>
                        <Paper
                          elevation={3}
                          sx={{
                            mt: 1.5,
                            width: 200,
                            bgcolor: '#51BAB3',
                            border: '1px solid #E088A8',
                            borderRadius: 1,
                            '& .MuiMenuItem-root': {
                              py: 1.5,
                            },
                          }}
                        >
                          <ClickAwayListener onClickAway={handlePlayClose}>
                            <List>
                              {play.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <MenuItem
                                    onClick={handlePlayClose}
                                    sx={{
                                      px: 2,
                                      '&:hover': { bgcolor: '#E088A8' },
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      color="white"
                                      sx={{ fontSize: '1.2rem' }}
                                    >
                                      {item.name}
                                    </Typography>
                                  </MenuItem>
                                </Link>
                              ))}
                            </List>
                          </ClickAwayListener>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </Box>

                {/* EAT Link */}
                <Link href="/eat">
                  <Typography
                    color={currentPath !== 'eat' ? 'primary' : 'secondary'}
                    align="center"
                    variant="h5"
                    sx={{
                      fontWeight: '400',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    EAT
                  </Typography>
                </Link>

                {/* SPA Link */}
                <Link href="/spa">
                  <Typography
                    color={currentPath !== 'spa' ? 'primary' : 'secondary'}
                    variant="h5"
                    align="center"
                    sx={{
                      fontWeight: '400',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    SPA
                  </Typography>
                </Link>

                {/* EVENTS Link */}
                <Link href="/weddings">
                  <Typography
                    color={currentPath !== 'weddings' ? 'primary' : 'secondary'}
                    align="center"
                    variant="h5"
                    sx={{
                      fontWeight: '400',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    EVENTS
                  </Typography>
                </Link>

                {/* ABOUT US Menu */}
                <Box>
                  <Button
                    aria-controls={aboutOpen ? aboutMenuId : undefined}
                    aria-haspopup="true"
                    aria-expanded={aboutOpen ? 'true' : undefined}
                    onClick={handleAboutClick}
                    endIcon={<ExpandMoreIcon sx={{ color: '#51BAB3' }} />}
                    sx={{
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                  >
                    <Typography
                      color={
                        currentPath === 'about-us' ? 'secondary' : 'primary'
                      }
                      variant="h5"
                      sx={{
                        fontWeight: '400',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
                      ABOUT US
                    </Typography>
                  </Button>
                  <Popper
                    open={aboutOpen}
                    anchorEl={aboutAnchorEl}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={200}>
                        <Paper
                          elevation={3}
                          sx={{
                            mt: 1.5,
                            width: 200,
                            bgcolor: '#51BAB3',
                            border: '1px solid #E088A8',
                            borderRadius: 1,
                            '& .MuiMenuItem-root': {
                              py: 1.5,
                            },
                          }}
                        >
                          <ClickAwayListener onClickAway={handleAboutClose}>
                            <List>
                              {aboutus.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <MenuItem
                                    onClick={handleAboutClose}
                                    sx={{
                                      px: 2,
                                      '&:hover': { bgcolor: '#E088A8' },
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      color="white"
                                      sx={{ fontSize: '1.2rem' }}
                                    >
                                      {item.name}
                                    </Typography>
                                  </MenuItem>
                                </Link>
                              ))}
                            </List>
                          </ClickAwayListener>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </Box>
              </Box>
            </Box>

            {/* Book A Room Button */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, ml: 5 }}>
              <Button
                href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732"
                disableElevation
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  border: '2px solid transparent',
                  color: 'white',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'secondary',
                  },
                }}
              >
                Book A ROOM
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: '100%',
            // mt: '60px',
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              mb: 2,
            }}
          >
            <Link href="/">
              <Box sx={{ cursor: 'pointer' }}>
                <CustomImage
                  src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1679786655/skylark/skylark-logo_zacyjl.svg"
                  height={60}
                  width={140}
                  alt="Skylark"
                />
              </Box>
            </Link>
            <IconButton onClick={toggleDrawer} sx={{ color: '#51BAB3' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ width: '100%', maxWidth: 360, textAlign: 'center' }}>
            {/* STAY Mobile Menu */}
            <ListItem
              button
              onClick={toggleStayMobile}
              sx={{ justifyContent: 'center' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  color={currentPath === 'stay' ? 'secondary' : 'primary'}
                  variant="h5"
                  sx={{ fontWeight: '400' }}
                >
                  STAY
                </Typography>
                <ExpandMoreIcon
                  sx={{
                    color: stayMobileOpen ? '#E088A8' : '#51BAB3',
                    ml: 1,
                  }}
                />
              </Box>
            </ListItem>
            <Collapse in={stayMobileOpen} timeout="auto" unmountOnExit>
              <Paper
                sx={{
                  bgcolor: '#51BAB3',
                  width: 200,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <List component="div" disablePadding>
                  {stay.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <ListItem
                        button
                        onClick={toggleDrawer}
                        sx={{
                          '&:hover': { bgcolor: '#E088A8' },
                          py: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="white"
                          sx={{ fontSize: '1.2rem', ml: 2 }}
                        >
                          {item.name}
                        </Typography>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Paper>
            </Collapse>

            {/* PLAY Mobile Menu */}
            <ListItem
              button
              onClick={togglePlayMobile}
              sx={{ justifyContent: 'center' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  color={
                    currentPath === 'play' || currentPath === 'blog'
                      ? 'secondary'
                      : 'primary'
                  }
                  variant="h5"
                  sx={{ fontWeight: '400' }}
                >
                  PLAY
                </Typography>
                <ExpandMoreIcon
                  sx={{
                    color: playMobileOpen ? '#E088A8' : '#51BAB3',
                    ml: 1,
                  }}
                />
              </Box>
            </ListItem>
            <Collapse in={playMobileOpen} timeout="auto" unmountOnExit>
              <Paper
                sx={{
                  bgcolor: '#51BAB3',
                  width: 200,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <List component="div" disablePadding>
                  {play.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <ListItem
                        button
                        onClick={toggleDrawer}
                        sx={{
                          '&:hover': { bgcolor: '#E088A8' },
                          py: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="white"
                          sx={{ fontSize: '1.2rem', ml: 2 }}
                        >
                          {item.name}
                        </Typography>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Paper>
            </Collapse>

            {/* EAT Link */}
            <ListItem button sx={{ justifyContent: 'center' }}>
              <Link href="/eat">
                <Typography
                  color={currentPath === 'eat' ? 'secondary' : 'primary'}
                  variant="h5"
                  sx={{ fontWeight: '400' }}
                >
                  EAT
                </Typography>
              </Link>
            </ListItem>

            {/* SPA Link */}
            <ListItem button sx={{ justifyContent: 'center' }}>
              <Link href="/spa">
                <Typography
                  color={currentPath === 'spa' ? 'secondary' : 'primary'}
                  variant="h5"
                  sx={{ fontWeight: '400' }}
                >
                  SPA
                </Typography>
              </Link>
            </ListItem>

            {/* EVENTS Link */}
            <ListItem button sx={{ justifyContent: 'center' }}>
              <Link href="/weddings">
                <Typography
                  color={currentPath === 'weddings' ? 'secondary' : 'primary'}
                  variant="h5"
                  sx={{ fontWeight: '400' }}
                >
                  EVENTS
                </Typography>
              </Link>
            </ListItem>

            {/* ABOUT US Mobile Menu */}
            <ListItem
              button
              onClick={toggleAboutMobile}
              sx={{ justifyContent: 'center' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  color={currentPath === 'about-us' ? 'secondary' : 'primary'}
                  variant="h5"
                  sx={{ fontWeight: '400' }}
                >
                  ABOUT US
                </Typography>
                <ExpandMoreIcon
                  sx={{
                    color: aboutMobileOpen ? '#E088A8' : '#51BAB3',
                    ml: 1,
                  }}
                />
              </Box>
            </ListItem>
            <Collapse in={aboutMobileOpen} timeout="auto" unmountOnExit>
              <Paper
                sx={{
                  bgcolor: '#51BAB3',
                  width: 200,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <List component="div" disablePadding>
                  {aboutus.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <ListItem
                        button
                        onClick={toggleDrawer}
                        sx={{
                          '&:hover': { bgcolor: '#E088A8' },
                          py: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="white"
                          sx={{ fontSize: '1.2rem', ml: 2 }}
                        >
                          {item.name}
                        </Typography>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Paper>
            </Collapse>
          </List>

          {/* Mobile Book Button */}
          <Box sx={{ mt: 2, mb: 3 }}>
            <Button
              href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732"
              disableElevation
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: '25px',
                fontWeight: 'bold',
                border: '2px solid transparent',
                color: 'white',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'secondary',
                },
              }}
            >
              Book A ROOM
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  )
}
