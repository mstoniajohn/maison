import { BlogPost } from '@/types/blogPost'
import Image from 'next/image'
import React from 'react'

interface BlogItemProps {
  blogPost: BlogPost
}

function BlogFeatureItem({ blogPost }: BlogItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <hr />
        <h2 className="text-2xl font-bold">{blogPost.title}</h2>
        <hr />
      </div>
      <div>
        <p className="text-sm text-gray-500">{blogPost.excerpt}</p>
        {/* header image  */}
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          width={300}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default BlogFeatureItem
