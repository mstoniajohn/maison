import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/layout/Layout'
import SubtitleText from '../../components/text/SubtitleText'

import { Typography } from '@mui/material'
// import PageImages from '@/features/PageImages'

import CustomImage, {
  CustomImageCoPilot,
} from '@/components/features/toolbox/CustomImage'

export async function getStaticProps() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
             { 
               blogCollection {
                items {
                  title
                  slug
                  excerpt
                  thumbnail{
                    url
                  }
                }
              }
            }
           
          `,
      }),
    }
  )

  const { data } = await result.json()
  const posts = data?.blogCollection?.items

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  }
}

const Blog = ({ posts }: { posts: any }) => {
  return (
    <Layout title="Posts">
      <div className="relative mx-auto w-full  space-x-4 md:space-x-5 md:p-4">
        <div className=" mx-auto w-full max-w-7xl p-3">
          <div className="w-full flex-wrap md:flex">
            {posts &&
              posts?.map(
                (
                  {
                    title,
                    slug,
                    thumbnail: { url },
                    excerpt,
                  }: {
                    title: string
                    slug: any
                    thumbnail: any
                    excerpt: any
                  },
                  i: number
                ) =>
                  i === 0 ? (
                    <Link href={`/blog-old/${slug}`} key={i}>
                      <div className="border-white group relative w-full cursor-pointer overflow-hidden rounded-lg border-4">
                        {/* <img
                            className="hover max-h-[650px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            alt=""
                            src={`${url}`}
                          /> */}
                        <CustomImageCoPilot src={`${url}`} />
                        <div className="text-white absolute bottom-0 flex w-full  flex-col items-start justify-center overflow-hidden bg-[#51BAB3] p-2 opacity-80 hover:bg-[#E088A8] md:h-24">
                          <Typography
                            variant="h6"
                            color="white"
                            sx={{ fontWeight: 'bold' }}
                          >
                            {title}
                          </Typography>

                          <Typography
                            color="white"
                            variant="body1"
                            display={{ xs: 'none', md: 'block' }}
                          >
                            {excerpt} {'>>'}
                          </Typography>
                        </div>
                      </div>
                    </Link>
                  ) : i === 1 || i === 2 ? (
                    <Link href={`/blog-old/${slug}`} key={i}>
                      <div className="border-white group relative w-full cursor-pointer overflow-hidden rounded-lg border-4 md:w-6/12">
                        {/* <img
                            className="hover max-h-[400px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            src={`${url}`}
                            alt=""
                          /> */}
                        <CustomImageCoPilot src={`${url}`} />

                        <div className="text-white absolute bottom-0 flex w-full flex-col items-start justify-center  overflow-hidden bg-[#51BAB3] p-2 opacity-80 hover:bg-[#E088A8] md:h-20">
                          <Typography
                            variant="h6"
                            color="white"
                            sx={{ fontWeight: 'bold' }}
                          >
                            {title}
                          </Typography>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link href={`/blog-old/${slug}`} key={i}>
                      <div className="border-white group relative w-full  cursor-pointer overflow-hidden rounded-lg border-4 md:w-4/12">
                        {/* <img
                            className="hover h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            src={`${url}`}
                            alt=""
                          /> */}
                        <CustomImageCoPilot src={`${url}`} />

                        <div className="text-white absolute bottom-0 flex w-full flex-col items-start justify-center  overflow-hidden bg-[#51BAB3] p-2 opacity-80 hover:bg-[#E088A8] md:h-28">
                          <Typography
                            variant="body2"
                            color="white"
                            sx={{ fontWeight: 'bold', fontSize: '1.15rem' }}
                          >
                            {title}
                          </Typography>
                        </div>
                      </div>
                    </Link>
                  )
              )}
          </div>
        </div>
        {/* <PageImages /> */}
      </div>
    </Layout>
  )
}

export default Blog
