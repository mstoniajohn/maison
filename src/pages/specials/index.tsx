import ButtonCustom from 'src/components/features/ButtonCustom'
import Layout from 'src/components/layout/Layout'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import SummerSpecials from '@/components/popups/SummerSpecials'
import SpecialItem from '@/components/specials/SpecialItem'

type Props = {}

const TITLE = 'SUMMER SPECIALS'

export default function Specials() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Layout title="Specials">
      <div>
        <div className="relative h-full">
          <img
            className="h-[287px] w-full object-cover object-right md:h-[710px] md:object-left-bottom"
            src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1746623180/skylark/Summer_Specials_m92lpk.jpg"
            alt=""
          />

          <div className="text-white absolute bottom-2 left-1/2 right-1/2 z-30 w-full -translate-x-1/2 md:bottom-10">
            <Typography
              align="center"
              component={'h1'}
              variant="h1"
              fontWeight={700}
              fontSize={40}
              className="text-shadow-lg text-3xl text-blue md:text-5xl"
            >
              {TITLE}
            </Typography>
          </div>
        </div>
        <Stack py={3} px={2} spacing={2}>
          <div className="container mx-auto w-full py-2">
            {' '}
            <div className=" grid  grid-cols-1 justify-center gap-4 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <SpecialItem
                title="SKYROCK"
                additionalInfo={
                  <>
                    <p className="text-base font-semibold text-gray-800">
                      Get 30% off a 6-night stay 3 nights at Rockhouse, 3 nights
                      at Skylark.
                    </p>
                    <p>
                      To begin booking, please{' '}
                      <a
                        href="https://www.rockhouse.com/forms/skyrock"
                        className="font-bold text-blue underline"
                        target="_blank"
                      >
                        fill out this form
                      </a>
                    </p>
                  </>
                }
              />
              <SpecialItem
                title="4-NIGHT WEEKEND"
                additionalInfo={
                  <>
                    <p className="text-base font-semibold text-gray-800">
                      Book a 4-night stay and one of the nights is free one For
                      longer stays, you'll receive a 25% discount
                    </p>
                    <p className="text-base text-gray-800">
                      {' '}
                      Discounts automatically applied to online bookings
                    </p>
                  </>
                }
              />

              <SpecialItem
                title="LAST MINUTE LOCAL"
                additionalInfo={
                  <>
                    <p className="text-base font-semibold text-gray-800">
                      Jamaican residents book within 7 days of arrival and get
                      50% off the room rate. <br />
                    </p>
                    <p>
                      For online booking, use promo code:{' '}
                      <strong>LASTMINUTE</strong>
                    </p>
                  </>
                }
              />
            </div>
            <div className="mt-2 flex flex-col items-center space-y-8 text-center">
              <ButtonCustom
                size="large"
                href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732&_gl=1*1k83bpl*_ga*MTQ5NzQ5ODA5My4xNzM4Nzc0OTM5*_ga_Z2Z78V7EFB*czE3NDY0NjM4MTkkbzQyJGcxJHQxNzQ2NDYzOTA1JGo0NyRsMCRoMTA5NDc4OTE5Ng..&__cf_chl_tk=4bx0nKdZqN.0sYobMcq.4X7zcoxJNbS3Nb3JxzxpP7c-1746463928-1.0.1.1-D8Pzv7fw68xo0PsUXnVWuM3FUxu9cymnow0k1mzVCSQ"
              >
                Book Now
              </ButtonCustom>
              <Typography
                align="center"
                color={'textSecondary'}
                className="text-sm md:text-base"
                fontWeight={600}
              >
                Promos valid April 15-Oct 31, 2025
              </Typography>
            </div>
          </div>
        </Stack>
      </div>
    </Layout>
  )
}
