import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { BlogPost } from '@/types/blogPost'
import BlogPostCard from './BlogPostCard'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1025 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
}

function BlogCarousel({ posts }: { posts: BlogPost[] }) {
  return (
    <Carousel
      arrows
      responsive={responsive}
      infinite
      draggable
      swipeable
      rewind
      itemClass="carousel-item-padding-19-px"
    >
      {posts.map((post) => (
        <BlogPostCard key={post.pkid} post={post} />
      ))}
    </Carousel>
  )
}

export default BlogCarousel
