import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import { FormikProps, useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import * as Yup from 'yup'
import { Close } from '@mui/icons-material'

import { toast } from 'react-toastify'
import { useAppDispatch } from '@/app/store'
import { createNegrilGuide } from '@/features/negril/negrilSlice'

const validationSchema = Yup.object().shape({
  website_url: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
  direction_url: Yup.string().required('Required'),
  image: Yup.object().notRequired(),
  category: Yup.string().required('Required'),
  sub_category: Yup.string().required('Required'),
})

// interface MyValues {
//   title?: string
//   id?: any
//   body?: string
//   sub_category?: string
//   category?: string
//   image?: string
//   website_url: string
//   direction_url: string
// }

export default function SectionForm({
  title,
  open,
  handleClose,

  edit,
  create,
}: {
  title?: string
  open: boolean
  edit?: boolean
  create?: true

  handleClose: () => void
}) {
  const dispatch = useAppDispatch()

  const currentCard = useSelector((state: any) => state.negril.currentCard)
  const [file, setFile] = useState(currentCard?.image || '')
  const handleFormData = (data: any) => {
    const formData = new FormData()
    if (create || file) {
      formData.append('image', file, file.name)
    } else {
      formData.append('image', currentCard?.image)
    }
    formData.append('title', data?.title)
    formData.append('body', data?.body)
    formData.append('category', data?.category)
    formData.append('sub_category', data?.sub_category)
    formData.append('direction_url', data?.direction_url)
    formData.append('website_url', data?.website_url)
    dispatch(createNegrilGuide({ data: formData }))
  }

  const onFileChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (e.target.files[0].size > 1000000) {
      toast('File is too large. Choose a smaller file.')
      setFile('')
    } else {
      const fileData = e.target.files[0]

      // get url from uploaded file
      setFile(e.target.files[0])
      formik.setFieldValue('image', fileData)
    }
  }

  const initialValues = edit
    ? { ...currentCard }
    : {
        website_url: '',
        direction_url: '',
        category: '',
        sub_category: '',
        title: '',
        body: '',
        image: '',
      }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...initialValues },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      // values['image'] = file?.length > 0 ? file : currentCard?.image

      handleFormData(values)

      actions.resetForm()
      handleClose()
      setFile('')
    },
  })
  function dragOverHandler(ev: any) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()
  }
  function dropHandler(ev: any) {
    if (ev.dataTransfer.files[0].size > 1000000) {
      toast('File is too large. Choose a smaller file.')
      setFile('')
    } else {
      const fileData = ev.target.files[0]
      setFile(fileData)
      formik.setFieldValue('image', fileData)
    }
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ padding: 4 }}>
        {' '}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" paddingBottom={2} color="primary">
            Add New {title} item
          </Typography>
          <IconButton
            color="primary"
            onClick={handleClose}
            sx={{ marginLeft: 'auto', marginBottom: 'auto' }}
          >
            <Close />
          </IconButton>
        </Box>
        <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={2}>
            <TextField
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              // helperText={formik.touched.title && formik.errors.title}
              fullWidth
              variant="filled"
            />
            <TextField
              fullWidth
              id="body"
              name="body"
              label="Body"
              variant="filled"
              multiline
              rows={3}
              value={formik.values.body}
              onChange={formik.handleChange}
              error={formik.touched.body && Boolean(formik.errors.body)}
              // helperText={formik.touched.body && formik.errors.body}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField
              id="website_url"
              variant="filled"
              name="website_url"
              label="Website Link"
              value={formik.values.website_url}
              onChange={formik.handleChange}
              error={
                formik.touched.website_url && Boolean(formik.errors.website_url)
              }
              // helperText={
              //   formik.touched.website_url && formik.errors.website_url
              // }
              fullWidth
            />
            <TextField
              id="direction_url"
              variant="filled"
              name="direction_url"
              label="Directions Link"
              value={formik.values.direction_url}
              onChange={formik.handleChange}
              error={
                formik.touched.direction_url &&
                Boolean(formik.errors.direction_url)
              }
              // helperText={
              //   formik.touched.direction_url && formik.errors.direction_url
              // }
              fullWidth
            />
            {/* 
            add category and sub category
             */}
          </Stack>
          <div
            className="col-span-12"
            onDrop={dropHandler}
            onDragOver={dragOverHandler}
          >
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
                      // value={formik}
                      accept="image/*"
                      onChange={onFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>

            {currentCard?.image && (
              <img
                src={currentCard?.image}
                className="m-2 mx-auto w-full max-w-[340px]"
              />
            )}
          </div>

          <Button
            type="submit"
            disabled={formik.isSubmitting}
            variant="contained"
            sx={{
              fontWeight: 'bold',
              mt: 2,
              justifyContent: 'center',
              color: 'white',
            }}
            // onClick={formik.submitForm}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </Dialog>
  )
}
