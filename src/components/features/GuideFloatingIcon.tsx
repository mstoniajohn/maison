import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { useRouter } from 'next/router'
import { Map } from '@mui/icons-material'
import NegrilPassword from '@/utils/helpers'

export default function GuideFloatingIcon() {
  const router = useRouter()
  const [password, setPassword] = React.useState(false)

  React.useEffect(() => {
    if (NegrilPassword.getPassword()) {
      setPassword(true)
    }
  }, [])

  return (
    <Box sx={{ '& > :not(style)': { mx: 1, mb: 1 }, zIndex: 10 }}>
      {/* {password ? ( */}
      <Fab
        variant="extended"
        onClick={() => router.push('/negril-guide')}
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 55,
          right: 0,
          color: 'whitesmoke',
          fontWeight: 'bold',
        }}
      >
        <Map sx={{ mr: 1 }} />
        Negril Vacation Guide
      </Fab>
    </Box>
  )
}
