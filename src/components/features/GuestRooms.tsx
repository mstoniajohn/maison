import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ExternalMUILink from './ExternalMUILink'

const GuestRooms = ({
  title,
  desc1,
  desc2,
  desc3,
  desc4,
  image,
  link,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
}: {
  title?: string
  desc1?: string
  desc2?: string
  desc3?: string
  desc4?: string
  image?: string
  link: string
  text1?: string
  text2?: string
  text3?: string
  text4?: string
  text5?: string
  text6?: string
  text7?: string
  text8?: string
  text9?: string
}) => {
  return (
    <div className="my-10 grid grid-cols-1 gap-4 sm:flex-nowrap md:grid-cols-2">
      <div className="">
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          {title}
        </Typography>

        <div>
          <p className="text-md font-bold text-[#E088A8] md:max-w-sm">
            {desc1}
          </p>
          <p className="text-md font-bold text-[#E088A8] md:max-w-sm">
            {desc2}
          </p>
          <p className="text-md font-bold text-[#E088A8] md:max-w-sm">
            {desc3}
          </p>
          <p className="text-md font-bold text-[#E088A8] md:max-w-sm">
            {desc4}
          </p>
        </div>

        <p className="my-2"> {text1}</p>
        <p className="my-2"> {text2}</p>

        <p className="my-2"> {text3}</p>

        <p className="my-2"> {text4}</p>

        <p className="my-2"> {text5}</p>
        <p className="my-2"> {text6}</p>

        <p className="my-2"> {text7}</p>

        <p className="my-2"> {text8}</p>

        <p className="my-2"> {text9}</p>

        <ExternalMUILink href={link}>
          <Typography
            color="secondary"
            variant="h6"
            sx={{ fontWeight: 'bold' }}
          >
            Book Now
          </Typography>
        </ExternalMUILink>
      </div>
      <div className="">
        <img className="w-full" src={image} alt="" />
      </div>
    </div>
  )
}

export default GuestRooms
