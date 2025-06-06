import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import PageLinks from '@/components/features/PageLinks'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import PageImages from '@/components/features/PageImages'
import Layout from '@/components/layout/Layout'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/text/Title'
import {
  Box,
  Typography,
  Link as MLink,
  Grid,
  Stack,
  Button,
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1654960362/skylark/skylar-negril-hero-1-1500x609.jpg_noni65.webp',
    name: 'Skylark Negril',
  },
]

function Faq() {
  const router = useRouter()
  return (
    <Layout title="FAQ">
      <BootstrapCarousel images={imagesList} />

      <PageContainer>
        <Title>FAQ</Title>
        <SkylarkDivider />
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Typography variant="body1">
              Have a question? We have an answer! We want our guests to be as
              comfortable as possible during your stay at Skylark Negril Beach
              Resort, so we go above and beyond to make sure your stay is the
              best it can possibly be. Read through our FAQ, and don’t hesitate
              to ask any questions we haven’t answered.{' '}
              <strong className="font-bold">
                In the meantime, you can{' '}
                <Link href="/negril-guide">
                  <span className="text-[#E088A8]">
                    access our complimentary Vacation Guide{' '}
                  </span>
                </Link>
                for a list of things to see and do on the island!
              </strong>
            </Typography>
            <Box className="mb-4 text-center">
              <Button
                variant="contained"
                onClick={() => router.push('/negril-guide')}
                disableElevation={true}
                size={'large'}
                color={'secondary'}
                sx={{
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  border: '2px solid transparent',
                  color: 'white',
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'white',
                    border: `2px solid  #E78FB3`,
                  },
                }}
              >
                Request the Vacation Guide
              </Button>
            </Box>
            <Box className="mt-4">
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: WHERE IS SKYLARK NEGRIL BEACH RESORT LOCATED?
              </Typography>
              <Typography>
                A: Our resort is located right on the soft sands of Seven Mile
                Beach on Norman Manley Boulevard in Negril, Jamaica.
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: HOW CAN I BOOK MY STAY?
              </Typography>
              <Typography>
                A: You have two options to book your getaway! You can easily{' '}
                <a
                  href="https://www.bookonthenet.net/east/premium/eresmain.aspx?id=pNNHpvoosu2biyLWVhrjhoDDU%2foGNGp1BfqDiWfInlM%3d&_ga=2.101090049.122808749.1650376593-287123385.1650376593#/search"
                  className="font-bold text-[#E088A8] hover:text-[#51BAB3]"
                >
                  book online
                </a>
                , or you can call +1 (212) 807-0868 for reservations.
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: DOES THE RESORT ALLOW PETS?
              </Typography>
              <Typography>
                A: No, Skylark Negril Beach Resort does not accept pets.
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: WHERE SHOULD I FLY INTO?
              </Typography>
              <Typography>
                A: You will most likely fly into Montego Bay Airport. We
                recommend using{' '}
                <MLink
                  href="https://www.vipattractions.com/meet-greet"
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: 'secondary.main',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Club Mobay Greet Arrival Service
                </MLink>{' '}
                to expedite your service through Immigration, Customs, and
                security. You’ll be taken to a comfortable VIP lounge to wait
                for your transportation to arrive, too!
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: HOW CAN I GET FROM THE AIRPORT TO SKYLARK NEGRIL BEACH
                RESORT?
              </Typography>
              <Typography>
                A:{' '}
                <Link href="/blog/montego-bay-airport-to-negril">
                  <span className="font-bold text-[#E088A8] hover:text-[#51BAB3]">
                    Getting from Montego Bay Airport to Negril
                  </span>
                </Link>{' '}
                is easy! Skylark Negril Beach Resort is a 75-minute scenic drive
                from Montego Bay’s Donald Sangster International Airport, so
                you’ll need to arrange transportation. We highly recommend going
                with Kenny Tours. Their drivers are friendly and knowledgeable,
                and you can make some fun stops along the way.
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: DO I NEED TO BRING BEACH SUPPLIES?
              </Typography>
              <Typography>
                A: No! Skylark Negril Beach Resort has incredible amenities that
                include lounges, umbrellas, and beach games.
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: DO YOU HAVE FOOD AND BEVERAGES AT THE BEACH?
              </Typography>
              <Typography>
                A: Yes! Sit back, relax, and work on your tan. We have a
                beachside food and beverage service that we know you’ll love.
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: DO YOU SERVE BREAKFAST?
              </Typography>
              <Typography>
                A: Skylark Negril Beach Resort does not serve a complimentary
                breakfast to our guests, but our onsite restaurant is open every
                day from 7:30 a.m. to 10:30 p.m.
              </Typography>

              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: WHEN CAN I CHECK-IN?
              </Typography>
              <Typography>
                A: We offer 24-hour check-in with a staffed front desk around
                the clock.
              </Typography>

              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                Q: DO YOU HAVE WIFI ON THE PROPERTY?
              </Typography>
              <Typography>
                A: We have complimentary WiFi throughout the entire resort.
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                MORE QUESTIONS?
              </Typography>
              <Typography>
                If you have any more questions, please don’t hesitate to contact
                us! We can be reached a{' '}
                <MLink color="secondary.main" href="tel:+1-876-957-4364">
                  +1 (876) 957-4364
                </MLink>{' '}
                or{' '}
                <MLink
                  color="secondary.main"
                  href="mailto:info@skylarknegril.com"
                >
                  info@skylarknegril.com
                </MLink>
                .
              </Typography>
            </Box>
            <Box marginTop={3}>
              <Typography
                variant="h2"
                component="h2"
                color="primary"
                sx={{ fontWeight: '400' }}
              >
                BOOK YOUR STAY TODAY
              </Typography>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <img
                  src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1680229999/skylark/rooms-1-1-300x300_hygk5j.jpg"
                  alt=""
                />
                <Typography variant="body1">
                  Are you ready to book your getaway? Skylark Negril Beach
                  Resort has everything you need for the vacation of a lifetime.
                  Not only is our resort located right on the famous Seven Mile
                  Beach, but we also have a{' '}
                  <PageLinks url="/eat" text="restaurant" />
                  and <PageLinks url="/spa" text="spa" />
                  right onsite. Everything you need is at your fingertips!{' '}
                  <PageLinks url="/stay" text="Browse our room types" /> and
                  book your stay today - we can't wait to host you.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <PageImages />
          </Grid>
        </Grid>
      </PageContainer>
    </Layout>
  )
}

export default Faq
