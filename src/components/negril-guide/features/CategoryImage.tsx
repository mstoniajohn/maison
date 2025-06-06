import React from 'react'

type Props = {
  src: string
  alt: string
}

const CategoryImage = ({ src, alt }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      className="mx-auto h-full w-full max-w-[300px] object-cover lg:max-h-[500px] lg:max-w-[350px]"
    />
  )
}

export default CategoryImage
