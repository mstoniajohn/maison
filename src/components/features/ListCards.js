import { Box, Typography } from '@mui/material'
import React from 'react'
import SubtitleText from '../text/SubtitleText'

const ListCards = ({ lists, title, list }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {lists.map((list) => (
        <div key={list.title}>
          <SubtitleText
            pos="text-left"
            size="xl"
            bold={true}
            text={list.title && list.title}
          />
          <Typography variant='h4'>{list.title && list.title}</Typography>

          <hr className="mb-3 h-0 bg-[#E088A8] p-1 font-bold text-[#E088A8]" />
         <Box className='pl-4'> <ul className="ml-4">
            {list.items &&
              list.items.map((item) => <li className="list-disc">{item}</li>)}
          </ul></Box>
        </div>
      ))}
    </div>
  )
}

export default ListCards
