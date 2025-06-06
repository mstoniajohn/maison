import { useAppDispatch } from '@/app/store'
import BookButton from '@/components/features/BookButton'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import CarouselInsta from '@/components/features/CarouselInsta'
import { featureCards } from '@/components/features/data'
import ExternalMUILink from '@/components/features/ExternalMUILink'
import FullwidthSection from '@/components/features/FullwidthSection'
import SlideDivs from '@/components/features/SlideDivs'
import ImageTextFullscreen from '@/components/landing/ImageTextFullscreen'
import ImageTextFullscreenRight from '@/components/landing/ImageTextFullscreenRight'
import ImageTextHalf from '@/components/landing/ImageTextHalf'
import Layout from '@/components/layout/Layout'
import { verifyToken } from '@/features/auth/authSlice'
import { getBlogs } from '@/features/blog/blogSlice'
import { getInstaPosts } from '@/features/instagram/instagramSlice'
import { Typography } from '@mui/material'
import { useAppSelector } from '@/app/store'
import { useEffect, useState } from 'react'
import SummerSpecials from '@/components/popups/SummerSpecials'

const imagesList = [
  {
    src: '/skylark-landing-1.jpg',
    name: 'Skylark Negril',
    mobileSrc: '/skylark-landing-1.jpg',
  },
  {
    src: '/skylark-hotel-landing-page.jpg',
    name: 'Skylark Hotel & Spa',
    mobileSrc: '/skylark-hotel-landing-page.jpg',
  },
  {
    src: '/skylark-landing-3.jpg',
    name: 'Skylark Hotel & Spa',
    mobileSrc: '/skylark-landing-3.jpg',
  },

  {
    src: '/skylark-landing-4.jpg',
    name: 'Skylark Hotel & Spa',
    mobileSrc: '/skylark-landing-4.jpg',
  },
]
const Home = () => {
  const dispatch = useAppDispatch()
  // const blogs = useAppSelector((state) => state.blogs || [])
  const instaPosts = useAppSelector((state) => state.instagram.instaPosts)
  console.log('first', instaPosts)
  const { currentUser, user } = useAppSelector((state) => state.auth)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])
  useEffect(() => {
    dispatch(getInstaPosts())
    // getTempIg()
  }, [])
  useEffect(() => {
    if (user) {
      dispatch(verifyToken({ token: { token: user?.access } }))
    }
  }, [])
  // console.log(currentUser, user)
  return (
    <Layout description="Discover Rockhouse Hotel’s Sister Resort, Skylark Negril, Situated Along The Famous White Sands of Jamaica’s Seven Mile Beach">
      <div className="relative">
        <SummerSpecials />

        <BootstrapCarousel images={imagesList} />

        <BookButton />
        <h1 className="hidden">Skylark</h1>
        <ImageTextHalf
          text="Skylark means to laze about, idle, goof off, lollygag, dilly-dally, tarry, behave in an irresponsible manner, to ne’er-do-well, mischief make, engage in shenanigans, tomfooleries and loaf, which are perfect ways to describe your Negril beach vacation. Located on Negril’s iconic Seven Mile Beach, facing due west towards spectacular nightly sunsets, the 40-room resort is the sister property to the town’s beloved Rockhouse Hotel. While prioritizing our guest’s experience, and nurturing the spirit of the amazing team, Skylark undertakes environment best practice (a member of Regenerative Travel) while puts back into the community through the"
          link="Rockhouse Foundation."
        />

        <ImageTextFullscreen
          title="STAY"
          text="Skylark’s retro tropical design is punctuated by hotel’s signature aquamarine hue throughout the two-acre slice of paradise. Oversized guest rooms (almost all rooms are over 400 sq. ft), king-size four post beds and subtle pops of color brighten beach chairs, striped rugs, ﬂoor tiles, lighting ﬁxtures, and the guest room front doors. With over 200ft of beach frontage, the Skylark Resort is discreetly tucked away among palm trees, sea grapes, and hibiscus ﬂowers. A Skylark getaway is the perfect last-minute jaunt to recharge your batteries creatively, physically, and mentally."
        />
        <ImageTextFullscreenRight
          title="EAT AT"
          text="Miss Lily’s has opened its first Jamaican outpost at Skylark, bringing it’s highly celebrated Caribbean cuisine and sunny vibes to the islands. Miss Lily’s at Skylark embodies the best elements of its New York counterpart – a modern approach to classic Jamaican cooking, friendly and cool as-can-be staff, and vibrant and colorful atmosphere. The menu features our on-display jerk smokehouse and BBQ grilling station, with all the classic fixings of “yard” cuisine."
        />

        <div className="relative">
          <SlideDivs items={featureCards} />
        </div>
        <div className="relative mx-auto mb-6 w-screen max-w-3xl px-4 text-center md:max-w-5xl">
          <Typography variant="h2" color="primary">
            LIFE AT SKYLARK
          </Typography>
          <p>
            Skylark is a stylishly designed boutique hotel property, speaking to
            a varying range of engaged explorers, cultural nomads, young
            creatives, and seasoned veteran Jamaica-philes. It’s fun and relaxed
            atmosphere spotlights, honors and heavily engages our guests in
            Jamaica’s rich cultural history, making guests feel local on arrival
            and providing an instant insider experience. Friendly and connected
            staff offer highly bespoke and local personal travel experiences.
            The soundtrack is an ever-present, ultra-educated mix of Jamaican
            music spanning the decades.
          </p>
        </div>
        <div className="relative mx-auto mb-1 w-screen max-w-3xl text-center">
          <Typography variant="h2" color="primary">
            VISIT{' '}
            <ExternalMUILink
              href="https://www.instagram.com/skylarknegril/"
              variant="h2"
              color="primary"
              hoverColor="secondary.main"
              bold
            >
              <u>OUR INSTAGRAM</u>
            </ExternalMUILink>
          </Typography>
          <p>{/* IG plugin */}</p>
        </div>
        <div className="relative mx-auto mb-8 w-screen text-center">
          <CarouselInsta items={instaPosts ? instaPosts : []} />
        </div>

        <div className="relative mx-auto mb-12 w-screen max-w-3xl px-4  text-center md:max-w-5xl">
          <Typography variant="h2" color="primary">
            DISCOVER JAMAICA
          </Typography>

          <p>
            Soft white sands, clear blue water, and fun in the sun await at our
            Caribbean paradise. Discover our kaleidoscope of color and nature
            when you stay at the Skylark Negril Beach Resort. Your getaway is
            more than just a trip to the Caribbean; it’s an immersive experience
            into the heart of Jamaica.
          </p>
        </div>
        <div className="relative">
          <FullwidthSection
            title="AWARDS & PRESS"
            img="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714207/skylark/parasailing-2-1500x650.jpg_myfz0m.webp"
            link="/press-media"
            linkText="Review What the Critics Are Saying"
            text="Since opening in 2018, Skylark has been celebrated by press and media around the world. Link to coverage by journalists from Vanity Fare, Vogue, Food & Wine, Elle Decor, Cool Hunting, Sunday Times, Conde Nast Traveler, Travel + Leisure, Departures, Afar, Forbes, New York Times, Brides and many others."
            subtitle="STAMP OF APPROVAL"
            floating={false}
            imgMobile="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714207/skylark/parasailing-2-1500x650.jpg_myfz0m.webp"
          />

          <FullwidthSection
            title="COMMITMENT TO OUR VALUES"
            img="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714208/skylark/Student-1500x650.jpg_lsdiiv.webp"
            link="/about-us#community-section"
            linkText="Learn More"
            text="Our commitment is to sustainably balance the interests of all parties - giving guests an amazing boutique hotel vacation, making our awesome Jamaican team partners in our success, taking care of the environment and giving back to our community through the Rockhouse Foundation, transforming the places where Jamaica's children learn and supporting the great people who teach them."
            subtitle="OUR COMMUNITY"
            floating={true}
            imgMobile="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714208/skylark/Student-1500x650.jpg_lsdiiv.webp"
          />
          <FullwidthSection
            title="DIRECTIONS"
            img="https://res.cloudinary.com/dfwvu4gct/image/upload/v1651419739/skylark/Skylark_Map_temp_1500x650_wlwu5y.jpg"
            link="/contact-us"
            linkText="Contact Us For Help"
            text="Negril sits on Jamaica's western coast, 76 km from Sangster International Airport in Montego Bay. The 90-minute ride winds along the coast, allowing you to take in the wonderful sights of western Jamaica. If you have not booked your transfer from the airport to the hotel, we recommend Kenny Tours."
            subtitle=""
            floating={false}
            imgMobile="https://res.cloudinary.com/dfwvu4gct/image/upload/v1679795829/skylark/skylark-map_qohjyo.jpg"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
