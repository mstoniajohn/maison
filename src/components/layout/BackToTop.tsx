import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'
import Box from '@mui/material/Box'
import React from 'react'

type Props = {
  children: JSX.Element
}

const BackToTop: React.FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger()

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: '120px',
          right: 10,
          zIndex: 99,
          marginBottom: 0,
          paddingBottom: 0,
        }}
        className="mb-0 pb-0"
      >
        {children}
      </Box>
    </Zoom>
  )
}

export default BackToTop
