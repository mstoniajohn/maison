import React from 'react'

function BlogSkeleton() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="animate-pulse h-96 w-full rounded-lg bg-gray-200"></div>
      <div className="mt-4 space-y-3">
        <div className="animate-pulse h-20 w-full rounded-sm bg-gray-200"></div>
        <div className="animate-pulse h-20 w-full rounded-sm bg-gray-200"></div>
        <div className="animate-pulse h-20 w-full rounded-sm bg-gray-200"></div>
        <div className="animate-pulse h-20 w-full rounded-sm bg-gray-200"></div>
      </div>
    </div>
  )
}

export default BlogSkeleton
