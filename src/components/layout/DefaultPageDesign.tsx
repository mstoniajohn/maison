import React from 'react'

import H1 from './fonts/H1'
import SkylarkDivider from '../features/SkylarkDivider'

type Props = {
  sideImages: string[]
  children: React.ReactNode
  title: string
}

const DefaultPageDesign = ({ sideImages, children, title }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 pb-4 pt-2 md:grid-cols-5">
      <div className="space-y-4 py-2 md:col-span-3 md:space-y-8 md:py-4">
        <H1>{title}</H1>
        <SkylarkDivider />
        <div className="space-y-4">{children}</div>
      </div>
      <div className="space-y-2 sm:space-y-4 md:col-span-2">
        {sideImages?.map((image, i: number) => {
          return <img key={i} src={image} className="mx-auto " />
        })}
      </div>
    </div>
  )
}

export default DefaultPageDesign
