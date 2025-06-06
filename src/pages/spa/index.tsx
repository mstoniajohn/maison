import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import ButtonCustom from '@/components/features/ButtonCustom'
import { joformLinks } from '@/components/features/data'
import ExternalMUILink from '@/components/features/ExternalMUILink'
import PageLinks from '@/components/features/PageLinks'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import { CustomImageCoPilot } from '@/components/features/toolbox/CustomImage'
import Layout from '@/components/layout/Layout'
import Subtitle from '@/components/text/Subtitle'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1690593852/skylark/DSC_9881_hqhwha.jpg',
    name: 'Skylark Negril Spa',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1690574036/skylark/DSC_9881_mobile_stcyev.jpg',
  },
  {
    src: '/skylark-spa-1.jpg',
    name: 'Skylark Negril Spa',
    mobileSrc: '/skylark-spa-1.jpg',
  },
  {
    src: '/skylark-spa-2.jpg',
    name: 'Skylark Negril Spa',
    mobileSrc: '/skylark-spa-2.jpg',
  },
  {
    src: '/skylark-spa-3.jpg',
    name: 'Skylark Negril Spa',
    mobileSrc: '/skylark-spa-3.jpg',
  },
  {
    src: '/skylark-spa-4.jpg',
    name: 'Skylark Negril Spa',
    mobileSrc: '/skylark-spa-4.jpg',
  },
]
const sideImages = [
  '/skylark-spa-feature-1.jpg',
  '/skylark-spa-feature-2.jpg',
  '/skylark-spa-feature-3.jpg',
  '/skylark-spa-feature-4.jpg',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1690594602/skylark/53071609090_dc0dd84305_3k_fz5vod.jpg',
  '/skylark-spa-feature-5.jpg',
]

