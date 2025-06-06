import * as React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { getDjangoBlogs, getSingleBlog } from '@/features/blog/blogSlice'
import { useRouter } from 'next/router'
import CustomSpinner from '@/components/layout/CustomSpinner'
import BootstrapCarousel from '@/components/features/BootstrapCarousel'
import PageContainer from '@/components/PageContainer'
import Layout from '@/components/layout/Layout'
import { Stack } from '@mui/system'

const Post = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const slug = router.query.slug
  React.useEffect(() => {
    dispatch(getDjangoBlogs())
  }, [])

  React.useEffect(() => {
    if (slug) {
      dispatch(getSingleBlog({ slug: String(slug) }))
    }
  }, [slug])

  const { singleBlog, djangoBlogs, isLoading } = useAppSelector(
    (state) => state.blogs
  )

  const blog = djangoBlogs?.find((blog) => blog.slug === slug)
  console.log(blog, singleBlog)

  return (
    <Layout title={`${blog?.title}`} showGuideButton>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <>
          <BootstrapCarousel
            images={[
              {
                name: blog?.title,
                src: blog?.header_image,
                mobileSrc: blog?.header_image,
              },
            ]}
          />
          <PageContainer mb="mb-1" mt="mt-4">
            <Stack>
              <article
                className="prose lg:prose-xl prose-headings:text-blue prose-a:text-blue prose-headings:underline overflow-hidden sm:px-20"
                dangerouslySetInnerHTML={{
                  __html: blog?.body,
                }}
              />
            </Stack>
          </PageContainer>
        </>
      )}
    </Layout>
  )
}

export default Post
