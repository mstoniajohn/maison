import Typography from '@/components/typography/Typography'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getNegrilGuidePageSections } from '@/api/negrilGuide'
import { Skeleton } from '@/components/ui/skeleton'
import CategoryImage from './CategoryImage'
import { CategoryDropdownMenu } from './CategoryDropdownMenu'

const NegirlGuideSectionIntro = ({
  categories,
  selectedCategory,
  handleCategoryClick,
}: {
  categories: any[]
  selectedCategory: string | null
  handleCategoryClick: (category: string) => void
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['negrilGuidePageSection'],
    queryFn: getNegrilGuidePageSections,
  })

  if (isLoading) {
    return (
      <div className="max-w-md space-y-4">
        <Skeleton className="h-[500px] w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }

  if (error) {
    console.error('Error loading Negril Guide page intro:', error)
    return null
  }
  const { title, subtitle, image } = data?.[0] || {}

  return (
    <div className="w-full max-w-screen-xl justify-start space-y-4 md:flex md:justify-start md:gap-3">
      {/* <CategoryImage src={image || ''} alt="Negril Guide" /> */}
      <img
        src={image || ''}
        alt={title || 'Negril Guide'}
        className="mx-auto h-full w-full  object-cover sm:mt-4 lg:max-h-[500px] lg:max-w-[350px]"
      />
      <div>
        <Typography variant="paragraph2" className="mt-0">
          {title || 'Welcome to Negril'}
        </Typography>
        <Typography variant="paragraph2" className="mt-2">
          <span dangerouslySetInnerHTML={{ __html: subtitle || '' }} />
        </Typography>
        <hr className="my-4" />
        <div className="space-y-2 text-center md:hidden">
          <Typography variant="paragraph2">
            Here's everything you need to know about Negril (on a need to know
            basis):
          </Typography>
          <CategoryDropdownMenu
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
        </div>
      </div>
    </div>
  )
}

export default NegirlGuideSectionIntro
