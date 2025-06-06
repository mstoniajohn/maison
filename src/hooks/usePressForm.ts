import useUpdatePress from '@/components/api/putPress'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
interface IPress {
  id?: string
  pkid?: number
  title: string
  text: string
  image: string
  link: string
  date: Date
  createdAt?: string
  updatedAt?: string
  draft?: boolean
  order: number | undefined
  subtitle?: string
}

interface IPressFormInput {
  title: string
  text: string
  image?: File | string
  link?: yup.Maybe<string | undefined>
  date?: yup.Maybe<Date | null | undefined>
  draft?: boolean
  order?: number
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  text: yup.string().required('Text is required'),
  link: yup.string().url('Invalid URL format').notRequired(),
  date: yup.date().nullable().notRequired(),
  draft: yup.boolean(),
  order: yup.number().min(0, 'Order must be a positive number'),
})

const usePressForm = ({
  press,
  onClose,
}: {
  press?: IPress
  onClose: () => void
}) => {
  const { mutateAsync } = useUpdatePress()
  const [uploadedImage, setUploadedImage] = useState<string | null>(
    press?.image || null
  )
  const [fileUploaded, setFileUploaded] = useState<File | Blob | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<IPressFormInput>({
    resolver: yupResolver(schema),
    defaultValues: press || {
      title: '',
      text: '',
      link: '',
      date: null,
      draft: false,
      order: undefined,
    },
  })

  const onSubmit: SubmitHandler<IPressFormInput> = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('text', data.text)
    formData.append('link', data.link as string)
    formData.append('date', data.date ? data.date.toISOString() : '')
    formData.append('draft', String(data.draft))
    console.log(data.image, fileUploaded)
    if (fileUploaded instanceof File) {
      formData.append('image', fileUploaded)
    }
    formData.append('order', String(data.order || null))
    try {
      await mutateAsync({ press: formData, pkid: press?.pkid || 0 })
      reset()
      onClose()
    } catch (error) {
      console.error('Error updating press:', error)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    uploadedImage,
    setUploadedImage,
    onSubmit,
    reset,
    setFileUploaded,
  }
}

export type { IPress, IPressFormInput }

export default usePressForm
