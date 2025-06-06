import { useAppDispatch, useAppSelector } from '@/app/store'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import ButtonCustomV2 from '@/components/features/ButtonCustomV2'
import NegrilGuideForm from '@/components/forms/NegrilGuideForm'
import Layout from '@/components/layout/Layout'
import AroundTheIsland from '@/components/negril-guide/food/AroundTheIsland'
import BarsAndNightlife from '@/components/negril-guide/food/BarsAndNightlife'
import BeachDestinations from '@/components/negril-guide/food/BeachDestinations'
import FoodSection from '@/components/negril-guide/food/FoodSection'
import NegrilExperiences from '@/components/negril-guide/food/NegrilExperiences'
import Shopping from '@/components/negril-guide/food/Shopping'
import Spas from '@/components/negril-guide/food/Spas'
import Sports from '@/components/negril-guide/food/Sports'
import Tours from '@/components/negril-guide/food/Tours'
import WaterSports from '@/components/negril-guide/food/WaterSports'
import {
  getNegrilGuides,
  getNegrilGuideSections,
  setNegrilPassword,
  setShowPassword,
} from '@/features/negril/negrilSlice'
import NegrilForm from '@/components/negril-guide/NegrilForm'
import NegrilPassword from '@/utils/helpers'
import { Add, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useEffect, useState } from 'react'


import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { toast } from 'react-toastify'
import useNegrilGuidePassword from '@/hooks/useNegrilGuidePassword'
import GuideUnlockForm from '@/components/negril-guide/forms/GuideUnlockForm'

const sectionTitles = [
  {
    name: 'FOOD & DRINK',
    link: '#food',
  },
  {
    name: 'NEGRIL EXPERIENCES',
    link: '#negrilExperiences',
  },
  {
    name: 'BARS & NIGHTLIFE',
    link: '#bars',
  },
  {
    name: 'BEACH DESTINATIONS',
    link: '#beachDestinations',
  },
  {
    name: 'ON THE WATER',
    link: '#onTheWater',
  },
  {
    name: 'TOURS & SIGHTSEEING',
    link: '#tours',
  },
  {
    name: 'SPAS & WELLNESS',
    link: '#spas',
  },
  {
    name: 'SPORTS',
    link: '#sports',
  },

  {
    name: 'SHOPPING',
    link: '#shopping',
  },
  {
    name: 'AROUND THE ISLAND',
    link: '#aroundTheIsland',
  },
]

export default function NegrilGuide() {
  const dispatch = useAppDispatch()
  const [view, setView] = useState(false)
  const [open, setOpen] = useState(false)

  const { currentUser } = useAppSelector((state) => state.auth)
  const {
    canView,
    handleClickShowPassword,
    handleMouseDownPassword,
    onChange,
    onSubmit,
    showPassword,
    password,
    negrilGuides,
    createGuideState,
    sectionState,
    deleteGuideState,
  } = useNegrilGuidePassword()

  // const {
  //   negrilPassword,
  //   createGuideState,
  //   sectionState,
  //   deleteGuideState,
  //   showPassword,
  // } = useAppSelector((state) => state.negril)
  // useEffect(() => {
  //   if (negrilPassword) {
  //     setShowPassword(true)
  //     setPassword(negrilPassword)
  //   }
  // }, [negrilPassword])
  // const [password, setPassword] = useState(negrilPassword)

  // const handleClickShowPassword = () => dispatch(setShowPassword(!showPassword))

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault()
  // }
  // const onChange = (e: any) => {
  //   setPassword(e.target.value)
  //   setNegrilPassword(e.target.value)
  // }
  // const onSubmit = (e: any) => {
  //   e.preventDefault()
  //   if (password && NegrilPassword.checkPassword(password)) {
  //     dispatch(setNegrilPassword({ password: password }))
  //     setView(true)
  //     dispatch(getNegrilGuides())
  //     dispatch(getNegrilGuideSections())
  //   } else {
  //     toast('Invalid password. Try again.')
  //   }
  // }

  // useEffect(() => {

  //   if (password && NegrilPassword.checkPassword(password)) {
  //     setView(true)
  //     dispatch(getNegrilGuides())
  //     dispatch(getNegrilGuideSections())
  //   }
  // }, [])

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (createGuideState === 'pending' || deleteGuideState === 'pending')
      dispatch(getNegrilGuides())
  })
  useEffect(() => {
    if (sectionState === 'pending') dispatch(getNegrilGuideSections())
  })

  const theme: any = useTheme()
  const greaterThanMid = useMediaQuery(theme.breakpoints.up('md'))
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

  return (
    <Layout title="Negril Guide">
      <>
        <div className="relative">
          {canView ? (
            <>
              <Box className="relative">
                <BootstrapCarousel
                  images={[
                    {
                      src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1692200157/skylark/guideheader_h2rzmp.jpg',
                      mobileSrc:
                        'https://res.cloudinary.com/dfwvu4gct/image/upload/v1692200157/skylark/guideheader_h2rzmp.jpg',
                      name: 'Skylark Negril Guide',
                    },
                    {
                      src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1694299707/skylark/negril%20guide/NVG_Header_1920x1080_01_hqomfw.jpg',
                      mobileSrc:
                        'https://res.cloudinary.com/dfwvu4gct/image/upload/v1694299707/skylark/negril%20guide/NVG_Header_1920x1080_01_hqomfw.jpg',
                      name: 'Skylark Negril Guide',
                    },
                    {
                      src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1694299707/skylark/negril%20guide/NVG_Header_1920x1080_03_mi6wgl.jpg',
                      mobileSrc:
                        'https://res.cloudinary.com/dfwvu4gct/image/upload/v1694299707/skylark/negril%20guide/NVG_Header_1920x1080_03_mi6wgl.jpg',
                      name: 'Skylark Negril Guide',
                    },
                    {
                      src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1694299708/skylark/negril%20guide/NVG_Header_1920x1080_05_kkaxeg.jpg',
                      mobileSrc:
                        'https://res.cloudinary.com/dfwvu4gct/image/upload/v1694299708/skylark/negril%20guide/NVG_Header_1920x1080_05_kkaxeg.jpg',
                      name: 'Skylark Negril Guide',
                    },
                  ]}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { sm: '50%', xs: '40%' },
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    component="h1"
                    variant="body1"
                    noWrap
                    sx={{
                      fontWeight: '200',
                      fontSize: isMobile ? '1.5rem' : '2.3rem',
                      backgroundColor: '#E088A8',
                      paddingBottom: 0,
                      marginBottom: 0,
                      px: 1,
                      textTransform: 'uppercase',
                      color: 'white',
                      width: 'max-content',
                    }}
                    align="center"
                  >
                    Your Vaction Guide to
                  </Typography>
                  <Typography
                    component="h2"
                    variant="body1"
                    noWrap
                    sx={{
                      fontWeight: 'bold',
                      fontSize: isMobile ? '1.5rem' : '2.3rem',
                      backgroundColor: '#E088A8',
                      textTransform: 'uppercase',
                      color: 'white',
                      px: 1,
                    }}
                    paddingBottom={0}
                  >
                    NEGRIL Jamaica
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    width: '100%',
                    py: 3,
                    color: 'white',
                    backgroundColor: 'primary.main',
                    textShadow:
                      '2px 2px 3px #51BAB3, 0 0 25px #ee7f9d, 1px 1px 5px  #51BAB3',
                    fontSize: 20,
                  }}
                  align="center"
                  whiteSpace="break-spaces"
                  fontWeight={500}
                >
                  A curated list of recommendations from the owners and
                  management <br /> at Rockhouse Hotel & Skylark Negril Beach
                  Resort.
                </Typography>
              </Box>
              <div className="container relative w-full">
                {currentUser?.is_admin && (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    mt={3}
                  >
                    <Typography variant="subtitle2">
                      Add new Negril Guide item
                    </Typography>
                    <IconButton onClick={() => setOpen(true)}>
                      <Add fontSize="small" />
                    </IconButton>
                  </Stack>
                )}
                <GuideNavigation />

                <Stack rowGap={1} width="100%">
                  <div
                    id="food"
                    style={{
                      scrollMarginTop: '100px',
                    }}
                  >
                    <FoodSection />
                  </div>
                  <GuideNavigation />

                  <NegrilExperiences />
                  <GuideNavigation />

                  <BarsAndNightlife />
                  <GuideNavigation />

                  <BeachDestinations />
                  <GuideNavigation />

                  <WaterSports />
                  <GuideNavigation />

                  <Tours />
                  <GuideNavigation />

                  <Spas />
                  <GuideNavigation />

                  <Sports />
                  <GuideNavigation />

                  <Shopping />
                  <GuideNavigation />

                  {/* <Accommodation /> */}
                  <AroundTheIsland />

                  <GuideNavigation />
                </Stack>
              </div>
            </>
          ) : null

          // <div className="relative">
          //   <Box
          //     className="relative h-[1000px] bg-cover bg-center bg-no-repeat "
          //     style={{
          //       backgroundImage: `url(${'https://res.cloudinary.com/dfwvu4gct/image/upload/v1674869823/skylark/RH_Slideshow_Desktop_1920x823_C_kxhbai.jpg'})`,
          //     }}
          //   >
          //     <Box
          //       component="form"
          //       onSubmit={onSubmit}
          //       className=" absolute left-1/2 top-[40%] mx-auto mt-4 w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 transform space-y-2  p-4"
          //     >
          //       <Stack bgcolor="white" pt={2}>
          //         <Stack px={2}>
          //           <Typography
          //             variant="h3"
          //             color="primary"
          //             sx={{ textTransform: 'uppercase' }}
          //             align="center"
          //           >
          //             Unlock the Negril Guide
          //           </Typography>

          //           <Typography align="center">
          //             A curated list of recommendations from the owners and
          //             management at Rockhouse & Skylark Negril
          //           </Typography>
          //         </Stack>

          //         <FormControl
          //           sx={{ m: 1, display: 'flex', flexDirection: 'column' }}
          //           variant="standard"
          //         >
          //           <InputLabel htmlFor="standard-adornment-password">
          //             Enter the password
          //           </InputLabel>
          //           <Input
          //             id="standard-adornment-password"
          //             name="password"
          //             value={password}
          //             onChange={onChange}
          //             autoComplete="new-password"
          //             type={showPassword ? 'text' : 'password'}
          //             inputProps={{
          //               'aria-label': 'password',
          //               style: {
          //                 color: 'black',
          //               },
          //             }}
          //             endAdornment={
          //               <InputAdornment position="end">
          //                 <IconButton
          //                   aria-label="toggle password visibility"
          //                   onClick={handleClickShowPassword}
          //                   onMouseDown={handleMouseDownPassword}
          //                 >
          //                   {showPassword ? (
          //                     <VisibilityOff />
          //                   ) : (
          //                     <Visibility />
          //                   )}
          //                 </IconButton>
          //               </InputAdornment>
          //             }
          //           />
          //         </FormControl>
          //         <div className="text-center">
          //           {' '}
          //           <ButtonCustomV2
          //             type="submit"
          //             variant="contained"
          //             color="secondary"
          //             sx={{ fontWeight: 'bold', color: 'white' }}
          //           >
          //             ACCESS
          //           </ButtonCustomV2>
          //         </div>
          //         <Stack maxWidth={500} mx="auto" pt={2}>
          //           {/* mailchimp */}
          //           <MailchimpSubscribe
          //             url="https://skylarknegril.us19.list-manage.com/subscribe/post?u=05ef4612941924f8daf6aa200&amp;id=12975f07d3&amp;f_id=003eb1e4f0&amp;SIGNUP=guidepw"
          //             render={(props: any) => {
          //               const { subscribe, status, message } = props || {}
          //               return (
          //                 <NegrilGuideForm
          //                   status={status}
          //                   message={message}
          //                   onValidated={(formData) => subscribe(formData)}
          //                 />
          //               )
          //             }}
          //           />
          //         </Stack>
          //         {/* mailchimp */}
          //       </Stack>
          //     </Box>
          //   </Box>
          // </div>
          // <GuideUnlockForm
          //   handleMouseDownPassword={handleMouseDownPassword}
          //   onSubmit={onSubmit}
          //   password={password as string}
          //   showPassword={showPassword}
          //   onChange={onChange}
          //   handleClickShowPassword={handleClickShowPassword}
          // />
          }
          <NegrilForm open={open} handleClose={handleClose} create={true} />
        </div>
      </>
    </Layout>
  )
}

export function GuideNavigation() {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))
  return (
    <Grid
      container
      columnGap={1}
      rowGap={1}
      mt={2}
      justifyContent="center"
      width="100%"
    >
      {sectionTitles.map((section) => (
        <Grid item md={2} lg={2.2} xs={5} key={section.name}>
          <Link
            href={section.link}
            key={section.name}
            underline="none"
            color="inherit"
          >
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              size={isMobile ? 'small' : 'medium'}
              sx={{
                borderRadius: 0,
                fontWeight: 'bold',
                textTransform: 'none',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#51BAB3',
                },
              }}
            >
              {section.name}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
