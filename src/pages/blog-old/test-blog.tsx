import Layout from '@/components/layout/Layout'
import BlogBanner from '@/components/blog/features/BlogBanner'
import BlogCarousel from '@/components/blog/features/BlogCarousel'
import { useBlogData } from '@/hooks/useBlogData'
import HorizontalScrollContainer from '@/components/blog/features/HorizontalScrollContainer'
import useBlogHeader from '@/hooks/useBlogHeader'
import BlogFooter from '@/components/layout/BlogFooter'
import useWindowSize from '@/hooks/useWindowSize'
import BlogPostCard from '@/components/blog/features/BlogPostCard'
import BlogsContainer from '@/components/blog/features/BlogsContainer'

const TestBlog = () => {
  return (
    <Layout title="Blog Posts" footerComponent={<BlogFooter />}>
      <div className="container mx-auto w-full max-w-5xl space-y-7 px-4 py-10">
        <BlogBanner />
        <BlogsContainer />
      </div>
    </Layout>
  )
}

export default TestBlog
