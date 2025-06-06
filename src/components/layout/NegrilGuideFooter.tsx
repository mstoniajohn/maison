import { Facebook, Instagram } from '@mui/icons-material'
import { Typography, Link as MUILink, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ExternalMUILink from '../features/ExternalMUILink'
import PageLinks from '../features/PageLinks'

const NegrilGuideFooter = () => {
  return (
    <div className=" static bottom-0 z-10 mx-auto mt-5 w-full bg-[#51BAB3] p-8  text-center">
      <div className=" text-white grid grid-cols-1  gap-3  ">
        <div>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }} align="center">
            CONTACT US
          </Typography>
          <div>
            <Typography align="center" color={'white'}>
              Skylark Negril Beach Resort <br />
              Norman Manley Blvd Negril Jamaica W.I. <br />
              Reservations:{' '}
              <ExternalMUILink
                hoverColor="secondary.main"
                color="#ffffff"
                href="tel:+1 (212) 807-0868"
              >
                +1 (212) 807-0868
              </ExternalMUILink>
              <br />
              Hotel:
              <ExternalMUILink
                color="#ffffff"
                hoverColor="secondary.main"
                href="tel:+1 (876) 957-4364"
              >
                +1 (876) 957-4364{' '}
              </ExternalMUILink>
              <br />
              <ExternalMUILink
                color="#ffffff"
                hoverColor="secondary.main"
                underline="always"
                href="mailto:info@skylarknegril.com"
              >
                info@skylarknegril.com
              </ExternalMUILink>
            </Typography>
          </div>
          <div className=" space-x-2 text-center">
            <MUILink
              href="https://www.facebook.com/Skylarknegril/"
              className="text-white hover:text-[#E088A8]"
            >
              <Facebook fontSize="large" />
            </MUILink>
            <MUILink
              href="https://www.instagram.com/skylarknegril/"
              className="text-white hover:text-[#E088A8]"
            >
              <Instagram fontSize="large" />
            </MUILink>
          </div>
        </div>
      </div>
      <p className="text-white my-1 pb-4 sm:pt-2">
        © Skylark Negril Beach Resort. All Rights Reserved{' '}
        {new Date().getFullYear()}. Web Developer{' '}
        <MUILink href="https://toniaroganti.com/">
          <strong className="text-white underline"> Tonia</strong>
        </MUILink>
      </p>
    </div>
  )
}

export default NegrilGuideFooter
