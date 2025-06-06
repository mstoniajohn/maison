import React from 'react'
import H3Text from '../text/H3Text'

type Props = {
  title: string
  subtitle?: string
  body: string
}

export default function PressBody({ title, subtitle, body }: Props) {
  return (
    <div className="mx-auto">
      <H3Text className="text-center">{title}</H3Text>
      {subtitle && <h6>{subtitle}</h6>}
      <p className="text-center font-sans text-pink">{body}</p>
    </div>
  )
}
