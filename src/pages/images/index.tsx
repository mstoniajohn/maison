import { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import useSWR from 'swr'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { apiConfig } from '../../components/api/axiosApi'
import { saveAs } from 'file-saver'
import {
  createImage,
  fetchImages,
  setImageStatus,
} from '@/features/images/ImageSlice'
import { Button, Stack } from '@mui/material'
import PhotographIcon from '@heroicons/react/outline/PhotographIcon'
import { DownloadTwoTone } from '@mui/icons-material'

const ImagesPage = () => {
  const { user, currentUser } = useAppSelector((state: any) => state.auth)
  const { imageStatus, images } = useAppSelector((state: any) => state.images)
  const dispatch = useAppDispatch()
  const [image, setImage] = useState<File | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0])
    }
  }

  const handleImageUpload = async () => {
    if (!image) {
      return
    }
    const formData = new FormData()
    formData.append('images', image)
    // get filename
    formData.append('title', image.name)
    // get domains and add id
    formData.append('domain_id', '2')
    // dispatch image upload
    dispatch(createImage({ data: formData, token: user?.access }))
    // clear image
    setImage(null)
    dispatch(setImageStatus('idle'))
  }
  //   fetch images from api useing fect api
  const download = (url: any, name: string) => {
    saveAs(url, name)
  }
  const renderImages = () => {
    return images?.map((image: any) => {
      return (
        <div key={image.id} className="relative">
          <h2>{image.title}</h2>
          <img src={image.images} className="h-96 w-full object-cover" />
          {/* add download icon to images */}
          <a
            href={image.images}
            download
            className="text-white absolute bottom-0 right-0 bg-pink p-1 text-xs font-bold leading-5"
            onClick={() => download(image.images, image.title)}
          >
            Download <DownloadTwoTone />
          </a>
        </div>
      )
    })
  }
  useEffect(() => {
    if (imageStatus === 'idle') {
      dispatch(fetchImages())
    }
  })

  return (
    <Layout>
      {currentUser?.is_admin ? (
        <div className=" container mt-20">
          <h1>Images Page</h1>
          <Stack
            rowGap={2}
            justifyContent="flex-start"
            alignItems="flex-start"
            py={3}
          >
            <div className="mx-auto mt-2 flex w-full max-w-md justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotographIcon
                  className="text-gray mx-auto h-12 w-12"
                  aria-hidden="true"
                />
                <div className="text-gray mt-4 flex justify-center text-sm leading-6">
                  <label
                    htmlFor="file-upload"
                    className="bg-white text-indigo-600 focus-within:ring-indigo-600 hover:text-indigo-500 relative cursor-pointer rounded-md  font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                  >
                    <span className="text-gray text-center">
                      click to Upload a file
                    </span>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="mb-3 text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
                {/* display chosen image */}
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    className="mb-2 h-48 w-full object-cover"
                  />
                ) : null}
                <Button
                  variant="contained"
                  onClick={handleImageUpload}
                  disabled={!image}
                >
                  Upload Image
                </Button>
              </div>
            </div>
          </Stack>
          {/* List all images below */}
          <div className="grid grid-cols-4 gap-2">{renderImages()}</div>
        </div>
      ) : null}
    </Layout>
  )
}

export default ImagesPage
