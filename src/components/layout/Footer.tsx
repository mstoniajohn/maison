import { Facebook, Instagram } from '@mui/icons-material'
import { Typography, Link as MUILink, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ExternalMUILink from '../features/ExternalMUILink'
import PageLinks from '../features/PageLinks'

const Footer = () => {
  return (
    <div className=" static bottom-0 z-10 mx-auto mt-5 w-full bg-[#51BAB3] p-8 pb-10 text-center">
      <div className=" text-white grid grid-cols-1   gap-10 md:grid-cols-2 lg:grid-cols-4">
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
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            USEFUL LINKS
          </Typography>

          {/* <h2 className="mb-3 text-xl font-bold">USEFUL LINKS</h2> */}
          <div className="flex flex-col space-y-2">
            <PageLinks
              url="/stay"
              text="Stay"
              color="#ffffff"
              hoverColor="secondary.main"
            />
            <PageLinks
              url="/eat"
              text="Eat"
              color="#ffffff"
              hoverColor="secondary.main"
            />
            <PageLinks
              url="/spa"
              text="Spa"
              color="#ffffff"
              hoverColor="secondary.main"
            />
            <PageLinks
              url="/play"
              text="Play"
              color="#ffffff"
              hoverColor="secondary.main"
            />

            <PageLinks
              url="/weddings"
              text="Weddings"
              color="#ffffff"
              hoverColor="secondary.main"
            />

            <PageLinks
              url="/about-us"
              text="About Us"
              color="#ffffff"
              hoverColor="secondary.main"
            />
            <PageLinks
              url="/faq"
              text="FAQ"
              color="#ffffff"
              hoverColor="secondary.main"
            />
            <PageLinks
              url="/blog"
              text="Our Blog"
              color="#ffffff"
              hoverColor="secondary.main"
            />
            <PageLinks
              url="/privacy-policy"
              text="Privacy Policy"
              color="#ffffff"
              hoverColor="secondary.main"
            />
          </div>
        </div>
        <div>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            JOIN OUR NEWSLETTER
          </Typography>

          <div className="mb-10">
            <p className="mb-4">
              Subscribe to our newsletter to learn about upcoming events.
            </p>

            <Link href="/newsletter">
              <Button
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
                Join Our Newsletter
              </Button>
            </Link>
          </div>

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
        <div>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            THE ROCKHOUSE FOUNDATION
          </Typography>

          <p className="mb-4">
            Transforming the places Jamaica’s children learn and supporting the
            great people who teach them.
          </p>

          <Button
            href="http://www.rockhousefoundation.org"
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
            Learn More
          </Button>
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

export default Footer
