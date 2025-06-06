import React from 'react'
import BlogBanner from '@/components/blog/features/BlogBanner'
import BlogInfiniteScroll from '@/components/blog/features/BlogInfiniteScroll'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import { ArrowBack } from '@mui/icons-material'

const BlogPostPage = () => {

  return (
    <Layout title="Blog list">
      <div className="min-h-screen bg-gray-50 px-4">
        <div className="mx-auto max-w-5xl py-8 ">
          <BlogBanner />
          {/* TODO: Update to /blog when we launch */}
          <Link href="/blog/test-blog">
            <p className="flex cursor-pointer items-center justify-center gap-2">
              <ArrowBack />
              Back to post list
            </p>
          </Link>
          {/* display single blog post */}
          <div className="mt-8">
            <BlogInfiniteScroll />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostPage
