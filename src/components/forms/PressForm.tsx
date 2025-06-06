import React, { useRef } from 'react'

import usePressForm from '@/hooks/usePressForm'
import { Button } from '../ui/button'
import { CloudUpload } from 'lucide-react'

interface PressFormProps {
  press?: any
  onClose: () => void
}

function PressForm({ press, onClose }: PressFormProps) {
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const {
    register,
    handleSubmit,
    errors,
    isDirty,
    uploadedImage,
    setUploadedImage,
    onSubmit,
    reset,
    setFileUploaded,
  } = usePressForm({ press, onClose })

  const handleClickFile: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    hiddenFileInput.current?.click()
  }
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      if (file.size > 1000000) {
        alert('File size is too large. Please choose a file less than 1MB')
        return
      }
      setUploadedImage(URL.createObjectURL(file))
      register('image', { value: file })
      setFileUploaded(file)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mx-auto flex w-full max-w-4xl flex-col gap-2"
    >
      <div className="space-y-1">
        <p className="text-sm text-gray-600">Post Title</p>
        <input
          {...register('title')}
          className="w-full rounded-md border-gray-500 border-opacity-20"
          placeholder="Title"
        />
        <p className="text-xs text-red-600">{errors.title?.message}</p>
      </div>
      <div className="space-y-1 ">
        <p className="text-sm text-gray-600">Body</p>
        <textarea
          id="text"
          {...register('text')}
          className="w-full rounded-md border-gray-500 border-opacity-20"
          placeholder="Text"
        />
        <small className="text-xs text-red-600">{errors.text?.message}</small>
      </div>
      <div className="space-y-1 ">
        <p className="text-sm text-gray-600">Link to Article</p>
        <input
          {...register('link')}
          className="w-full rounded-md border-gray-500 border-opacity-20"
          placeholder="Link"
          type="url"
        />
        <small className="text-xs text-red-500">{errors.link?.message}</small>
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <div className="w-full space-y-1 ">
          <p className="text-sm text-gray-600">Date of Article (optional)</p>
          <input
            {...register('date')}
            className="w-full rounded-md border-gray-500 border-opacity-20"
            placeholder="Date"
            type="date"
          />
          <small className="text-red">{errors.date?.message}</small>
        </div>
      </div>
      <div className="space-y-1 self-start">
        <p className="text-sm text-gray-600">Order # (Descending)</p>
        <input
          {...register('order')}
          className="rounded-md border-gray-500 border-opacity-20"
          placeholder="Order Number"
        />

        <p className="text-xs text-red-600">{errors.order?.message}</p>
      </div>
      <div className=" space-x-2 self-end">
        <input type="checkbox" {...register('draft')} />
        <label className="text-xs">Select if this is a draft post</label>
      </div>
      <div className="flex flex-col gap-2">
        <small className="text-gray-600">Upload to add / replace image</small>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleClickFile}
          className="bg-blue hover:bg-pink"
        >
          <CloudUpload className=" text-white e" size={48} />
        </Button>
        <input
          type="file"
          onChange={handleImageUpload}
          ref={hiddenFileInput}
          accept="image/*"
          style={{ display: 'none' }} // Make the file input element invisible
        />
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="Preview"
            className="h-64 w-full object-cover"
          />
        )}
      </div>
      <Button
        type="submit"
        className="text-white mx-auto bg-blue hover:bg-pink"
        variant="outline"
      >
        Save Changes
      </Button>
    </form>
  )
}

export default PressForm
