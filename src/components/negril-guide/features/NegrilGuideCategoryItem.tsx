import { NegrilGuideCategory } from '@/types/negrilGuide'
import React from 'react'

import Typography from '@/components/typography/Typography'

type Props = {
  category: NegrilGuideCategory
  onCategoryClick: (categoryName: string) => void
}

const NegrilGuideCategoryItem = ({ category, onCategoryClick }: Props) => {
  return (
    <div
      key={category.pkid}
      className="  mx-auto mb-4  w-full cursor-pointer sm:pl-2"
      onClick={() => onCategoryClick(category.name)}
    >
      <img
        src={category.image}
        alt={category.name}
        className="mx-auto h-[350px] w-full  object-cover object-center sm:h-[400px] sm:max-w-[500px] lg:h-[450px]"
      />
      <Typography
        variant="h2"
        className="mt-2 font-sans text-[1.4rem] font-[500] text-blue lg:text-[1.4rem]"
      >
        {category.name}
      </Typography>
    </div>
  )
}

export default NegrilGuideCategoryItem
