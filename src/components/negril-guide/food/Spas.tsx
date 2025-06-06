import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

import SectionHeader from '../SectionHeader'
import { useAppSelector } from '@/app/store'
import NegrilCardItem from '../NegrilCardItem'
import { CATEGORIES } from '@/utils/constants'

export default function Spas() {
  const { negrilGuides, guideSections } = useAppSelector(
    (state) => state.negril
  )
  const section = guideSections?.find((s: any) => s.pkid === 7)
  const guides = negrilGuides?.filter((c) => c.category === CATEGORIES.spas)

  return (
    <Box id="spas" sx={{ scrollMarginTop: '100px' }}>
      <SectionHeader
        header={section}
        id={section?.pkid}
        title={section?.title}
        sectionImage={
          section?.image ||
          'https://firebasestorage.googleapis.com/v0/b/skylark-f6267.appspot.com/o/negril-guide%2F960x0.jpg?alt=media&token=49085507-14a3-4e3e-911f-9bfe7d7b7f12'
        }
        text={section?.text}
      />

      {!negrilGuides?.length ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {guides?.map((item: any) => (
            <NegrilCardItem
              body={item?.body}
              title={item?.title}
              key={item?.pkid}
              image={item?.image}
              category={item?.category}
              sub_category={item?.sub_category}
              slug={item?.slug}
              direction_url={item?.direction_url}
              website_url={item?.website_url}
              likes={item?.likes}
              id={item?.pkid}
              order={item?.order}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}
