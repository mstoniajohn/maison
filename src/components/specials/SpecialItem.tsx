import { Typography } from '@mui/material'
import React from 'react'

type Props = {
  title: string
  description?: string
  promoCode?: string
  validFrom?: string
  additionalInfo?: React.ReactNode
}

function SpecialItem({
  title,
  description,
  promoCode,
  validFrom,
  additionalInfo,
}: Props) {
  return (
    <div className="text-center">
      <Typography
        align="center"
        variant="h3"
        color={'primary'}
        textTransform={'uppercase'}
        component="h2"
        // className="text-2xl"
      >
        {title}
      </Typography>
      {description ? <p className=" text-[#777]">{description}</p> : null}
      {validFrom ? (
        <p className="text-lg font-semibold text-[#777]">{validFrom}</p>
      ) : null}
      {promoCode ? (
        <Typography align="center" color={'textSecondary'} fontSize={14}>
          Code:
          <span className="font-semibold text-[#888]">{promoCode}</span>
        </Typography>
      ) : null}
      {additionalInfo ? additionalInfo : null}
    </div>
  )
}

export default SpecialItem
