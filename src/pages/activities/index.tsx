import { FiberManualRecord } from '@mui/icons-material'
import { Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'

import ActivityDay from '../../components/activities/ActivityDay'
import CustomImage from '@/components/features/toolbox/CustomImage'
import Layout from '../../components/layout/Layout'

const activities = [
  {
    weekDay: 'Monday',
    activities: [
      {
        content: (
          <Typography fontWeight={600} paddingBottom={0}>
            <span className="text-blue">Complimentary</span> Yoga at the Skydeck
          </Typography>
        ),
        time: '9:30am',
      },
      {
        content: (
          <Typography fontWeight={600}>
            <span className="text-blue">Complimentary</span> Rockhouse <br />
            Hydroponic Farm and Garden Tour <br /> Take the Shuttle to
            Rockhouse.
          </Typography>
        ),
        time: '9:45am',
      },
    ],
  },
  {
    weekDay: 'Tuesday',
    activities: [
      {
        content: (
          <Typography fontWeight={600}>
            <span className="text-blue">Complimentary</span> General Manager's
            Social <br /> at The Games Room
          </Typography>
        ),
        time: '5:00pm',
      },
    ],
  },
  {
    weekDay: 'Wednesday',
    activities: [
      {
        content: (
          <Typography fontWeight={600} paddingBottom={0}>
            Yoga at the Skydeck $20
          </Typography>
        ),
        time: '9:30am',
      },
      {
        content: (
          <Typography fontWeight={600}>
            <span className="text-blue">Complimentary</span> Rockhouse <br />{' '}
            Foundation School Tour
            <br />
            Departs in the Lobby
          </Typography>
        ),
        time: '9:45am',
      },
    ],
  },
  {
    weekDay: 'Thursday',
    activities: [
      {
        content: (
          <Typography fontWeight={600} paddingBottom={0}>
            <span className="text-blue">Complimentary</span> Spa Sensory
            <br />
            Experience at the Beach Cabana
          </Typography>
        ),
        time: '10:00am',
      },
      {
        content: (
          <Typography fontWeight={600}>
            <span className="text-blue">Complimentary</span> Rockhouse
            Hydroponic <br />
            Farm and Garden Tour <br /> Take the Shuttle to Rockhouse
          </Typography>
        ),
        time: '11:15am',
      },
    ],
  },
]
const activities2 = [
  {
    weekDay: 'Friday',
    activities: [
      {
        content: (
          <Typography fontWeight={600}>
            <span className="text-blue">Complimentary</span> Cooking Class{' '}
            <br /> at the Games Room
          </Typography>
        ),
        time: '3:00pm',
      },
    ],
  },
  {
    weekDay: 'Saturday',
    activities: [
      {
        content: (
          <Typography fontWeight={600} paddingBottom={0}>
            Yoga at the Skydeck $20
          </Typography>
        ),
        time: '9:30am',
      },
      {
        content: (
          <Typography fontWeight={600}>
            Candle Making Class $40 <br /> Includes Custom Candle <br />
            Sign Up at Front Desk and <br />
            Take the Shuttle to Rockhouse
          </Typography>
        ),
        time: '11:15am',
      },
    ],
  },
  {
    weekDay: 'Sunday',
    activities: [
      {
        content: (
          <Typography fontWeight={600}>
            Psilocybin Soundbath $50 <br /> Includes Psilocybin, Breathworks{' '}
            <br />
            Meditation and Soundbath <br />
            Take the Shuttle to Rockhouse <br />
            Sign up at Front Desk <br />
            Soundbath starts at 11:00am & 2:00pm
          </Typography>
        ),
        time: '10:30am & 1:30pm',
      },
    ],
  },
]

export default function Activities() {
  return (
    <Layout title="Activities">
      <Container
        sx={{
          mx: 'auto',
          mt: 3.5,
        }}
        maxWidth="lg"
      >
        <Typography variant="h1" align="center" color="primary">
          Daily Activities At Skylark
        </Typography>
        {/* <Stack alignItems="center" mb={2}>
            <Typography variant="h2" align="center">
              Shuttle To Rockhouse Everyday
            </Typography>
            <Stack rowGap={-1}>
              <Stack alignItems="center">
                <Typography fontWeight={600} paddingBottom={0} align="center">
                  <span className="text-blue">Complimentary</span> Return
                  Shuttle to <span className="font-bolder">Rockhouse</span>
                </Typography>
                <Typography fontWeight={600} paddingBottom={0} align="center">
                  11:15am Departure / 2:45pm Return{' '}
                  <FiberManualRecord sx={{ fontSize: 10 }} /> Departs the Lobby
                </Typography>
                <Typography fontWeight={600} align="center">
                  Relax at the pool, snorkel in Pristine Cove and lunch at
                  Rockhouse Restaurant or Pool Grill.*
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} columnGap={5}>
            <Stack rowGap={2}>
              {activities?.map((activity) => (
                <ActivityDay
                  weekDay={activity.weekDay}
                  activities={activity.activities}
                />
              ))}
            </Stack>
            <Stack>
              {activities2?.map((activity) => (
                <ActivityDay
                  weekDay={activity.weekDay}
                  activities={activity.activities}
                />
              ))}
              <Typography align="center" marginTop={3}>
                For Reservations <span className="font-bold">Dial 0</span>
                <br /> or <span className="font-bold">Ask the Front Desk</span>
              </Typography>
            </Stack>
          </Stack>
          <Typography align="center" marginTop={3}>
            *Rockhouse Occasionally is booked out for private events. Snorkel
            gear is available at the poolbar for a normal fee. No children under
            12 are permitted in the pool area at Rockhouse. For a comprehensive
            local "to do" list, ask our Front Desk about our{' '}
            <Link href="/negril-guide">
              <span className="cursor-pointer font-bold text-pink">
                Negril Vacation Guide
              </span>
            </Link>
            .
          </Typography> */}
        <Stack justifyContent={'center'} alignItems="center">
          <CustomImage height={800} width={900} src="/Skylark_Activities.jpg" />
        </Stack>
      </Container>
    </Layout>
  )
}
