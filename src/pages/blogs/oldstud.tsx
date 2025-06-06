import * as React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Link, Typography, useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import PageContainer from '@/components/PageContainer'
import Layout from '@/components/layout/Layout'
import { CustomImageCoPilot } from '@/components/features/toolbox/CustomImage'

const Post = ({
  post = [],
  morePosts,
  preview,
}: {
  post: any
  morePosts: any
  preview: any
}) => {
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    await fetch(`/api/createComment`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }
  const Text = ({ children }: { children: React.ReactNode }) => (
    <Typography variant="body1" className="mb-2">
      {children}
    </Typography>
  )

  const Bold = ({ children }: { children: React.ReactNode }) => (
    <Typography sx={{ fontWeight: 'bold' }} variant="body1">
      {children}
    </Typography>
  )
  const HeadThree = ({ children }: { children: React.ReactNode }) => (
    <Typography
      component="h3"
      variant="h4"
      color="primary"
      sx={{ fontWeight: 'normal' }}
    >
      {children}
    </Typography>
  )
  const HeadTwo = ({ children }: { children: React.ReactNode }) => (
    <Typography
      component="h2"
      variant="h4"
      color="primary"
      sx={{ fontWeight: 'normal' }}
    >
      {children}
    </Typography>
  )
  const LinkEntry = ({
    node,
    children,
  }: {
    node: any
    children: React.ReactNode
  }) => (
    <Link underline="none" href={node?.data?.uri}>
      {children}
    </Link>
  )

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <HeadThree>{children}</HeadThree>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <HeadTwo>{children}</HeadTwo>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <LinkEntry node={node}>{children}</LinkEntry>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => (
        <div>{children}</div>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: any) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li>
          <Typography variant="body1">{children}</Typography>
        </li>
      ),
    },
    // renderText: text => text.replace('!', '?'),
  }

  const greaterThanMid = useMediaQuery((theme: any) =>
    theme.breakpoints.up('md')
  )

  return (
    <Layout title={`${post?.title}`}>
      <CustomImageCoPilot
        width={greaterThanMid ? 1900 : 1000}
        height={greaterThanMid ? 750 : 800}
        src={post.image?.url}
        alt=""
      />
      {/* <BootstrapCarousel
          images={[
            {
              src: post.image?.url,
              mobileSrc: post.image?.url,
              name: 'Skylark Negril',
            },
          ]}
        /> */}
      <PageContainer>
        <div className="relative mx-auto grid w-full max-w-7xl  md:p-4">
          <article className="col-span-4 mx-auto max-w-5xl ">
            <div>
              {/* <p>{new Date(createdAt).toLocaleString()}</p> */}
              <Typography variant="h1" color="primary">
                {post?.title}
              </Typography>

              {documentToReactComponents(post?.body?.json, options)}

              <Box
                className={`grid grid-cols-1 gap-2 md:grid-cols-${
                  post?.imageListCollection?.items.length < 3 ? '2' : '3'
                } relative items-center`}
              >
                {post?.imageListCollection?.items.map(
                  ({ url }: { url: any }, i: number) =>
                    url.includes('.mp4') ? (
                      <div
                        key={i}
                        id="h-full absolute top-0 left-0 w-full z-99 d-none"
                      >
                        <video
                          controls
                          width="100%"
                          height="100%"
                          className="max-h-full w-full"
                        >
                          <source src={url} type="video/mp4" />
                          {/* <source src="../static/video/10s.webm" type='video/webm; codecs="vp8, vorbis"' />
                    <source src="../static/video/10s.ogv" type='video/ogg; codecs="theora, vorbis"' /> */}
                        </video>
                      </div>
                    ) : (
                      <CustomImageCoPilot
                        key={i}
                        src={url}
                        // lazyload={true}
                      />
                    )
                )}
              </Box>
            </div>
            <div></div>
          </article>
        </div>

        <hr />
        {/* {submitted ? (
        <Typography>Thanks</Typography>
      ) : (
        <form
          className="mx-auto mb-5 flex max-w-2xl flex-col p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            // value={post._id}
          />
          <lable className="mb-5 block">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-5 shadow outline-none ring-rose-500 focus:ring"
              type="text"
              placeholder="Name"
            />
          </lable>
          <lable className="mb-2 block">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-5 shadow outline-none ring-rose-500 focus:ring"
              type="email"
              placeholder="Name"
            />
          </lable>
          <lable className="mb-2 block">
            <span className="text-gray-700">Name</span>
            <textarea
              {...register('comment', { required: true })}
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-rose-500 focus:ring"
              rows={8}
              placeholder="Name"
            />
          </lable>
          <input
            className="focus:shadow-outline cursor-pointer rounded bg-teal-500 py-2 px-4 hover:bg-rose-400 focus:outline-none"
            type="submit"
          />
          <div>
            {errors.name && (
              <span className="text-red-400">Name is required</span>
            )}
          </div>
        </form>
      )} */}
        <div className="mx-auto max-w-xs ">
          <Typography>Comments</Typography>
          {/* <div className="p-2s rounded-lg bg-slate-100">
          {post?.comments?.map((comment) => (
            <p className=" " key={comment._id}>
              {comment.comment}
            </p>
          ))}
        </div> */}
        </div>
      </PageContainer>
    </Layout>
  )
}

export default Post
