import React from 'react'
import Layout from '@/components/layout/Layout'
import BackToBlogsButton from '@/components/blog/features/BackToBlogsButton'
import { useRouter } from 'next/router'
import { useBlogPost } from '@/hooks/useBlogPosts'
import BlogPostDetail from '@/components/blog/features/BlogPostDetail'
import BlogSkeleton from '@/components/blog/features/BlogSkeleton'
import BlogsContainer from '@/components/blog/features/BlogsContainer'
import { Typography } from '@mui/material'
import BlogFooter from '@/components/layout/BlogFooter'

const BlogPostPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: post, isPending, error } = useBlogPost(parseInt(id as string))
  if (error) {
    return (
      <Layout title="Blog list" footerComponent={<BlogFooter />}>
        <div className="container mx-auto w-full py-20">
          <div className="py-8 text-center text-red-500">
            Error loading blog posts
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Blog list" footerComponent={<BlogFooter />}>
      <div className="bg-white mx-auto min-h-screen w-full max-w-2xl  px-4">
        {isPending ? (
          <BlogSkeleton />
        ) : (
          <div className=" py-8">
            {/* TODO: Update url prop to /blog when we launch */}
            <BackToBlogsButton />
            <div className="mt-8">{post && <BlogPostDetail post={post} />}</div>
          </div>
        )}
        <hr className="my-8" />
      </div>
      <div className="mx-auto w-full max-w-4xl">
        <Typography
          variant="h2"
          className="text-center  font-sans font-normal text-blue lg:font-sans lg:font-normal"
        >
          Other Posts
        </Typography>
        <BlogsContainer currentPost={post} useCarousel />
      </div>
    </Layout>
  )
}

export default BlogPostPage
