import React, { useState } from 'react'

import { Container, Stack, Typography } from '@mui/material'

import ReactPlayer from 'react-player'
import { PlayCircleOutline } from '@mui/icons-material'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/text/Title'
import ExternalMUILink from '@/components/features/ExternalMUILink'
import Layout from '@/components/layout/Layout'

type Props = {}

const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1692454928/rockhouse/Screen_Shot_2023-08-13_at_2.16.12_PM_h9uwwd.png',
    name: 'Rockhouse Psilocybin',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1692454928/rockhouse/Screen_Shot_2023-08-13_at_2.16.12_PM_h9uwwd.png',
  },
]

function Candle({}: Props) {
  const [playVid, setPlayVid] = useState(false)

  return (
    <Layout title="Psilocybin">
      <BootstrapCarousel images={imagesList} />

      <PageContainer>
        <Title>CANDLE MAKING</Title>
        <Typography>
          Learn the basics of candle making from the Negril Candle Company. At
          the class you will be creating your own container, recycling a bottle,
          choosing your own fragrance, setting your wick, and blending and
          pouring your own personalize candle to take home with you.{' '}
        </Typography>
        <Typography>
          Classes are held every Saturday morning at 11.30 am across the road
          from Rockhouse at the Negril Candle Company production container. This
          one hour course takes you through all aspect of candle production. The
          $40 per person cost includes your own candle to take home (Price of
          the candle alone is normally $30).{' '}
        </Typography>
        <Typography>
          Sign up for the class at the link below or email{' '}
          <ExternalMUILink href="mailto:guestrelations@rockhouse.com">
            guestrelations@rockhouse.com
          </ExternalMUILink>{' '}
          if you have more questions, or call the Rockhouse Front Desk at{' '}
          <ExternalMUILink href="tel:+1-876-957-4373">
            (876) 957-4373
          </ExternalMUILink>{' '}
          to reserve your spot in a class{' '}
          <ExternalMUILink href="https://form.jotform.com/Rockhousehotel/candle-making">
            book a candle making class
          </ExternalMUILink>
          .
        </Typography>

        <div className=" mx-auto mt-5 w-full text-center" id="course_div">
          <ReactPlayer
            light="https://res.cloudinary.com/dfwvu4gct/image/upload/v1681592214/image1_iuyfu3.jpg"
            url="https://res.cloudinary.com/dfwvu4gct/video/upload/v1692459182/candles/candle_course_1_mpzmyx.mp4"
            playIcon={
              <PlayCircleOutline
                className="text-white"
                sx={{ fontSize: { xs: '6.5rem', md: '7.5rem' } }}
                onClick={() => setPlayVid(!playVid)}
              />
            }
            controls
            onClick={() => setPlayVid(!playVid)}
            width="320px"
            height="600px"
            playing={playVid}
            style={{
              margin: '0 auto',
            }}
          />
        </div>
      </PageContainer>
    </Layout>
  )
}

export default Candle