const Spa = () => {
  return (
    <Layout
      title="Spa"
      description="Unwind At Skylark Negril Spa In Negril: Holistic Wellness, Tropical Views, And Our New Rooftop Bathing Ritual. Book Your Caribbean Retreat!"
    >
      <BootstrapCarousel images={imagesList} />
      <Container className="mb-4 mt-4">
        <Typography variant="h1" component="h1" color="primary">
          SPA
        </Typography>

        <Grid container columnSpacing={4} rowSpacing={3}>
          <Grid item xs={12} md={8}>
            <SkylarkDivider />
            <Subtitle>SKYLARK NEGRIL BEACH RESORT SPA</Subtitle>

            <Box textAlign="center" sx={{ padding: '1rem' }}>
              <ButtonCustom href={joformLinks.spa.direct}>
                Make an Appointment
              </ButtonCustom>
            </Box>
            <Box>
              <Typography>
                Skylark Spa is a full-service Spa with a complete offering of
                treatment rituals including massages, scrubs, wraps, facials,
                bathing rituals, foot ceremonies and so much more. All we ask is
                that you surrender your stressed mind and exhausted body and we
                will restore peace and tranquillity to you. Our divine
                treatments will revitalize, relax, restore or stimulate you.
                Whichever rubs you righter! We take a simple, holistic approach
                to wellbeing, health and happiness with a natural Jamaican
                style. Fully licensed, trained and experienced therapists await
                you. Skylark Spa's treatment rituals are delivered at our new
                rooftop spa from either the amazing bathhouses, the beautiful
                spacious treatment rooms or the ocean-view foot ceremony deck,
                utilizing the exquisite, holistic Caribbean Essentials brand of
                aromatherapy spa products.
              </Typography>

              <Typography>
                “What distinguishes our spa from others, in addition to our
                amazing authentic products and our indigenous spa treatment
                rituals, is our holistic therapists and their professional
                dedication to fulfilling every guest's spa & wellness needs.
                Extensively trained through the CE Academy, their knowledge and
                experience, and uniquely warm and welcoming smiles create an
                irresistible urge for guests to return to the spa time and time
                again! All these qualities embody the Skylark Spa ethos of
                delivering authentic Jamaican spa experiences” Linda Hall Spa &
                Wellness Consultant for Skylark Spa and Rockhouse Spa.
              </Typography>
              <Typography>
                Linda Hall is an international Spa and wellness consultant,
                natural product and treatment designer, and guru of holistic spa
                therapy philosophy. Linda is an innovative visionary, driven to
                create beautiful, luxurious spas. With 40+ years of experience
                creating totally unique spa settings in the UK, Asia, the USA
                and throughout the Caribbean, she insures our Spa continues to
                evolve to offer our guests a truly memorable experience. Her
                knowledge and dynamic spirit are imparted to every one of our
                certified therapists. During her time guiding the Spa, Linda has
                also established the CE Academy so therapist can receive
                constant training and education to keep them updated on the
                latest developments in techniques, treatments, equipment, and
                products.
              </Typography>
            </Box>
            <Stack>
              <Typography
                variant="h2"
                color="primary"
                sx={{ fontWeight: '400', mt: 2 }}
              >
                SKYLARK BATHHOUSE RITUAL
              </Typography>
              <Typography>
                The ancient art of the bathing ritual is one of nature’s oldest
                and most beautiful pastimes. At Skylark Spa, we take the bath
                experience to its pinnacle with our brand new roof top spa
                bathhouses.
              </Typography>
              <Typography>
                We bathe to cleanse, detoxify, beautify, heal, pamper, relax,
                de-stress and feel good; it is a vital and indulgent way of
                taking care of the body, health and spirit. Bathing is the
                ultimate mind/body/spirit leisure activity. Our new Bathing
                Rituals are undertaken in the magnificent roof top spa North and
                South Bathhouses, each featuring two stunning ocean-view soaking
                tubs. Guests are invited to take in breath taking ocean views
                whilst immersing in one of our three Caribbean Essentials
                signature therapeutic Bathing Rituals, made famous by our sister
                property, Rockhouse Hotel’s award-winning spa. Overlooking the
                exquisite turquoise sea, each Bathhouse also includes a couples
                massage space and a lounge area for the therapeutically linked
                Tea Ceremony.
              </Typography>
              <Box mb={2} mt={1}>
                <CustomImageCoPilot
                  src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1699711112/skylark/53071210521_c44ae2c3f6_o_1_knzr55.jpg"
                  alt="Skylark Negril Spa"
                  width={600}
                  height={400}
                />
              </Box>

              <Typography>
                Our Bathing Rituals are a complete rejuvenating journey. Each
                begins with your selection from our signature aromatherapy
                blends: Rapture, Release, Restore and includes fresh seasonal
                fruits, a ginger shot, organic spa juice and end of treatment
                therapeutic Tea Ceremony. Skylark Spa’s therapeutic and exotic
                Bathing Ritual Packages are available in a 50-minute soak; or a
                100-minute massage and soak. Prices start from US$90
              </Typography>
            </Stack>
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontWeight: '400', mt: 2 }}
            >
              REVITALIZE, RELAX & STIMULATE YOUR SENSES
            </Typography>
            <Typography>
              Experience all these therapeutic treatments in the Skylark Spa
              temple, at our beachside cabana as you listen to the calming sound
              of breaking waves, or in our brand new north and south rooftop
              bathhouses. Our amazing therapists await you with their healing
              touch and calming presence.
            </Typography>
            <Box>
              <Typography
                color="primary"
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                {' '}
                <a
                  className="text-[#E088A8] hover:text-[#51BAB3] hover:underline"
                  href="tel:8769574364"
                >
                  CALL
                </a>{' '}
                OR{' '}
                <a
                  className="text-[#E088A8] hover:text-[#51BAB3] hover:underline"
                  href="mailto:spa@skylarknegril.com"
                >
                  EMAIL
                </a>{' '}
                TO SCHEDULE YOUR SPA SERVICE TODAY.
              </Typography>

              <Box textAlign="center" sx={{ padding: '0.5rem' }}>
                <ButtonCustom href="https://skylarknegril.com/spa/menu/">
                  View Spa Menu
                </ButtonCustom>
                {/* <ButtonCustom href="https://skylarknegril.com/skylark-spa-menu.pdf">
                    View Spa Menu
                  </ButtonCustom> */}
              </Box>
              {/* <Typography
                  variant="h2"
                  color="primary"
                  sx={{ fontWeight: '400', mt: 4 }}
                >
                  FIND YOUR BALANCE AT ROCKHOUSE
                </Typography>

                <p className="pb-3">
                  Skylark’s spa treatment options can be broadened with a day
                  trip to our sister{' '}
                  <Link href="/spa" passHref>
                    <a className="text-[#E088A8] hover:text-[#51BAB3] hover:underline">
                      Rockhouse Spa
                    </a>
                  </Link>
                  , featuring additional beauty and wet treatments including
                  scrubs, wraps, and bathhouse rituals. This spa retreat in
                  Negril is a two-time winner of the World Travel Award for Best
                  Spa in Jamaica and is an excellent addition to your Skylark
                  getaway. Complimentary shuttles run between Rockhouse and
                  Skylark throughout the day.
                </p> */}
            </Box>
            {/* <Box marginTop={3}>
              <Typography
                variant="h2"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                BOOK YOUR SKYLARK GETAWAY TODAY
              </Typography>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <img
                  src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1649617706/skylark/44059428015_1c266bacb6_z.jpg_msgjkg.webp"
                  alt="Skylark Negril Resort"
                  className="mx-auto w-full object-cover sm:h-[300px]"
                />
                <Typography variant="body1">
                  <ExternalMUILink href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732&_gl=1*14yxwwu*_ga*NDI5Njk2NTU1LjE2Njk4NjgyODk.*_ga_Z2Z78V7EFB*MTY5MDYzOTU0NS43Ni4xLjE2OTA2NDE3MjIuMi4wLjA.">
                    Book your stay
                  </ExternalMUILink>
                  at the Skylark Negril Beach Resort to complete your island
                  getaway. Guests begin their authentic Jamaican escape with a
                  complimentary foot cleanse upon arrival. Our resort was
                  designed to immerse you in our island’s culture; experience
                  our beach vibes for yourself.{' '}
                  <PageLinks url="/stay" text="Choose your room" />, then access
                  our{' '}
                  <PageLinks
                    url="/negril-guide"
                    text="complimentary Vacation Guide"
                  />{' '}
                  to start planning. Our spa retreat in Negril awaits!
                </Typography>
              </Stack>
            </Box> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="mx-auto grid grid-cols-2 gap-3 md:grid-cols-1">
              {sideImages.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  alt="Skylark Negril Spa"
                  className="mx-auto h-[150px] w-full object-cover sm:h-[250px]"
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Spa
