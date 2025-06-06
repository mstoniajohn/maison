import React from 'react'
import Layout from '../../components/layout/Layout'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import { Box, Grid, Typography } from '@mui/material'

import PageContainer from '../../components/PageContainer'
import ExternalMUILink from '@/components/features/ExternalMUILink'
import PageLinks from '@/components/features/PageLinks'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import Title from '../../components/text/Title'

const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714516/skylark/Swimming-Snorkelinh-1500x609_xm6qh5.jpg',
    name: 'images',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662305/skylark/Swimming-Snorkelinh-767x511_kuvqta.jpg',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714511/skylark/Glass-Bottom-Boat-1500x609.jpg_lfn0qs.webp',
    name: 'images',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/Glass-Bottom-Boat-767x511.jpg_ev9sct.webp',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714515/skylark/Skylark-DJ-1-1500x609.jpg_bbxrkg.webp',
    name: 'images',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662305/skylark/Skylark-DJ-1-767x511.jpg_usveyy.webp',
  },
]
const sideImages = [
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714500/skylark/31156397917_5e46ed5957_z-263x185.jpg_avilyh.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714502/skylark/45371278514_da77f9e61c_z-263x185.jpg_lux5tk.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714502/skylark/45371283574_b28f1b13b0_z-263x185_j77tji.jpg',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714515/skylark/Untitled-design-5-332x232.png_gfxyla.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714511/skylark/miss-lilys-bar-1-263x185_jpw6i0.jpg',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714512/skylark/Outdoor-Massage-263x185_nws8m8.jpg',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714513/skylark/Skylark-Booth-1-263x185.jpg_rchcnp.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714207/skylark/playpage2-e1545410503482-555x450_lhirqb.jpg',
]
const Play = () => {
  return (
    <Layout title="Play">
      <BootstrapCarousel images={imagesList} />

      <PageContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Title>PLAY | THE BEST THINGS TO DO IN NEGRIL, JAMAICA</Title>

            <SkylarkDivider />

            <Typography variant="body1" gutterBottom>
              A gorgeous, island oasis, Negril is the perfect place to escape
              for a romantic celebration, a girls getaway, or some fun in the
              sun. The days are full of serenity, relaxation, and adventure,
              while the nights come alive with reggae music and dancing. During
              your stay at Skylark Negril Beach Resort, you can explore all the{' '}
              <strong>things to do in Negril, Jamaica.</strong>
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              sx={{ fontWeight: '400' }}
            >
              TOP 7 THINGS TO DO IN NEGRIL, JAMAICA
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              color="primary"
              sx={{ fontWeight: '400' }}
            >
              HIT THE BEACH
            </Typography>

            <Typography>
              Skylark Negril Beach Resort is placed perfectly on the soft sands
              of Seven Mile Beach. Wake up and walk a few steps out your door to
              stretch out on the sand every morning, explore the island in the
              afternoon, and come back to the shore to laze about with a
              cocktail. With the beach readily available, you can enjoy it as
              much as you’d like.{' '}
            </Typography>
            <Typography gutterBottom>
              <strong>Bonus:</strong> Here are{' '}
              <a
                className="font-bold text-pink"
                href="blog/secluded-beaches-in-jamaica"
              >
                six of our favorite secluded beaches in Jamaica
              </a>
              {/* <PageLinks
                  url="/blog/secluded-beaches-in-jamaica"
                  text="six of our favorite secluded beaches in Jamaica"
                /> */}
              .
            </Typography>

            <Typography variant="h3" color="primary" sx={{ fontWeight: '400' }}>
              EXPLORE THE OCEAN
            </Typography>

            <Typography>
              Swimming and snorkeling in the crystal-clear waters of Negril’s
              Seven Mile Beach are amongst the most popular things to do in
              Negril; paddleboarding is another favored option, and it's
              complimentary when you stay at Skylark. Take a short boat trip out
              to the reef for some snorkeling; abundant clusters of dwarf tube
              sponges, vibrant coral heads, and a variety of colorful reef fish
              await you. Here are some of our favorite ways to get out on the
              water:
            </Typography>

            <Box className="mb-3 ml-7">
              <ul className="ml-5 list-disc">
                <li>
                  Indulge in a{' '}
                  <a
                    className="font-bold text-pink"
                    href="/blog/sunset-catamaran-cruise-in-jamaica/"
                  >
                    sunset catamaran cruise
                  </a>
                  .
                </li>
                <li>
                  Go to one of these{' '}
                  <a
                    className="font-bold text-pink"
                    href="/blog/snorkeling-in-negril-jamaica/"
                  >
                    snorkeling spots
                  </a>
                  .
                </li>
                <li>
                  Here’s your{' '}
                  <a
                    className="font-bold text-pink"
                    href="/blog/scuba-diving-in-negril-jamaica/"
                  >
                    ultimate guide
                  </a>{' '}
                  to scuba diving in Negril.
                </li>
              </ul>
            </Box>

            {/* next */}
            <Typography variant="h3" color="primary" sx={{ fontWeight: '400' }}>
              HAVE AN ADVENTURE
            </Typography>

            <Typography variant="body1">
              We encourage guests to get out and enjoy Jamaica’s many cultural
              treasures and offer a full menu of suggested off-premise
              excursions. This includes natural waterfalls, mineral baths,
              jungle canopy zip-lining, parasailing, glass bottom boating, and
              many other fun day-trips ranging from exhilarating to educational.
              Take a look at some of our favorite spots to explore:
            </Typography>
            <Box className="mb-3 ml-7">
              <ul className="list-disc pl-4">
                <li>
                  <a
                    className="font-bold text-pink"
                    href="/blog/ys-falls-in-jamaica/"
                  >
                    Tour YS Falls
                  </a>
                  , zipline over the jungle, and lounge by their river pool. .
                </li>

                <li>
                  Take a tour of the{' '}
                  <a
                    className="font-bold text-pink"
                    href="/blog/appleton-rum-tours/"
                  >
                    Appleton Estate
                  </a>
                  .
                </li>
                <li>
                  Go on a{' '}
                  <a
                    className="font-bold text-pink"
                    href="/blog/black-river-safari-in-jamaica/"
                  >
                    Black River Safari
                  </a>
                  .
                </li>
                <li>
                  Visit the{' '}
                  <a
                    className="font-bold text-pink"
                    href="/blog/blue-hole-mineral-spring-in-jamaica/"
                    // text=""
                  >
                    Blue Hole Mineral Spring
                  </a>
                  .
                </li>
              </ul>
            </Box>
            <Typography variant="h3" color="primary" sx={{ fontWeight: '400' }}>
              AN EVENING OUT
            </Typography>

            <Typography gutterBottom>
              Jamaica is known for its{' '}
              <a className="font-bold text-pink" href="/blog/negril-nightlife/">
                nightlife
              </a>
              , and we know some of the best places to party in Negril. Let
              loose at a club like{' '}
              <ExternalMUILink href="http://the-jungle-negril.com/index.html">
                The Jungle
              </ExternalMUILink>
              , watch the sunset at{' '}
              <a
                className="font-bold text-pink"
                href="/blog/cliff-jumping-in-negril-at-ricks-cafe/"
              >
                Rick's Cafe
              </a>
              , or sip on some tropical beverages at our favorite{' '}
              <a
                className="font-bold text-pink"
                href="/blog/bars-in-negril-jamaica/"
              >
                bars
              </a>
              . Plus, our onsite restaurant,{' '}
              <PageLinks text="Miss Lily's" url="/eat" />, transforms into a
              late-night atmosphere after sunset with local and international
              DJs spinning the latest in reggae and dancehall.
            </Typography>
            <Typography variant="h3" color="primary" sx={{ fontWeight: '400' }}>
              TIME TO DINE
            </Typography>

            <Typography gutterBottom>
              Our island is filled with incredible{' '}
              <a
                className="font-bold text-pink"
                href="/blog/best-places-to-eat-in-jamaica/"
              >
                places to eat
              </a>
              . Whether you’re here to try the most authentic jerk chicken or
              want to indulge in fresh lobster everyday, we can point you in the
              right direction. Plus, <PageLinks url="/eat" text="Miss Lily’s" />{' '}
              is conveniently located at Skylark Negril Beach Resort. Our
              vibrant and colorful atmosphere provides the perfect backdrop for
              dishes such as smoked and seasoned chicken, pork, and fish
              straight off the grill served with all the classic fixings of
              “yard” cuisine.
            </Typography>
            <Typography variant="h3" color="primary" sx={{ fontWeight: '400' }}>
              RELAX & REJUVENATE
            </Typography>

            <Typography gutterBottom>
              As soon as you step foot on our property, you’ll immediately feel
              your worries slip away. Take your relaxation to the next level
              when you book one of our{' '}
              <PageLinks url="/spa" text="spa treatments" />. The Skylark Spa,
              an energetic temple overlooking the tropical gardens, features a
              full range of massage, foot, and beauty therapies for singles and
              couples.
            </Typography>
            <Typography variant="h3" color="primary" sx={{ fontWeight: '400' }}>
              ONSITE ACTIVITIES
            </Typography>

            <Typography>
              At Skylark, we work to curate a vast assortment of physical and
              creative activities. Our weekly scheduled classes include cooking,
              painting, meditative tours, a tour of the organic garden at{' '}
              <ExternalMUILink href="https://www.rockhouse.com/">
                Rockhouse
              </ExternalMUILink>
              , and our{' '}
              <ExternalMUILink href="http://www.rockhousefoundation.org/about-us/">
                Rockhouse Foundation
              </ExternalMUILink>{' '}
              Community Tour. Also available at our cliff-side sister property
              are daily yoga practices, Caribbean dance, and interval training
              at the fitness center. For activities at Rockhouse, our
              complimentary shuttle will bring you to the hotel located just 10
              minutes down the road.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Images list vertical */}
            <div className="mb-4 grid grid-cols-2 justify-center gap-4 sm:grid-cols-2 md:grid-cols-1 md:p-12">
              {sideImages.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt=""
                  className="w-82 mx-auto h-full object-contain"
                />
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ md: 6, xs: 4 }}
          px={{ xs: 0, m: 2 }}
          pt={2}
          // sx={{ padding: { md: 7, xs: 2 } }}
        >
          <Grid item xs={12} md={8}>
            <Typography variant="h3" color="primary" sx={{ fontWeight: '400' }}>
              PLAN THE GETAWAY OF A LIFETIME AT SKYLARK NEGRIL BEACH RESORT
            </Typography>

            <Typography variant="body1">
              Now that you know all of the things to do in Negril, Jamaica, it’s
              time to book your getaway. With stunning rooms,{' '}
              <PageLinks url="/resort-amenities" text="outstanding amenities" />
              , and an excellent location on Seven Mile Beach, it doesn’t get
              any better than Skylark.{' '}
              <PageLinks url="/stay" text="Browse our room types" /> and{' '}
              <ExternalMUILink href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.92736283.700408746.1679685400-401113273.1672706732">
                book your stay today!
              </ExternalMUILink>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714503/skylark/48324115871_b97c499479_o-1-767x511.jpg_m9dnx9.webp"
              alt="Skylark Negril Restort"
              className="object-contain"
            />
          </Grid>
        </Grid>
      </PageContainer>
    </Layout>
  )
}

export default Play
