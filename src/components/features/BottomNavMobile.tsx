import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import { CalendarToday, Email, Phone } from '@mui/icons-material'
import { useRouter } from 'next/router'

export default function BottomNavMobile() {
  const [value, setValue] = React.useState(0)
  const router = useRouter()
  const choices = ['']
  const handleEvent = (e: any, val: number) => {
    e.preventDefault()

    const href =
      val === 0
        ? 'tel:+1-212-807-0868'
        : val === 1
          ? 'mailto:info@skylarknegril.com'
          : 'https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732'
    return router.push(href)
  }
  return (
    <Box className="text-white fixed bottom-0 z-40 block w-full bg-[#E088A8] lg:hidden">
      <BottomNavigation
        sx={{
          color: 'white',
          bgcolor: 'secondary.main',
          '&	.MuiBottomNavigationAction-root': {
            color: 'white',
          },
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          event.preventDefault()
          setValue(newValue)
          handleEvent(event, newValue)
        }}
      >
        <BottomNavigationAction
          sx={{ color: 'white !important' }}
          label="Call"
          icon={<Phone sx={{ color: 'white' }} />}
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Email"
          icon={<Email sx={{ color: 'white' }} />}
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Book"
          icon={<CalendarToday sx={{ color: 'white' }} />}
        />
      </BottomNavigation>
    </Box>
  )
}
