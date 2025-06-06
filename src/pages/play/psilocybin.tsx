import React, { useState } from 'react'

import ReactPlayer from 'react-player'
import { PlayCircleOutline } from '@mui/icons-material'
import Layout from '@/components/layout/Layout'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import PageContainer from '@/components/PageContainer'
import { Typography } from '@mui/material'
import Title from '@/components/text/Title'
import ExternalMUILink from '@/components/features/ExternalMUILink'
import ButtonCustom from '@/components/features/ButtonCustom'
import { Stack } from '@mui/system'

type Props = {}

const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1692454913/rockhouse/52751417384_30dbc9b0f0_b_kuw508.jpg',
    name: 'Rockhouse Psilocybin',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1692454913/rockhouse/52751417384_30dbc9b0f0_b_kuw508.jpg',
  },
]

function Psilocybin({}: Props) {
  const [playVid, setPlayVid] = useState(false)

  return (
    <Layout title="Psilocybin">
      <BootstrapCarousel images={imagesList} />

      <PageContainer>
        <Title>PSILOCYBIN SOUNDBATH</Title>
        <Typography>
          Rockhouse Hotel in Negril, has introduced a new weekly Psilocybin
          Soundbath, a two-hour wellness journey that incorporates the healing
          powers of plant medicine with meditation, breathwork and sound
          therapy. The session kicks off with a brief presentation on the
          benefits of psilocybin, followed by an optional microdose from{' '}
          <ExternalMUILink href="https://patoojamaica.com/">
            Patoo Chocolate
          </ExternalMUILink>
          , a local brand that offers premium chocolate bars crafted with
          Jamaican cacao and infused with a unique local strain of indigenous
          psilocybin fungi, which is legal in Jamaica. The microdose is designed
          to create a slightly altered state of consciousness, promoting
          neuroplasticity, and perhaps cracking open a portal into a new
          perspective.{' '}
        </Typography>
        <Typography>
          In a typical ritual, after taking the plant medicine, participants
          will enjoy a breathwork, meditation and energy session for
          approximately 30 minutes guided by a meditation instructor. As the
          plant psilocybin begins to work this is followed by an immersive live
          soundbath, which typically entails an ascending symphony of singing
          bowls and live loops of various drums, guitars, and other instruments.
          Rockhouse works with a dynamic rotating lineup of locally-based
          breathwork, meditation and sound bath specialists such as meditation
          guru Sativa Booker Mohamed and sound bath specialist Jeremy The
          Alchemist. The layers of sound and meditation complement the rising
          psilocybin experience, creating a sense of heightened spiritual
          awareness. The experience concludes with the host bringing guests back
          to external awareness by sitting in a circle, holding hands, and
          offering gratitude. Namaste!
        </Typography>
        <Typography>
          The Psilocybin Sound Bath takes place every Sunday at 11:30am and is
          Rockhouse's latest wellness offering, building upon the success of
          their award-winning Rockhouse Spa. For Skylark guests please take the
          11.15 am shuttle and let the driver know you are joining the
          Soundbath. The experience is available for $50 per person, which
          include the psilocybin, meditation and Soundbath, and takes place at
          the Rockhouse Farmhouse located in the organic garden directly across
          the road from the hotel and adjacent to their new Hydroponic
          Greenhouse.
        </Typography>
        <Stack alignItems="center" spacing={3}>
          <ButtonCustom href="https://form.jotform.com/Rockhousehotel/rockhouse-psilocybin-soundbath">
            BOOK the psilocybin soundbath
          </ButtonCustom>
          {/* <video width="auto" height="auto" controls>
                <source src="https://res.cloudinary.com/dfwvu4gct/video/upload/v1692456037/rockhouse/360p_jhwahi.mp4"  type="video/mp4"/>
                Your browser does not support the video tag.
                </video> */}
        </Stack>
        <div className=" mx-auto mt-5 w-full text-center" id="course_div">
          <ReactPlayer
            light="https://res.cloudinary.com/dfwvu4gct/image/upload/v1692454913/rockhouse/52751417384_30dbc9b0f0_b_kuw508.jpg"
            url="https://res.cloudinary.com/dfwvu4gct/video/upload/v1692456037/rockhouse/360p_jhwahi.mp4"
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

export default Psilocybin
