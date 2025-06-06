import { Typography } from '@mui/material'
import React from 'react'

function DisplyaCalloutItem({title, img}) {
  return (
    <div className="relative mb-3 cursor-pointer group">
      <img
        className="hover h-auto w-full flex-shrink-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        src={img}
        alt=""
      />

      <div className="absolute bottom-0 w-full bg-[#E088A8] p-2 text-center text-white opacity-80">
        <Typography variant="h5" sx={{pb:0, fontWeight:'bold'}}>{title}</Typography>
      </div>
    </div>
  )
}

export default DisplyaCalloutItem