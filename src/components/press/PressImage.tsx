import Image from 'next/image'
import React from 'react'

const PressImage = ({ url }: { url: string }) => {
  return (
    <Image
      src={url}
      width={300}
      height={300}
      alt="Skylark"
      className="mx-auto h-80 w-full object-cover"
    />
  )
}

export default PressImage
