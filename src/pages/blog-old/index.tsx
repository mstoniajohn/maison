import Link from 'next/link'
import React, { useEffect } from 'react'

import { Grid } from '@mui/material'
import PageContainer from '@/components/PageContainer'
import CustomSpinner from '@/components/layout/CustomSpinner'
import Layout from '@/components/layout/Layout'
import { getDjangoBlogs } from '@/features/blog/blogSlice'
import { useAppDispatch, useAppSelector } from '@/app/store'
import Image from 'next/image'
import { BlogPost } from '@/types/blog'
import { DateTime } from 'luxon'

const Blog = () => {
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = React.useState(false)
  const [blogs, setBlogs] = React.useState<BlogPost[]>([])
  // const { djangoBlogs: blogss, isLoading } = useAppSelector(
  //   (state) => state.blogs
  // )

  const fetchBlogs = async () => {
    setIsLoading(true)
    const response = await fetch('https://www.skylarking.com/api/blogs/')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const publishedBlogs = data.filter((blog: BlogPost) => !blog.draft)
    setBlogs(publishedBlogs)
    setIsLoading(false)
  }

  useEffect(() => {
    // dispatch(getDjangoBlogs())
    fetchBlogs()
  }, [])

  // Slices of your blogs array
  const firstBlog = blogs?.[0]
  const secondThird = blogs?.slice(1, 3)
  const rest = blogs?.slice(3)
  return (
    <Layout title="Posts" showGuideButton>
      <PageContainer>
        {isLoading && <CustomSpinner />}
        <div className="container mx-auto">
          {/* 1) First Blog - full width */}
          {firstBlog && (
            <Link href={`blog-old/${firstBlog?.slug}`}>
              <div className="border-white group relative mb-6 w-full cursor-pointer space-y-2 overflow-hidden rounded-lg border-4">
                <Image
                  className="h-[275px] w-full object-cover transition-transform duration-300 ease-in-out sm:h-[600px]"
                  alt={firstBlog?.title}
                  src={firstBlog?.thumbnail}
                  width={1200}
                  height={600}
                />
                <div className="mt-2 space-y-1">
                  <div
                    className="font-sans text-xl text-blue"
                    dangerouslySetInnerHTML={{
                      __html: firstBlog?.title,
                    }}
                  />

                  <div className="flex items-center space-x-4">
                    <p className="text-gray-500">
                      {DateTime.fromISO(firstBlog?.created_at).toLocaleString(
                        DateTime.DATE_MED
                      )}
                    </p>
                    <span>.</span>
                    <p className="text-gray-500">
                      {firstBlog.read_time} min read
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}
          {!!secondThird.length && (
            <div className="mb-6 flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              {secondThird.map((blog) => (
                <Link
                  key={blog?.id}
                  href={`blog-old/${blog?.slug}`}
                  className="md:w-1/2"
                >
                  <div className="border-white group relative w-full cursor-pointer space-y-2 overflow-hidden rounded-lg border-4">
                    <Image
                      className="h-[275px] w-full object-cover transition-transform duration-300 ease-in-out sm:h-[400px]"
                      alt={blog?.title}
                      src={blog?.thumbnail}
                      width={500}
                      height={400}
                      objectFit="cover"
                      priority
                    />
                    <div className="mt-2 space-y-1">
                      <div
                        className=" font-sans text-xl text-blue"
                        dangerouslySetInnerHTML={{
                          __html: blog?.title,
                        }}
                      />
                      <div className="flex items-center space-x-4">
                        <p className="text-gray-500">
                          {DateTime.fromISO(blog?.created_at).toLocaleString(
                            DateTime.DATE_MED
                          )}
                        </p>
                        <span>.</span>
                        <p className="text-gray-500">
                          {blog.read_time} min read
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!!rest.length && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {rest.map((blog) => (
                <Link key={blog?.id} href={`blog-old/${blog?.slug}`}>
                  <div className="border-white group relative w-full cursor-pointer space-y-2 overflow-hidden rounded-lg border-4">
                    <Image
                      className="h-[275px] w-full object-cover  transition-transform duration-300 ease-in-out sm:h-[300px]"
                      alt={blog?.title}
                      src={blog?.thumbnail}
                      width={500}
                      height={300}
                      objectFit="cover"
                      priority
                    />

                    <div className="mt-2 space-y-1">
                      <div
                        className="font-sans text-lg text-blue"
                        dangerouslySetInnerHTML={{
                          __html: blog?.title,
                        }}
                      />
                      <div className="flex items-center space-x-4">
                        <p className="text-gray-500">
                          {DateTime.fromISO(blog?.created_at).toLocaleString(
                            DateTime.DATE_MED
                          )}
                        </p>
                        <span>.</span>
                        <p className="text-gray-500">
                          {blog.read_time} min read
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xs={12}>
            {isLoading ? (
              <CustomSpinner />
            ) : (
              <div className="col-span-4 mx-auto w-full ">
                <div className="w-full flex-wrap space-y-4 md:flex">
                  {blogs?.map(
                    (
                      { title, slug, thumbnail, excerpt, link, id },
                      i: number
                    ) =>
                      i === 0 ? (
                        <Link href={`blog/${slug}`}>
                          <div className="border-white group relative w-full cursor-pointer overflow-hidden rounded-lg border-4">
                            <img
                              className="hover mb-2 h-[270px] max-h-[500px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 sm:h-[500px] "
                              alt=""
                              src={`${thumbnail}`}
                            />
                            <div
                              className="mt-3 text-blue"
                              dangerouslySetInnerHTML={{
                                __html: excerpt,
                              }}
                            />
                          </div>
                        </Link>
                      ) : // </ExternalMUILink>
                      i === 1 || i === 2 ? (
                        <Link href={`blog/${slug}`}>
                          <div
                            key={i}
                            className="border-white group relative w-full cursor-pointer overflow-hidden rounded-lg border-4 md:w-1/2"
                          >
                            <img
                              className="hover mb-2 h-[270px] max-h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 sm:h-[350px]"
                              src={`${thumbnail}`}
                              alt=""
                            />

                            <div
                              className="mt-2 text-blue"
                              dangerouslySetInnerHTML={{
                                __html: excerpt,
                              }}
                            />
                          </div>
                        </Link>
                      ) : (
                        <Link href={`blog/${slug}`}>
                          <div className="border-white group relative w-full  cursor-pointer overflow-hidden rounded-lg border-4 md:w-4/12">
                            <img
                              className="hover mb-2 h-[270px] max-h-[320px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 sm:h-[320px]"
                              src={`${thumbnail}`}
                              alt=""
                            />
                            <div
                              className="mt-2 text-blue"
                              dangerouslySetInnerHTML={{
                                __html: excerpt,
                              }}
                            />
                          </div>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}
          </Grid>
        </Grid> */}
      </PageContainer>
    </Layout>
  )
}

export default Blog

// export async function getStaticProps() {
//   const posts = await client
//     .getEntries({ content_type: "blog" })
//     .then((response) => response.items)
//     console.log(posts)

//   return {
//     props: {
//       posts,
//     },
//   }
// }
// export const getServerSideProps = async () => {
//   const query = `*[_type == "post"] | order(order asc){
// 		_id,
// 		title,
// 		author->{
// 			name, image
// 		},
// 		description,
// 		snippet,
// 		mainImage,
// 		topImage,
// 		slug
// 	}`

//   const posts = await sanityClient.fetch(query)

//   return {
//     props: { posts },
//   }
// }
