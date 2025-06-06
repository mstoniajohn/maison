import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BootstrapCarousel from './BootstrapCarousel'

const FullwidthSection = ({
  img,
  title,
  text,
  subtitle,
  link,
  linkText,
  floating,
  imgMobile,
}: {
  img: string
  title: string
  text: string
  subtitle: string
  link: string
  linkText: string
  floating: boolean
  imgMobile: string
}) => {
  const dir = floating
  return (
    <div className="relative my-4 w-screen ">
      {/* Absolute img on desktop */}
      <Box
        sx={{
          textAlign: { md: 'left', xs: 'center' },
        }}
        className={`${
          floating && 'right-0'
        } text-white z-20 flex w-full flex-col justify-center bg-[#51BAB3] p-8 md:absolute md:h-full md:max-w-md lg:inset-y-1/2 lg:h-[400px] lg:max-w-xl lg:-translate-y-1/2 lg:p-12`}
      >
        <Typography
          color="white"
          variant="h5"
          sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}
        >
          {subtitle}
        </Typography>

        <Typography color="white" variant="h4" fontWeight={700}>
          {title}
        </Typography>
        <p className="mb-3">{text}</p>
        <Link href={link} passHref>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {linkText}
          </Typography>
        </Link>
      </Box>

      <BootstrapCarousel
        images={[
          {
            name: 'Skylark Resort Map',
            src: img,
            mobileSrc: imgMobile,
          },
        ]}
      />
    </div>
  )
}

export default FullwidthSection
