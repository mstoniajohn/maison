import { Typography } from '@mui/material'
import React from 'react'

import Layout from '../components/layout/Layout'
import PageContainer from '../components/PageContainer'

import Title from '../components/text/Title'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'

const images = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714511/skylark/48324136936_29390ee17e_o-1-1500x609_oqmstv.jpg',
    name: 'Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/48324136936_29390ee17e_o-1-767x511.jpg_hbdupg.webp',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714506/skylark/48324129811_34c1868e0f_o-1-1500x609_os3app.jpg',
    name: 'Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/48324129811_34c1868e0f_o-1-767x511_kpz5cc.jpg',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714500/skylark/27348808978_333661d798_o-1-e1564609766295-1500x609.jpg_wgxtvc.webp',
    name: 'Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/27348808978_333661d798_o-1-e1564609766295-767x511.jpg_rhzzjw.webp',
  },
]
const Amenities = () => {
  return (
    <Layout
      title="Amenities"
      description="Experience Boutique Luxury At Rockhouse Hotel’s Sister Resort, Skylark Negril, Including Pristine Caribbean Beachfront Access, Luxury Spa, In-Room Amenities And Daily Shuttles To Rockhouse Hotel Jamaica."
    >
      <BootstrapCarousel images={images} />
      <PageContainer>
        <Title>RESORT AMENITIES</Title>

        <SkylarkDivider />

        <Typography>
          {' '}
          Our goal is to make your vacation as gratifying and stress-free as
          possible by offering many luxurious in-room amenities so you can focus
          on enjoying yourself rather than worrying about the essentials.
          Additionally, we have many resort-wide amenities to make your getaway
          fun, safe, and relaxing.
        </Typography>
        <Typography>
          We also care deeply for the beautiful environment that makes Seven
          Mile Beach such a special place and have taken numerous measures to
          help make our property as eco-friendly as possible to better preserve
          our region for generations to come.
        </Typography>
        <div className="mt-4 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <Typography
              variant="h2"
              color="primary"
              sx={{ fontWeight: 'bold' }}
            >
              PROPERTY-WIDE HOTEL AMENITIES:
            </Typography>

            <SkylarkDivider />
            <ul className="px-8">
              <li className="list-disc">
                Access to 220 feet of pristine beachfront and Caribbean Sea
              </li>
              <li className="list-disc">
                Beachfront lounges with towels and umbrellas (or tents) provided
              </li>
              <li className="list-disc">Beachside food & beverage service</li>
              <li className="list-disc">
                Complimentary paddle boards and beach games
              </li>
              <li className="list-disc">All-day beach lifeguard on duty</li>
              <li className="list-disc">
                Complimentary wifi throughout the property
              </li>
              <li className="list-disc">
                24-hour check-in with staffed front desk around the clock
              </li>
              <li className="list-disc">Concierge & guest services</li>
              <li className="list-disc">
                Full-service restaurant & bar offering (7:30am to 10:00pm)
              </li>
              <li className="list-disc">
                Spa with couples and singles treatment rooms and beachside
                tented cabana
              </li>
              <li className="list-disc">Boutique & gift shop</li>
              <li className="list-disc">
                Complimentary wedding and event planner
              </li>
              <li className="list-disc">
                Booking assistance for transportation around western Jamaica and
                airport transfers
              </li>
              <li className="list-disc">Complimentary on-property parking</li>

              <li className="list-disc">Tours</li>
              <li className="list-disc">
                A property-wide, 24-hour security team
              </li>
            </ul>
          </div>

          <div>
            <Typography
              variant="h2"
              color="primary"
              sx={{ mb: 2, fontWeight: 'bold' }}
            >
              PROPERTY-WIDE ENVIRONMENTAL INITIATIVES:
            </Typography>

            <SkylarkDivider />

            <ul className="px-8">
              <li className="list-disc">
                A member of Regenerative Travel (RT)
              </li>
              <li className="list-disc">
                Minimize usage of natural resources, air emissions, and
                hazardous materials
              </li>
              <li className="list-disc">
                Monitor and record environmental performance
              </li>
              <li className="list-disc">
                Continued commitment to improved practices
              </li>
              <li className="list-disc">
                Solar hot water (with gas heat back up)
              </li>
              <li className="list-disc">Low voltage lighting</li>
              <li className="list-disc">Rainwater harvesting</li>
              <li className="list-disc">Recycling and composting</li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </Layout>
  )
}

export default Amenities
