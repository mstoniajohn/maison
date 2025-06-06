import BlogBanner from '@/components/blog/features/BlogBanner'
import BlogsContainer from '@/components/blog/features/BlogsContainer'
import BlogFooter from '@/components/layout/BlogFooter'
import Layout from '@/components/layout/Layout'
import React from 'react'

function BlogListPage() {
  return (
    <Layout title="Blog Posts" footerComponent={<BlogFooter />}>
      <div className="container mx-auto w-full max-w-5xl space-y-7 px-4 py-10">
        <BlogBanner />
        <BlogsContainer />
      </div>
    </Layout>
  )
}

export default BlogListPage
