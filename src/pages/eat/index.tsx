import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useRouter } from 'next/router'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import Title from '@/components/text/Title'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import Subtitle from '@/components/text/Subtitle'
import ButtonCustomV2 from '@/components/features/ButtonCustomV2'

import EatAppWidget from '@/components/EatAppWidget'
import Layout from '@/components/layout/Layout'
import CustomDialog from '@/components/popups/CustomDialog'
import { eatMenus } from '@/components/features/data'
const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714512/skylark/Lilys-outside-1500x609_pygghd.jpg',
    name: 'Skylark Negril - Miss Lilys',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662305/skylark/Lilys-outside-767x511_v9gv2r.jpg',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714513/skylark/Lilys-dining-area-1500x609.jpg_vg6ged.webp',
    name: 'Miss Lilys - Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662305/skylark/Lilys-dining-area-767x511.jpg_tzyltc.webp',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714511/skylark/Lilys-Interior-1500x609.jpg_hto5pm.webp',
    name: 'Miss Lilys - Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662305/skylark/Lilys-Interior-767x511_pwktzu.jpg',
  },
]
const foodImages = [
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714500/skylark/26315604097_510f9b6948_z-2-263x185.jpg_y5mt0h.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714501/skylark/41120382492_567f0b8e21_z-1-263x185_iecvi6.jpg',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714501/skylark/42155385900_4f0aa1b0d1_z-1-263x185_d0orri.jpg',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714502/skylark/44279203530_3c16257639_z-263x185.jpg_rsh20u.webp',
]

const Eat = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Layout
      title="Dine"
      description="Dine At Miss Lily's at Skylark Negril Serving Authentic Jamaican Fare In A Convivial Caribbean Setting, By Chef Andre Fowles. Reserve Your Table Now!"
    >
      <BootstrapCarousel images={imagesList} />

      <Container className="mb-4 mt-4 pb-3">
        <Title>EAT</Title>
        <SkylarkDivider />

        <Subtitle>EAT AT MISS LILY'S AT SKYLARK</Subtitle>

        <p className="mb-2">
          Skylark Negril Beach Resort is excited to be home to the first
          Jamaican outpost of Miss Lily’s restaurant, a homecoming for the
          beloved Caribbean oasis born in the heart of New York City. Miss
          Lily’s at Skylark embodies the best elements of its New York
          counterparts – from its modern approach to classic island cooking,
          friendly and cool as-can-be staff, and vibrant and colorful
          atmosphere. The culinary team is led by Partner and Culinary Director
          Adam Schop, and Kingston-born "Chopped Champion” Chef Andre Fowles.
          The restaurant’s centerpiece is our on-display jerk smokehouse and BBQ
          grilling station. Enjoy smoked and seasoned chicken, pork, and fish
          straight off the grill served with all the classic fixings of “yard”
          cuisine. The menu also features other traditional Jamaican home
          cooking fare such as curried goat, oxtail and whole grilled fish.
        </p>

        <p>
          The Miss Lily’s interiors showcase Creative Director Serge Becker's
          signature design and passion for Jamaica with bold colors and vibrant
          patterns, vintage-style booths and a state-of-the-art music system.
          Come enjoy a vast selection of the Caribbean’s finest rums at our
          beachside bar. After sunset, a bit of “skylarking” will commence with
          bites and tropical libations featuring nightly local and international
          DJs spinning the latest in reggae and dancehall.
        </p>
        {/* <Box pt={2}>
            <EatAppWidget
              url="https://eatapp.co/reserve/rock-da0f00?source=iframe"
              id="rock-da0f00"
            />
          </Box> */}
        <Stack mt={2} sx={{ textAlign: 'center' }} alignItems="center">
          <ButtonCustomV2 onClick={() => setOpen(true)}>
            BOOK A TABLE AT MISS LILY’S
          </ButtonCustomV2>
        </Stack>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {foodImages.map((foodImage) => (
            <img
              key={foodImage}
              src={foodImage}
              alt=""
              className="mx-auto w-full rounded-md"
            />
          ))}
        </div>
      </Container>
      {/* <Box className="mt-10 flex w-full items-center text-center">
          <ResponsiveTabs />
        </Box> */}

      <Subtitle center>MENUS</Subtitle>
      <Stack
        direction="row"
        justifyContent="center"
        columnGap={2}
        rowGap={2}
        flexWrap="wrap"
      >
        {eatMenus?.map((menu, index) => (
          <Button
            key={index}
            variant="contained"
            disableElevation={true}
            size="large"
            color="secondary"
            sx={{
              borderRadius: '25px',
              fontWeight: 'bold',
              marginBottom: 2,
              border: '2px solid transparent',
              color: 'white',
              '&:hover': {
                color: 'secondary.main',
                backgroundColor: 'white',
                border: `2px solid #E78FB3`,
              },
            }}
            onClick={() => router.push(`/eat/${menu.link}`)}
          >
            {menu.name}
          </Button>
        ))}
      </Stack>

      <CustomDialog open={open} handleClose={() => setOpen(false)} mt={5}>
        <Stack width="100%" pt={2}>
          <EatAppWidget
            url="https://eatapp.co/reserve/rock-da0f00?source=iframe"
            id="rock-da0f00"
          />
        </Stack>
      </CustomDialog>
    </Layout>
  )
}

export default Eat
