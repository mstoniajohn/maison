import { BLOG_URL_PREFIX } from '@/utils/constants'
import { ArrowBack } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

type Props = {
  href?: string
}

function BackToBlogsButton({ href = `${BLOG_URL_PREFIX}/` }: Props) {
  return (
    <Link href={href}>
      <p className="flex cursor-pointer items-center justify-center gap-2">
        <ArrowBack />
        Back to blogs
      </p>
    </Link>
  )
}

export default BackToBlogsButton
