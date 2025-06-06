import Link from 'next/link'
import React from 'react'

import PageContainer from '@/components/PageContainer'
import CustomSpinner from '@/components/layout/CustomSpinner'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import { DateTime } from 'luxon'
import useBlogs from '@/hooks/useStrapBlogs'
import Typography from '@/components/typography/Typography'
import { orderBy } from 'lodash'

const Blog = () => {
  const { data: blogs, isPending: isLoading } = useBlogs()
  const allBlogs = orderBy(blogs?.data, ['order'], ['desc'])
  const firstBlog = allBlogs?.[0]
  const secondThird = allBlogs?.slice(1, 3) || []
  const rest = allBlogs?.slice(3) || []

  return (
    <Layout title="Posts" showGuideButton>
      <PageContainer>
        {isLoading && <CustomSpinner />}

        <div className="container mx-auto">
          {/* 1) First Blog - full width */}
          {firstBlog && (
            <Link href={`articles/${firstBlog?.slug}`}>
              <div className="border-white group relative mb-6 w-full cursor-pointer space-y-2 overflow-hidden rounded-lg border-4">
                <Image
                  className="h-[275px] w-full object-cover transition-transform duration-300 ease-in-out sm:h-[600px]"
                  alt={firstBlog?.title}
                  src={`${firstBlog?.thumbnail?.url}`}
                  width={1200}
                  height={600}
                />
                <div className="mt-2 space-y-1">
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-500">
                      {DateTime.fromISO(firstBlog?.createdAt).toLocaleString(
                        DateTime.DATE_MED
                      )}
                    </p>
                    <span>.</span>
                    <p className="text-gray-500">
                      {firstBlog.read_time} min read
                    </p>
                  </div>
                  <Typography
                    variant="h2"
                    className=" uppercase text-gray-700 sm:text-3xl"
                  >
                    {firstBlog?.title}
                  </Typography>
                </div>
              </div>
            </Link>
          )}
          {!!secondThird.length && (
            <div className="mb-6 flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              {secondThird.map((blog: any) => (
                <Link
                  key={blog?.id}
                  href={`articles/${blog?.slug}`}
                  className="md:w-1/2"
                >
                  <div className="border-white group relative w-full cursor-pointer space-y-2 overflow-hidden rounded-lg border-4">
                    <Image
                      className="h-[275px] w-full object-cover transition-transform duration-300 ease-in-out sm:h-[400px]"
                      alt={blog?.title}
                      src={`${blog?.thumbnail?.url}`}
                      width={500}
                      height={400}
                      objectFit="cover"
                      priority
                    />
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center space-x-4">
                        <p className="text-gray-500">
                          {DateTime.fromISO(blog?.createdAt).toLocaleString(
                            DateTime.DATE_MED
                          )}
                        </p>
                        <span>.</span>
                        <p className="text-gray-500">
                          {blog.read_time} min read
                        </p>
                      </div>
                      <Typography
                        variant="h2"
                        className="uppercase text-gray-700"
                      >
                        {blog?.title}
                      </Typography>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!!rest.length && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {rest.map((blog: any) => (
                <Link key={blog?.id} href={`articles/${blog?.slug}`}>
                  <div className="border-white group relative w-full cursor-pointer space-y-2 overflow-hidden rounded-lg border-4">
                    <Image
                      className="h-[275px] w-full object-cover  transition-transform duration-300 ease-in-out sm:h-[300px]"
                      alt={blog?.title}
                      src={`${blog?.thumbnail?.url}`}
                      width={500}
                      height={300}
                      objectFit="cover"
                      priority
                    />

                    <div className="mt-2 space-y-1">
                      <div className="flex items-center space-x-4">
                        <p className="text-gray-500">
                          {DateTime.fromISO(blog?.createdAt).toLocaleString(
                            DateTime.DATE_MED
                          )}
                        </p>
                        <span>.</span>
                        <p className="text-gray-500">
                          {blog.read_time} min read
                        </p>
                      </div>
                      <Typography
                        variant="h2"
                        className="uppercase text-gray-700"
                      >
                        {blog?.title}
                      </Typography>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </PageContainer>
    </Layout>
  )
}

export default Blog
