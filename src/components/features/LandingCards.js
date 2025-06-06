import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import SubtitleText from '../text/SubtitleText'

import SlideDivs from './SlideDivs'
const LandingCards = ({ img, title, text, link, linkText }) => {
  return (
    <>
      <div className="hidden w-full flex-shrink-0 overflow-hidden rounded-md border-2 md:block">
        <img
          src={img}
          alt={title}
          className="w-full object-cover"
          lazyload="true"
        />
        <div className="p-6">
          <Typography variant="h4" color="primary" align="center">
            {title}{' '}
          </Typography>
          {/* <h3 className="mb-3 text-2xl font-bold text-teal-600">{title}</h3> */}
          <Typography>{text}</Typography>
          <Link href={link} passHref>
            <span className="font-bold text-[#E088A8]">{linkText}</span>
          </Link>
        </div>
        {/* <Carousel /> */}
      </div>
    </>
  )
}

export default LandingCards
