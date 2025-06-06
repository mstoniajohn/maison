import React, { useState } from 'react'

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/router'
import { doc } from 'firebase/firestore'
import { db, storage } from '@/firebase'

export default function UpdateForm() {
  const [file, setFile] = useState('')
  const {
    query: { id },
  } = useRouter()
  //    const trip = userTrips.filter((t) => t.id === id)
  const q = doc(db, 'negril', 'food')

  const onFileChange = (e: any) => {
    e.preventDefault()
    const storageRef = ref(storage, `trips/${e.target.files[0].name}`)
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, e.target.files[0])
      .then(async () => {
        const downloadURL = await getDownloadURL(storageRef)
        setFile(downloadURL)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <div>
      {' '}
      <div className="col-span-12">
        <label className="block text-sm font-medium text-gray-700">
          {' '}
          Cover photo{' '}
        </label>
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file"
                className="bg-white text-sky-600 focus-within:ring-sky-500 hover:text-sky-500 relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
              >
                <span>Upload a file</span>
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="sr-only"
                  onChange={onFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  )
}
