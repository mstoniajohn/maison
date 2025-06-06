import React from 'react'
import Typography from '@/components/typography/Typography'
import { BlogPost } from '@/types/blogPost'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import CategoryImage from '@/components/negril-guide/features/CategoryImage'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useWindowSize from '@/hooks/useWindowSize'
import { BLOG_URL_PREFIX } from '@/utils/constants'

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    // TODO: Update to /blog when we launch
    <Link href={`${BLOG_URL_PREFIX}/${post.pkid}`}>
      <Card className=" mx-auto w-full max-w-full space-y-4 border-0 px-2 shadow-none sm:max-w-[350px]">
        <div className="mb-2 border-b-[1px] border-t-[1px] border-gray-200 py-1">
          <Typography
            variant="h2"
            className="my-1 line-clamp-2 text-center font-sans text-[22px] font-normal text-blue md:text-[25px] lg:text-[28px]"
          >
            <span dangerouslySetInnerHTML={{ __html: post.title }} />
          </Typography>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="h-[290px] w-full rounded-lg object-cover"
            />
          )}
        </div>

        <div
          className="blogPost"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      </Card>
    </Link>
  )
}

export default BlogPostCard


