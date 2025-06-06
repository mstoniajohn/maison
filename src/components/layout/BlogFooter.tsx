import { Facebook, Instagram } from '@mui/icons-material'
import { Typography, Link as MUILink, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ExternalMUILink from '../features/ExternalMUILink'
import PageLinks from '../features/PageLinks'

const BlogFooter = () => {
  return (
    <div className=" static bottom-0 z-10 mx-auto mt-5 w-full bg-[#51BAB3] px-2 py-10 text-center">
      <div className=" text-white flex flex-col justify-center gap-4 sm:flex-row sm:items-start">
        <div>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 2 }}
            align="center"
          >
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
          <div className="mt-2 space-x-2 text-center">
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

        <div>
          <div className="">
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              VISIT THE ROCKHOUSE
            </Typography>

            <p className="mb-4">
              Our sister hotel is located 10 minutes away on Negril&apos;s
              Cliffs
            </p>

            <Button
              href="https://www.rockhouse.com"
              disableElevation
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: '25px',
                fontWeight: 'bold',
                border: '2px solid transparent',
                color: 'white',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'secondary',
                },
              }}
            >
              {' '}
              Rockhouse Hotel
            </Button>
          </div>
        </div>
      </div>
      <p className="text-white mb-8 mt-12">
        © Skylark Negril Beach Resort. All Rights Reserved{' '}
        {new Date().getFullYear()}. Web Developer{' '}
        <MUILink href="https://toniaroganti.com/">
          <strong className="text-white underline"> Tonia</strong>
        </MUILink>
      </p>
    </div>
  )
}

export default BlogFooter
