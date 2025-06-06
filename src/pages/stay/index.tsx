import Link from 'next/link'
import React, { useEffect } from 'react'

import {
  FaBath,
  FaWifi,
  FaPhone,
  FaSnowflake,
  FaBed,
  FaUsb,
} from 'react-icons/fa'
import { GiSpeaker } from 'react-icons/gi'

import { CircularProgress, Container, Stack, Typography } from '@mui/material'

import { Add, WineBar } from '@mui/icons-material'
import {
  fetchRooms,
  setCurrentRoom,
  setOpenRoomForm,
} from '@/features/room/roomSlice'
import PageContainer from '@/components/PageContainer'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import Title from '@/components/text/Title'
import PageLinks from '@/components/features/PageLinks'
import Subtitle from '@/components/text/Subtitle'
import CustomDialog from '@/components/layout/CustomDialog'
import AddOrEditRoom from '@/components/forms/AddOrEditRoom'
import GuestRoomsNew from '@/components/rooms/GuestRooms'
import { useAppDispatch, useAppSelector } from '@/app/store'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import Layout from '@/components/layout/Layout'

const imagesList = [
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1646231172/skylark/48324115871_b97c499479_o-1-1500x609.jpg_1_bgqxho.webp',
    name: 'Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/48324115871_b97c499479_o-1-767x511.jpg_v5ggqj.webp',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1646231173/skylark/48324236457_f38daeab6a_o-1-1-1500x609.jpg_d8yase.webp',
    name: 'Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662304/skylark/48324236457_f38daeab6a_o-1-1-767x511.jpg_nuorvx.webp',
  },
  {
    src: 'https://res.cloudinary.com/dfwvu4gct/image/upload/v1646231173/skylark/guest-bath-1-1310x609.jpg_kwnasn.webp',
    name: 'Skylark Negril',
    mobileSrc:
      'https://res.cloudinary.com/dfwvu4gct/image/upload/v1677662305/skylark/guest-bath-1-767x511.jpg_xjvdip.webp',
  },
]
const StayPage = () => {
  const dispatch = useAppDispatch()
  const { rooms, openRoomForm } = useAppSelector((state) => state.rooms)
  const { currentUser, user } = useAppSelector((state) => state.auth)
  const handleRoomAdd = () => {
    dispatch(setCurrentRoom(null))
    dispatch(setOpenRoomForm(true))
  }

  useEffect(() => {
    //  fetch rooms
    dispatch(fetchRooms())
  }, [])

  const handleCloseDialog = () => {
    dispatch(setCurrentRoom(null))
    dispatch(setOpenRoomForm(false))
  }
  return (
    <Layout
      title="Guest Rooms"
      description="Reserve Your Stay in Jamaica At Skylark Negril, A Boutique Luxury Resort On The Iconic Seven Mile Beach With Newly Renovated Suites And Rooms With Ocean Views"
    >
      <BootstrapCarousel images={imagesList} />
      <PageContainer>
        <Title center>GUEST ROOMS</Title>
        <SkylarkDivider />

        {/* <h1 className="my-4 text-2xl font-bold text-teal-500">GUEST ROOMS</h1> */}
        <Typography marginTop={5} align="center">
          Skylark Negril Beach Resort is ideally situated directly on the white
          sands and tranquil, crystal-clear waters of Negril’s famed Seven Mile
          Beach. Prepare to be swept away at our{' '}
          <PageLinks url="/about-us" text="boutique hotel in Jamaica" /> by our
          oceanfront views and comfortable, modern lodging, making Skylark one
          of the best places to rest your head. Our forty room resort evokes a
          seasoned travelers’ beach pad vibe, recalling the retro glamour and
          carefree indulgence of Jamaica’s bohemian beach scene in the 60’s and
          70’s.{' '}
        </Typography>
        <Typography align="center">
          Choose from an array of accommodations that suit your style and needs.
          Our studio rooms give you a traditional hotel-style experience with{' '}
          <PageLinks url="/about-us" text="modern amenities" /> and décor. The
          patio and balcony studio rooms kick it up a notch with private, fully
          furnished balconies or your choice of ground floor patios providing
          garden or ocean views. Nearly all our rooms at Skylark can comfortably
          accommodate at least three people (1 king bed and 1 twin bed).
        </Typography>

        <section className="mx-auto max-w-6xl p-4 text-center">
          <Subtitle center>AMENITIES</Subtitle>
          {/* <h2 className="my-4 text-xl font-bold text-teal-500">AMENITIES</h2> */}
          <ul className="list-style-none flex flex-wrap justify-center space-x-4">
            <li className="flex  items-center space-x-2">
              <FaBath className="flex-shrink-0 text-pink" />
              <span>Jamaican Starfish Oil Beach and Bath Essentials</span>
            </li>
            <li className="flex items-center space-x-2">
              <GiSpeaker className="flex-shrink-0 text-pink" />
              <span>Bluetooth Speakers</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaWifi className="flex-shrink-0 text-pink" />
              <span>Property-wide Wifi</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="flex-shrink-0 text-pink" />
              <span>Telephone</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaSnowflake className=" flex-shrink-0 text-pink" />
              <span>Air-conditioning</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaBed className="flex-shrink-0 text-pink" />
              <span>King Size Bed</span>
            </li>
            <li className="flex items-center space-x-2">
              <WineBar className="flex-shrink-0 text-pink" />
              <span>Full Stocked Mini-Bar</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaUsb className="flex-shrink-0 font-bold text-pink" />
              <span>USB Outlets</span>
            </li>
          </ul>
        </section>
        <section className="p-4">
          {currentUser?.admin ? (
            <div className="flex items-center">
              <Typography variant="h3" color="primary">
                Add New Room
              </Typography>
              <Add
                onClick={handleRoomAdd}
                className="mb-2 ml-2 cursor-pointer text-blue"
              />
            </div>
          ) : null}
          {rooms ? (
            rooms.map((room) => (
              <GuestRoomsNew
                pkid={room.pkid}
                room={room}
                key={room.id}
                title={room.title}
                subtitle={room.sub_title}
                link={
                  room?.link ||
                  'https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.59131691.700408746.1679685400-401113273.1672706732'
                }
                description={room.description}
                images={[
                  room?.image1,
                  room?.image2,
                  room?.image3,
                  room?.image4,
                  room?.image5,
                  room?.image6,
                  room?.image7,
                  room?.image8,
                  room?.image9,
                ]}
              />
            ))
          ) : (
            <Stack justifyContent="center" alignItems="center">
              <CircularProgress />
            </Stack>
          )}
          {/* <GuestRooms
              title="OCEAN VIEW STUDIO"
              image="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714518/skylark/Skylark-charis-with-beach-view-600x450.jpg_w8mqmz.webp"
              link="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.59131691.700408746.1679685400-401113273.1672706732"
              text1="Space for additional Twin Bed"
              text2="Internet – Free Wi-Fi"
              text3="Entertainment – Bluetooth radio"
              text4="Food & Drink – Refrigerated minibar, room service"
              text5="Bathroom – Private bathroom, shower, hair dryer"
              text6="Practical – Phone, laptop-compatible safe, double closet space,"
              text7="iron & ironing board, USB outlets"
              text8="Comfort – Air conditioning, ceiling fan and daily housekeeping"
              desc1="460-sq-feet room (42.7-sq-meter) including two balconies,"
              desc2="ocean views"
              desc3="1 King Size Bed"
              desc4="Room sleeps up to 3 guests"
            />
            <GuestRooms
              title="BALCONY STUDIO"
              image="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714504/skylark/balcony-studio-600x427_jq58ij.jpg"
              link="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.59131691.700408746.1679685400-401113273.1672706732"
              text1="Space for additional Twin Bed"
              text2="Internet – Free Wi-Fi"
              text3="Entertainment – Bluetooth radio"
              text4="Food & Drink – Refrigerated minibar, room service"
              text5="Bathroom – Private bathroom, shower, hair dryer"
              text6="Practical – Phone, laptop-compatible safe, double closet space, iron & ironing board"
              text7="iron & ironing board"
              text8="Comfort – Air conditioning, ceiling fan and daily housekeeping"
              desc1="400-sq-feet room (37.2-sq-meter) with balcony, garden views"
              desc2="1 King Size Bed"
              desc3="Room sleeps up to 3 guests"
              desc4=""
            />
            <GuestRooms
              title="PATIO STUDIO"
              image="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714512/skylark/patio-studio-600x427_r9um6t.jpg"
              link="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.59131691.700408746.1679685400-401113273.1672706732"
              text1="Space for additional Twin Bed"
              text2="Internet – Free Wi-Fi"
              text3="Entertainment – Bluetooth radio"
              text4="Food & Drink – Refrigerated minibar, room service"
              text5="Bathroom – Private bathroom, shower, hair dryer"
              text6="Practical – Phone, laptop-compatible safe, double closet space,"
              text7="iron & ironing board"
              text8="Comfort – Air conditioning, ceiling fan and daily housekeeping"
              desc1="400-sq-feet room (37.2-sq-meter) with patio, garden views"
              desc2="1 King Size Bed"
              desc3="Room sleeps up to 3 guests"
              desc4=""
            />
            <GuestRooms
              title="STANDARD STUDIO"
              image="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714502/skylark/44279157750_d727c7e7b1_z-600x428.jpg_oetpd3.webp"
              link="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.59131691.700408746.1679685400-401113273.1672706732"
              text1="Internet – Free Wi-Fi"
              text2="Entertainment – Bluetooth radio"
              text3="Food & Drink – Refrigerated minibar, room service"
              text4="Bathroom – Private bathroom, shower, hair dryer"
              text5="Practical – Phone, laptop-compatible safe, double closet space,"
              text6="iron & ironing board, bedside USB outlets"
              text7="Comfort – Air conditioning, ceiling fan, daily housekeeping,"
              text8="Dedicated outdoor 2-top table"
              desc1="150-sq-ft room (12-sq-meter) located in a modern hotel style"
              desc2="Rooms are on the second floor"
              desc3="King Size Bed"
              desc4="Room sleeps up to 2 guests"
            />
            <GuestRooms
              title="TWO BEDROOM STUDIO"
              image="https://res.cloudinary.com/dfwvu4gct/image/upload/v1645714502/skylark/44279157750_d727c7e7b1_z-600x428.jpg_oetpd3.webp"
              link="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.59131691.700408746.1679685400-401113273.1672706732"
              text1="Two Bedroom Studio is located in a modern hotel style block of rooms upstairs on the second floor
              Dedicated outdoor 2-top table overlooking the garden"
              text2="Internet – Free Wi-Fi"
              text3="Entertainment – Bluetooth radio"
              text4="Food & Drink – Refrigerated minibar, room service"
              text5="Bathroom – Private single bathroom with hallway access from both rooms, shower, hair dryer, makeup mirror"
              text6="Practical – Phone, laptop-compatible safe, double closet space in master bedroom, double closet in hallway for 2nd bedroom, iron & ironing board"
              text7="Comfort – Separate air conditioning & ceiling fan in both rooms, and daily housekeeping"
              // text8="Comfort – Air conditioning, ceiling fan and daily housekeeping"
              desc1="500-sq-ft two bedroom (46.5-sq-meter) located in a modern hotel style block located upstairs on the second floor."
              desc2="1st Bedroom King Size Bed Room sleeps up to 3 guests, space for addition twin bed"
              desc3="2nd Bedroom, two Twin Beds, can be pushed together to make a king, in this configuration space for an additional twin bed to sleep up to 3 guests"
              desc4="Maximum occupancy 6 guests"
            /> */}
        </section>
        <CustomDialog open={openRoomForm} handleClose={handleCloseDialog}>
          <AddOrEditRoom create={true} />
        </CustomDialog>
      </PageContainer>
    </Layout>
  )
}

export default StayPage
