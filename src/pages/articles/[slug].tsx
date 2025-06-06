import * as React from 'react'

import { useRouter } from 'next/router'
import CustomSpinner from '@/components/layout/CustomSpinner'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import PageContainer from '@/components/PageContainer'
import Layout from '@/components/layout/Layout'
import useBlog from '@/hooks/useStrapiBlog'
import BodyContentRenderer from '@/components/blog/BodyContentRenderer'
import Image from 'next/image'

const Post = () => {
  const router = useRouter()
  const slug = router.query.slug

  const { data: blog, isPending: isLoading } = useBlog({ slug: slug as string })
  const currentBlog = blog?.data?.[0] || {}
  const hasSliderImages = currentBlog?.slider?.length > 0

  console.log(blog)

  return (
    <Layout title={`${currentBlog?.title}`} showGuideButton>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <>
          <BootstrapCarousel
            images={[
              {
                name: currentBlog?.title,
                src: `${currentBlog?.header_image?.url}`,
              },
            ]}
          />
          <div className="container mx-auto max-w-screen-lg py-10 sm:py-12">
            <BodyContentRenderer content={currentBlog?.body} />
            {hasSliderImages && (
              <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {currentBlog?.slider?.map((image: any) => (
                  <Image
                    key={image?.id}
                    src={`${image?.url}`}
                    alt={blog?.title}
                    width={image?.width}
                    height={image?.height}
                    className="w-full max-w-2xl object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </Layout>
  )
}

export default Post
