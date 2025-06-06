import { Typography } from '@mui/material'
import React from 'react'
import DisplyaCalloutItem from './DisplyaCalloutItem'

function DisplayCallouts() {
  return (
    <div className="relative col-span-1 mx-auto mt-2 h-full w-full md:max-w-sm">
      <DisplyaCalloutItem
        title="Stay"
        img="https://res.cloudinary.com/dfwvu4gct/image/upload/v1651419195/skylark/Stay-263x185_vcwgao.jpg"
      />
      <DisplyaCalloutItem
        title=" Play"
        img="https://res.cloudinary.com/dfwvu4gct/image/upload/v1651419195/skylark/Stay-263x185_vcwgao.jpg"
      />
      <DisplyaCalloutItem
        title="Eat"
        img="https://res.cloudinary.com/dfwvu4gct/image/upload/v1651419195/skylark/Stay-263x185_vcwgao.jpg"
      />
      <DisplyaCalloutItem
        title="Spa"
        img="https://res.cloudinary.com/dfwvu4gct/image/upload/v1651419195/skylark/Stay-263x185_vcwgao.jpg"
      />
    </div>
  )
}

export default DisplayCallouts
