import React from 'react'
import Typography from '@/components/typography/Typography'
import { BlogPost } from '@/types/blogPost'
import Image from 'next/image'

interface BlogPostDetailProps {
  post: BlogPost
  hideExcerpt?: boolean
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({
  post,
  hideExcerpt = false,
}) => {
  return (
    <article className="mx-auto space-y-6 overflow-hidden">
      <div className="mb-2 border-b-[1px] border-t-[1px] border-gray-200 py-1">
        <Typography
          variant="h2"
          className="my-1 line-clamp-2 text-center font-sans text-[22px] font-normal text-blue md:text-[25px] lg:text-[28px]"
        >
          <span dangerouslySetInnerHTML={{ __html: post.title }} />
        </Typography>
      </div>
      {!hideExcerpt && post.excerpt ? (
        <div
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
          className="blogPost"
        />
      ) : null}
      {post?.image ? (
        <div className="relative h-[300px] w-full  md:h-[600px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="rounded-lg object-cover  object-center"
            priority
          />
        </div>
      ) : null}
      <div className="mx-auto space-y-4">
        <hr />

        <div
          className="blogPost"
          dangerouslySetInnerHTML={{ __html: post.body as string }}
        />
      </div>
    </article>
  )
}

export default BlogPostDetail
