import React from 'react'

function BlogHeaderLoader() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="animate-pulse h-96 w-full rounded-lg bg-gray-200"></div>
      <div className="relative">
        <hr className="border-t-2 border-gray-200" />
        <div className="py-4 text-center">
          <div className="animate-pulse h-20 w-full rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeaderLoader
