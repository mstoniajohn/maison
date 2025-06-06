import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import ButtonCustom from '@/components/features/ButtonCustom'
import { joformLinks } from '@/components/features/data'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import RetreatsSubmitter from '@/components/forms/RetreatsBrochure'
import Submitter from '@/components/forms/WeddingBrochure'
import Layout from '@/components/layout/Layout'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/text/Title'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1651329958/skylark/Skylark-Negril-Wedding-chairs-1500x609.jpg_pabbj0.webp',
    name: 'Skylark Negril Weddings',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1651329958/skylark/Skylark-Negril-Wedding-chairs-1500x609.jpg_pabbj0.webp',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1702137827/skylark/Skylark_Slideshow_Desktop_1920x823_Weddding_01_mt3ke4.jpg',
    name: 'Skylark Negril Weddings',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1702137827/skylark/Skylark_Slideshow_Desktop_1920x823_Weddding_01_mt3ke4.jpg',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1702137892/skylark/Skylark_Slideshow_Desktop_1920x823_Weddding_02_etk3zz.jpg',
    name: 'Skylark Negril Weddings',

    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1702137892/skylark/Skylark_Slideshow_Desktop_1920x823_Weddding_02_etk3zz.jpg',
  },
]
const sideImages = [
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1702138373/skylark/events-at-skylark_hasfnt.jpg',
  // 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1646231172/skylark/15691886139_4519d958e3_z-e1543956431775-263x185.jpg_vtafci.webp',

  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714501/skylark/41369102372_b1b344c157_z-e1543956307590-263x185.jpg_vz9zfx.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1702138373/skylark/events-skylark-negril_ic2cua.jpg',
]

const Weddings = () => {
  return (
    <Layout
      title="Weddings & Events"
      description="Celebrate At Skylark Negril - Premier Jamaican Destination For Weddings & Private Events. Exclusive Hotel Book-Out With Worldclass Amenities."
    >
      <BootstrapCarousel images={imagesList} />
      <PageContainer>
        <Container className="mb-4 mt-4 pb-3">
          <Title>WEDDINGS, RETREATS & EVENTS</Title>

          <Grid container columnSpacing={3} rowSpacing={3}>
            <Grid item xs={12}>
              <SkylarkDivider />
              <Box>
                <p className="pb-3">
                  Whether you are looking for a beautiful location to tie the
                  knot, gather for a retreat, or host a party, our exceptional
                  events team is here to create a special experience just for
                  you.
                  {/* Whether you are planning an intimate sunset ceremony or an
                    elaborate weekend wedding in Negril, Jamaica, filling the
                    entire hotel with friends and family, our exceptional
                    wedding team will provide turn-key wedding planning to
                    create a memorable occasion tailored just for you. The hotel
                    features an all-weather dedicated wedding venue in Negril,
                    Jamaica that seats up to 70 guests. Our beachfront venue is
                    also available for rehearsal dinners and group events. */}
                </p>
                <p className="pb-3">
                  {/* At Skylark, we limit the number of weddings to a maximum of
                    one per week. We normally require a full hotel book-out to
                    ensure that we deliver a wonderful experience and have the
                    privacy and dedicated support required for your big day. We
                    encourage you to book well in advance. */}
                  Weddings are limited to one per week and typically require a
                  full hotel book-out to ensure you'll have privacy and the
                  dedicated support required for your big day. Our team provides
                  turn-key planning for everything from an intimate sunset
                  ceremony to an elaborate wedding weekend. We encourage you to
                  book well in advance.
                </p>
                <p className="pb-3">
                  Skylark features 43 guest rooms, an onsite-restaurant and bar,
                  an all-weather Sky Deck, a rooftop bathhouse and world-class
                  spa, an ocean-facing lounge and games room, and direct
                  beachfront access.
                </p>
                <p className="pb-3">
                  Event brochures are available upon request. As a next step,
                  please submit an event request with as much detail as possible
                  and our team will be in touch.
                </p>
              </Box>
              <Box textAlign="center" sx={{ margin: '10px' }}>
                <ButtonCustom href={joformLinks.weddings.direct}>
                  Request More Information
                </ButtonCustom>
              </Box>
              {/* <Box>
                <H3Text>
                  <a
                    className="text-[#E088A8] hover:text-blue hover:underline"
                    href="tel:8769574364"
                  >
                    CALL
                  </a>{' '}
                  OR{' '}
                  <a
                    className="text-[#E088A8] hover:text-blue hover:underline"
                    href="mailto:spa@skylarknegril.com"
                  >
                    EMAIL
                  </a>{' '}
                  TO START PLANNING YOUR DREAM ISLAND WEDDING.
                </H3Text>
              </Box> */}
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <div className="align-center grid grid-cols-2 justify-center  gap-3 sm:grid-cols-1">
                {sideImages.map((item) => (
                  <CustomImage
                    key={item}
                    src={item}
                    height={185}
                    width={263}
                    alt="Skylark Negril"
                  />
                ))}
              </div>
            </Grid> */}
          </Grid>
          <Stack
            rowGap={4}
            mt={5}
            mb={3}
            mx="auto"
            direction={{ xs: 'column', md: 'row' }}
            columnGap={4}
            alignItems="center"
            justifyContent="center"
          >
            <Submitter />
            <RetreatsSubmitter />
          </Stack>
          <div className="text-center">
            <Typography variant="subtitle2" color="darkgray" pb={1}>
              By submitting this form, you are consenting to receive marketing
              emails from: Skylark Negril Beach Resort, Norman Manley Blvd,
              Jamaica. You can revoke your consent to receive emails at any time
              by using the SafeUnsubscribe® link, found at the bottom of every
              email.
            </Typography>
          </div>
        </Container>
      </PageContainer>
    </Layout>
  )
}

export default Weddings
