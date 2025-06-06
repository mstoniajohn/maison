import React from 'react'
import AdminLayout from '..'
import { useRouter } from 'next/router'
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material'

type Props = {}

const index = (props: Props) => {
  const router = useRouter()
  const dataModels = [
    { name: 'Front Desk', route: '/admin/frontdesk' },
    { name: 'Restaurant Menus', route: '/admin/dashboard/menus' },
    { name: 'Rooms', route: '/admin/dashboard/rooms' },
    { name: 'Press Items', route: '/admin/dashboard/press' },

    // { name: 'Roomservice Items', route: '/admin/dashboard/roomservice' },
    // { name: 'Negril Guide Items', route: '/negril-guide' },
    // { name: 'Profile', route: '/admin/dashboard/profile' },

    // ... add other data models
  ]

  const handleNavigate = (route: string) => {
    router.push(route)
  }

  return (
    <AdminLayout>
      <Stack p={2} justifyContent={'center'} alignItems={'center'}>
        <Typography variant="h2" component={'h1'} color={'primary'}>
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          {dataModels.map((model) => (
            <Grid item xs={12} sm={6} md={4} key={model.name}>
              <Card>
                <CardActionArea onClick={() => handleNavigate(model.route)}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color={'primary'}
                    >
                      {model.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Manage {model.name.toLowerCase()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </AdminLayout>
  )
}

export default index
