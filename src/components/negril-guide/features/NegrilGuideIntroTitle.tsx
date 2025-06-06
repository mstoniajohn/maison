import Typography from '@/components/typography/Typography'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  getNegrilGuidePageIntro,
  NegrilGuidePageIntro,
} from '@/api/negrilGuide'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

const defaultTitle1 = "The 2025 Skylarker's"
const defaultTitle2 = 'Guide to Negril'
const defaultSubtitle = `  Brought to you by the original dilly-dalliers at Skylark Beach Resort, Negril`

function NegrilGuideIntroTitle({
  selectedCategory,
  onClickBack,
}: {
  selectedCategory?: string | null
  onClickBack?: () => void
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['negrilGuidePageIntro'],
    queryFn: getNegrilGuidePageIntro,
  })

  const guideIntro = data ? (Array.isArray(data) ? data[0] : data) : null
  const [title1, title2] = guideIntro?.title
    ? [guideIntro?.title.split('Guide to Negril')[0], 'Guide to Negril']
    : [defaultTitle1, defaultTitle2]

  if (isLoading) {
    return (
      <div>
        <Skeleton className="mb-2 h-12 w-48" />
        <Skeleton className="h-12 w-64" />
      </div>
    )
  }

  if (error) {
    console.error('Error loading Negril Guide page sections:', error)
    return (
      <div className="space-y-4">
        <div>
          <Typography
            variant="h1"
            className="text-3xl text-4xl font-normal lg:text-5xl"
          >
            {defaultTitle1}
          </Typography>
          <Typography
            variant="h1"
            className="text-3xl text-4xl font-normal lg:text-5xl"
          >
            {defaultTitle2}
          </Typography>
        </div>
        <hr />
        {selectedCategory ? (
          <Typography
            variant="h2"
            className="mt-4 font-sans text-[1.5rem] font-[500] text-blue lg:text-[1.5rem]"
          >
            {selectedCategory}
          </Typography>
        ) : (
          <p className="mt-4 text-sm">{defaultSubtitle}</p>
        )}
      </div>
    )
  }

  return (
    <div className="cursor-pointer space-y-4" onClick={onClickBack}>
      <div className="md:hidden">
        <Typography
          variant="h1"
          className="text-[2rem]  font-normal lg:text-[2.5rem]"
        >
          {title1} <br />
          {title2}
        </Typography>
      </div>
      <div className="hidden md:block">
        <Typography variant="h1" className="font-normal md:text-[1.2rem]">
          {guideIntro?.title || defaultTitle1}{' '}
        </Typography>
      </div>
      <hr />
      <div className="mt-4">
        {selectedCategory ? (
          <Typography
            variant="h2"
            className="font-sans text-[1.5rem] font-[500] text-blue lg:text-[1.5rem]"
          >
            {selectedCategory}
          </Typography>
        ) : (
          <Typography variant="paragraph2">
            {guideIntro?.subtitle || defaultSubtitle}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default NegrilGuideIntroTitle
