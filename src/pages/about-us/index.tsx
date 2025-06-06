import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'

import Layout from '../../components/layout/Layout'
import PageContainer from '../../components/PageContainer'
import Subtitle from '../../components/text/Subtitle'
import Title from '../../components/text/Title'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import SkylarkDivider from '@/components/features/SkylarkDivider'
const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1651329821/skylark/Skylark-Booth-1-1500x609.jpg_aiwgy6.webp',
    name: 'images',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677670917/skylark/Skylark-Booth-1-767x511.jpg_mnreyb.webp',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1649803437/skylark/breeze-block-1-1-1500x609.jpg_lnrabi.webp',
    name: 'images',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/breeze-block-1-1-767x511_tcrkbq.jpg',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1649803482/skylark/42099884850_f8b09acbf7_k-1-1500x609.jpg_dvnpz3.webp',
    name: 'images',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/42099884850_f8b09acbf7_k-1-767x511.jpg_lipx5o.webp',
  },
]
const About = () => {
  return (
    <Layout title="About Us">
      <BootstrapCarousel images={imagesList} />
      <PageContainer>
        <Title>ABOUT US</Title>

        <Subtitle>EXPERIENCE OUR BOUTIQUE HOTEL IN JAMAICA</Subtitle>

        <div className="mb-3 mt-3 bg-[#E67BAE] p-[1.5px]"></div>

        <img
          src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1650204192/skylark/vibesnice.png_sshnkk.webp"
          alt=""
          className="mt-2 w-full"
        />
        <Box className="mt-3">
          <Subtitle>THE VIBES NICE</Subtitle>

          <SkylarkDivider />

          <Typography variant="body1">
            Imagining the Jamaican version of a hip, Havana heyday-era bohemian
            beach resort swim club, the Skylark Negril Beach Resort draws on
            inspirations from tropical mid-century, modern design, and the
            vibrant visual vocabulary of Jamaica and it’s vast musical culture.
            Our boutique hotel in Negril Jamaica fosters relaxation and inspires
            social encounters and creativity. Travelers receive an instant
            insider experience, making guests feel local on arrival. Friendly
            and connected staff offer highly bespoke and local personal travel
            experiences. The soundtrack is an ever-present, ultra-educated mix
            of Jamaican music spanning the decades.
          </Typography>
          {/* <Typography variant="body1">
              The property’s design is defined by an authentic sense of place —
              from aquamarine guest room doors that convey the boutique hotel’s
              proximity to the Caribbean Sea, to various shades of greens
              reflecting the property’s lush native vegetation, to accent pieces
              showcasing the island’s signature ackee fruit’s bright red color.
              Additional inspiration for the color palette and wall prints are
              taken from the vibrant houses, painted stone, and signage found
              throughout Negril’s West End.
            </Typography> */}
          <img
            src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1650204182/skylark/design.png_tryhro.webp"
            alt=""
            className="mt-2 w-full"
          />
        </Box>
        <Box className="mt-3">
          <Subtitle>DESIGN</Subtitle>

          <SkylarkDivider />

          <Typography variant="body1">
            The Skylark Negril Beach Resort draws inspiration from the naturally
            vibrant color palette of Jamaica, channeled through a modern,
            graphic lens. Architectural elements such as whitewashed concrete,
            geometric breezeblock, and natural wood grains create the minimalist
            canvas for elegant dashes of Jamaican heritage and musical culture,
            vintage travel prints and vivid splashes of color.
          </Typography>
          <Typography variant="body1">
            The property’s design is defined by an authentic sense of place —
            from aquamarine guest room doors that convey the boutique hotel’s
            proximity to the Caribbean Sea, to various shades of greens
            reflecting the property’s lush native vegetation, to accent pieces
            showcasing the island’s signature ackee fruit’s bright red color.
            Additional inspiration for the color palette and wall prints are
            taken from the vibrant houses, painted stone, and signage found
            throughout Negril’s West End.
          </Typography>
          <img
            src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1650204536/skylark/culture.png_rkf8jh.webp"
            alt=""
            className="mt-2 w-full"
          />
        </Box>
        <Box className="mt-3">
          <Subtitle>CULTURE</Subtitle>

          <SkylarkDivider />

          <Typography variant="body1">
            Skylark features a buzz-generating and constantly rotating
            programming of iconic Jamaican recording artists and selectors;
            exhibitions and installations of noteworthy visual artists; and
            performances by renowned international talent.
          </Typography>
          <Typography variant="body1">
            The vast range of recreational pursuits includes beach activities on
            Negril's Seven Mile Beach (swimming, snorkeling, paddle boarding,
            glass bottom boating, parasailing), painting classes, meditative
            tours and more.
          </Typography>
          <img
            src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1650204536/skylark/community.png_hprgik.webp"
            alt=""
            className="mt-2 w-full"
          />
        </Box>
        <Box className="mt-3">
          <Subtitle>COMMUNITY</Subtitle>

          <SkylarkDivider />

          <Typography variant="body1">
            Skylark promotes a culture of giving back to Jamaica and actively
            supports the Rockhouse Foundation. Established by the Rockhouse and
            Skylark owners in 2003, the Rockhouse Foundation transforms the
            places where Jamaica’s children learn and support the great people
            who teach them. With US $8 million invested in transforming six
            local public schools and the Negril Library, the foundation impacts
            the lives of thousands of children and their families every day.
            Skylark, Rockhouse, and the owners underwrite all the administrative
            expenses of the Foundation, so every cent of each donation directly
            supports the projects. Rockhouse Foundation is a IRS recognized
            501(c)(3) non-profit and Jamaican registered charity.
          </Typography>
          <Typography variant="body1">
            For it’s latest project the Rockhouse Foundation conceived of and
            built from the ground up Jamaica’s first public mixed ability,
            full-inclusion model early childhood school, where children with a
            wide range of disabilities are taught side-by-side typical learners
            in the same classroom. The school is located in the area’s capital
            city, Savannah-la-Mar, is called “Sav Inclusive”, and currently has
            over 175 children enrolled from 3 year olds to 3rd grade. The
            Foundation has recently embarked on a further commitment to expand
            the school, adding a grade level a year for the next 10 years so the
            third graders have a path right through primary and high school.
            Currently the Rockhouse Foundation is constructing the primary
            school expansion, partnering with the Ministry of Education. When
            school is in session we offer weekly visits and volunteer
            opportunities at the school. You can learn more about the foundation
            and contribute to our work by visiting the website:
          </Typography>
        </Box>
        <Box className="mb-3 mt-3 text-center">
          <Button
            href="http://www.rockhousefoundation.org/about-us/"
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
            Rockhouse Foundation
          </Button>
        </Box>
      </PageContainer>
    </Layout>
  )
}

export default About
