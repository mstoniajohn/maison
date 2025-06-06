import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImageTextFullscreen = ({
  text,
  title,
}: {
  text: string
  title?: string
}) => {
  return (
    // <div className=" flex  w-screen flex-col lg:flex-row">
    <div className=" mt-4 grid w-screen grid-cols-1 gap-4 md:grid-cols-2">
      {/* <div className="w-full lg:w-1/2"> */}
      <Image
        alt="Skylark Negril Beach Resort Guest Room"
        objectFit="cover"
        layout="responsive"
        height={400}
        width={700}
        loading="lazy"
        src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714207/skylark/Guest-Room-900x501.jpg_eh5trq.webp"
        style={{}}
        className="hidden md:block"
      />
      {/* </div> */}

      {/* <div className="align-center px:10 flex w-full flex-col justify-center space-y-2 px-4 lg:w-1/2 "> */}
      <div className="align-center flex max-w-2xl flex-col  justify-center space-y-2 px-10 sm:px-24">
        <Typography
          variant="h2"
          color="primary"
          sx={{ textAlign: { md: 'left', xs: 'center' } }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ textAlign: { md: 'left', xs: 'center' }, color: '#5A5A5A' }}
        >
          {text}
        </Typography>
        <Link href="/stay" passHref>
          <Typography
            sx={{
              textAlign: { md: 'left', xs: 'center' },
              color: 'secondary.main',
              fontWeight: 'bold',
              '&:hover': {
                color: 'primary.main',
                borderBottom: (theme) =>
                  `'1px solid ${theme.palette.primary.main}'`,
              },
            }}
          >
            {' '}
            Check in for Good Vibes
          </Typography>
        </Link>
      </div>
    </div>
  )
}

export default ImageTextFullscreen
