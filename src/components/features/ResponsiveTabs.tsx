import * as React from 'react'
import Box from '@mui/material/Box'
import { Button, Link, Typography } from '@mui/material'
// import Link as NextLink from 'next/link';
import { eatMenus, joformLinks } from './data'

import { useRouter } from 'next/router'
import ButtonCustom from './ButtonCustom'

const dinner = [
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1649602828/skylark/dinner/01_MissLilysNegril_Dinner_121321.jpg_ctthtk.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1649602828/skylark/dinner/02_MissLilysNegril_Dinner_121321_kvt81d.jpg',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1649602828/skylark/dinner/MissLilysNegril_Vegetarian_122121.jpg_bp1ri1.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1649602828/skylark/dinner/01_MissLilysNegril_WineList_121721.jpg_ivkeua.webp',
  'https://res.cloudinary.com/dfwvu4gct/image/upload/v1649602828/skylark/dinner/01_MissLilysNegril_Dessert_121621.jpg_xoycwy.webp',
]

export default function Responsive() {
  // const [value, setValue] = React.useState(0)

  const [val, setVal] = React.useState(0)
  const router = useRouter()
  const { id, name, images, link } = eatMenus[val]

  // const handleChange = (event: any, newValue: any) => {
  //   setValue(newValue)
  // }

  return (
    <Box className="w-full">
      {/* <Box paddingBottom={3} className="block lg:hidden">
        <ButtonCustom
          // href="http://forms.skylarknegril.com/skylarknegril/dinner"
          href={joformLinks.dinner.direct}
        >
          Make A Reservation
        </ButtonCustom>
      </Box> */}
      <Box className="hide-scroll-bar flex items-center justify-center space-x-6 overflow-x-scroll bg-[#51BAB3] py-2 px-2 pl-3 md:space-x-8">
        {eatMenus.map((menu, index) => (
          <Box className="ml-52 md:ml-0" key={menu.id}>
            <Typography
              variant="h5"
              onClick={() => setVal(index)}
              className={`${
                val === index
                  ? 'borber-b-2 border-white text-white underline'
                  : 'text-white'
              } flex-shrink-0 cursor-pointer`}
            >
              {menu.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          margin: '15px auto 0 auto',
        }}
      >
        <Typography variant="h3" color="primary">
          {name}
        </Typography>
        <Button
          variant="contained"
          disableElevation={true}
          size="large"
          color="secondary"
          sx={{
            borderRadius: '25px',
            fontWeight: 'bold',
            marginBottom: 2,
            border: '2px solid transparent',
            color: 'white',
            '&:hover': {
              color: 'secondary.main',
              backgroundColor: 'white',
              border: `2px solid #E78FB3`,
            },
          }}
          onClick={() => router.push(`/eat/${link}`)}
        >
          {name} Menu Page
        </Button>
        {/* <div className="grid gap-3">
          {val !== 5 &&
            images?.map((item) => (
              <img key={item} src={item} className="mx-auto w-full max-w-xl" />
            ))}
        </div> */}
      </Box>
    </Box>
  )
}
