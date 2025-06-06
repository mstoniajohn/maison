import React from 'react'
import Typography from '@/components/typography/Typography'
import useBlogHeader from '@/hooks/useBlogHeader'
import VideoItem from '@/components/videos/VideoItem'
import { isEmpty } from 'lodash'
import BlogHeaderLoader from './BlogHeaderLoader'
const BANNER_IMAGE =
  'https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif'
const BLOG_DESCRIPTION =
  'At Skylark, summer is a state of mind. Our blog brings you the best of Negril, one summer at a time.'

const BlogBanner = () => {
  const { data, isLoading: isBlogHeaderLoading, isPending } = useBlogHeader()
  const blogHeader = !isBlogHeaderLoading ? data?.[0] : {}

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {isPending ? (
        <BlogHeaderLoader />
      ) : (
        <>
          <div className="flex justify-center">
            {!isEmpty(blogHeader?.video) ? (
              <div className="relative w-full">
                <iframe
                  loading="lazy"
                  className="aspect-video h-full w-full"
                  src={blogHeader?.video as string}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                src={blogHeader?.header_image}
                alt="Blog Banner"
                className="w-full object-cover"
              />
            )}
          </div>
          <div className="relative">
            <hr className="border-t-2 border-gray-200" />
            <div className="py-4 text-center">
              <Typography variant="paragraph2" className="text-gray-600">
                <span
                  dangerouslySetInnerHTML={{
                    __html: blogHeader?.description || BLOG_DESCRIPTION,
                  }}
                />
              </Typography>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default BlogBanner
