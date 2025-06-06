import { Typography } from '@mui/material'
import React from 'react'


interface Props {
  title: string
  children: React.ReactNode
}

function PopUpDetailItem({title, children}: Props) {
  return (
    <div className="mx-auto w-full max-w-lg text-center">
      <Typography variant="h3" color="primary" paddingBottom={0}>
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default PopUpDetailItem