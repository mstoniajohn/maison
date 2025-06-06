import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImageTextFullscreenRight = ({
  text,
  title = 'test',
}: {
  text: string
  title?: string
}) => {
  const theme = useTheme()

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    // <div className="mt-8 flex w-screen flex-col-reverse lg:flex-row">
    <div className="mt-3 grid w-screen grid-cols-1 gap-4 md:grid-cols-2">
      {/* <div className="align-center flex w-full flex-col  justify-center space-y-2 px-4 py-2 sm:px-8 lg:w-1/2 lg:py-10 lg:px-10"> */}
      <div className="block md:hidden">
        <Image
          alt="Skylark"
          layout="responsive"
          objectFit="cover"
          height={400}
          width={700}
          loading="lazy"
          src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714206/skylark/45183944975_eb294561c1_h-1-900x475.jpg_iol2yd.webp"
          // className="max-w-xs"
        />
      </div>
      <Box className="flex  flex-col  justify-center space-y-2 px-10 sm:px-32">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          columnGap={{ xs: 0, md: 2 }}
          alignItems={{ xs: 'center', md: 'flex-end' }}
        >
          <Typography
            variant="h2"
            color="primary"
            sx={{
              textAlign: { md: 'left', xs: 'center' },
            }}
          >
            {title}
          </Typography>
          {title === 'EAT AT' && (
            <Image
              src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1679797478/skylark/missLillysLogo-revised-350x58_bxxuil.png"
              alt="Skylark"
              height={matchesSM ? 40 : 50}
              width={matchesSM ? 170 : 170}
              objectFit="contain"
            />
          )}
        </Stack>

        <Typography
          sx={{ textAlign: { md: 'left', xs: 'center' }, color: '#5A5A5A' }}
        >
          {text}
        </Typography>
        <Link href="/eat" passHref>
          <Typography
            sx={{
              textAlign: { md: 'left', xs: 'center' },
              color: 'secondary.main',
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary.main',
                borderBottom: (theme) =>
                  `'1.5px solid ${theme.palette.primary}'`,
              },
            }}
          >
            Dine With Us
          </Typography>
        </Link>
      </Box>
      {/* <div className="w-full lg:w-1/2">
       */}
      <div className="hidden md:block">
        <Image
          alt=""
          layout="responsive"
          objectFit="cover"
          height={400}
          width={700}
          loading="lazy"
          src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714206/skylark/45183944975_eb294561c1_h-1-900x475.jpg_iol2yd.webp"
          // className="max-w-xs"
        />
      </div>
    </div>
  )
}

export default ImageTextFullscreenRight
