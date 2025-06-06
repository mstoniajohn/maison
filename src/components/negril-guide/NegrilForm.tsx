import {
  Box,
  Button,
  Dialog,
  FormControl,
  IconButton,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import { Form, Formik, FormikProps, useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import * as Yup from 'yup'
import { AddAPhoto, Close } from '@mui/icons-material'

import { toast } from 'react-toastify'
import {
  createNegrilGuide,
  editNegrilGuide,
  getNegrilGuides,
} from '@/features/negril/negrilSlice'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { CATEGORIES, SUB_CATEGORIES } from '@/utils/constants'

import { capitalize } from 'lodash'

const validationSchema = Yup.object().shape({
  website_url: Yup.string().notRequired(),
  title: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
  direction_url: Yup.string().notRequired(),
  category: Yup.string().notRequired(),
  sub_category: Yup.string().notRequired(),
  order: Yup.number().notRequired(),
})

export default function NegrilForm({
  title,
  open,
  handleClose,
  edit = false,
  create,
  id,
}: {
  title?: string
  open: boolean
  edit?: boolean
  create?: true
  id?: number

  handleClose: () => void
}) {
  const dispatch = useAppDispatch()
  const { currentUser, user } = useAppSelector((state) => state.auth)

  const currentCard = useSelector((state: any) => state.negril.currentCard)
  const [file, setFile] = useState(currentCard?.image || '')
  const [fileURL, setFileURL] = useState(currentCard?.image || '')

  const handleFormData = async (data: any) => {
    const formData = new FormData()
    if (file) {
      formData.append('image', file, file.name)
    }
    formData.append('title', data?.title)
    formData.append('body', data?.body)
    formData.append('category', data?.category)
    formData.append('sub_category', data?.sub_category)
    formData.append('direction_url', data?.direction_url)
    formData.append('website_url', data?.website_url)
    formData.append('order', data?.order)
    if (edit) {
      await dispatch(
        editNegrilGuide({ data: formData, id: id, token: user?.access })
      )
    } else {
      await dispatch(createNegrilGuide({ data: formData, token: user?.access }))
    }
  }

  const onFileChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (e.target.files[0].size > 1000000) {
      console.log(e.target.files[0])
      toast('File is too large. Choose a smaller file.')
      setFile('')
    } else {
      const fileData = e.target.files[0]
      // get url from uploaded file
      setFile(e.target.files[0])
      setFileURL(URL.createObjectURL(fileData))
    }
  }

  const initialValues = edit
    ? { ...currentCard }
    : {
        website_url: '',
        direction_url: '',
        category: CATEGORIES.other,
        sub_category: SUB_CATEGORIES.other,
        title: '',
        body: '',
        image: '',
        order: 0,
      }

  function getCategory(name: string) {
    if (name === 'WATER_SPORTS') {
      return 'On The Water'
    } else {
      return name.toLocaleLowerCase().replaceAll('_', ' ')
    }
  }

  function dragOverHandler(ev: any) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()
  }
  function dropHandler(ev: any) {
    if (ev.dataTransfer.files[0].size > 300000) {
      toast('File is too large. Choose a smaller file that is 300KB or less')
      setFile('')
    } else {
      const fileData = ev.target.files[0]
      setFile(fileData)
      setFileURL(URL.createObjectURL(fileData))
    }
  }
  const mapCats = Object.values(CATEGORIES).map((item) => ({
    name: capitalize(getCategory(item)),
    value: item,
  }))

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
        <Formik
          initialValues={{
            ...initialValues,
          }}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleFormData(values)
            setSubmitting(false)
            resetForm()
            handleClose()
            setFile('')
            setFileURL('')
          }}
        >
          {({
            submitForm,
            isSubmitting,
            values,
            setFieldValue,
            touched,
            errors,
          }) => (
            <Form
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  submitForm()
                }
              }}
            >
              <Stack spacing={2}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    id="title"
                    name="title"
                    label="Title"
                    value={values.title}
                    //   onChange={handleChange}
                    onChange={(e) => setFieldValue('title', e.target.value)}
                    error={touched.title && Boolean(errors.title)}
                    // helperText={touched.title && errors.title}
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
                    value={values.body}
                    //   onChange={handleChange}
                    onChange={(e) => setFieldValue('body', e.target.value)}
                    error={touched.body && Boolean(errors.body)}
                    // helperText={touched.body && errors.body}
                  />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    id="website_url"
                    variant="filled"
                    name="website_url"
                    label="Website Link"
                    value={values?.website_url}
                    //   onChange={handleChange}
                    onChange={(e) =>
                      setFieldValue('website_url', e.target.value)
                    }
                    // error={touched.website_url && Boolean(errors.website_url)}
                    // helperText={touched.website_url && errors.website_url}
                    fullWidth
                  />
                  <TextField
                    id="direction_url"
                    variant="filled"
                    name="direction_url"
                    label="Directions Link"
                    value={values?.direction_url}
                    //   onChange={handleChange}
                    onChange={(e) =>
                      setFieldValue('direction_url', e.target.value)
                    }
                    // error={
                    //   touched.direction_url && Boolean(errors.direction_url)
                    // }
                    // helperText={touched.direction_url && errors.direction_url}
                    fullWidth
                  />

                  {/* 
              add category and sub category
               */}
                </Stack>
                <Stack spacing={3}>
                  <TextField
                    id="item_order"
                    variant="filled"
                    name="order"
                    placeholder="Item Order #"
                    label="Order Number"
                    value={values.order}
                    onChange={(e) => setFieldValue('order', e.target.value)}
                    fullWidth
                    type="number"
                  />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values?.category}
                        label="Category"
                        onChange={(e: any) =>
                          setFieldValue('category', e.target.value)
                        }
                      >
                        {mapCats?.map((option, i) => (
                          <MenuItem key={i} value={option.value}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Stack>

                {/* <div className="text-center">
                  <div
                    className="mx-auto"
                    onDrop={dropHandler}
                    onDragOver={dragOverHandler}
                  >
                    <Button
                      variant="outlined"
                      component="label"
                      endIcon={<AddAPhoto />}
                    >
                      Upload Image{' '}
                      <input
                        id="file"
                        name="file"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={onFileChange}
                        hidden
                      />
                    </Button>
                  </div>

                  <img
                    src={fileURL || currentCard?.image}
                    className="m-2 mx-auto w-full max-w-[340px]"
                  />
                </div> */}
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

                  <img
                    src={fileURL ? fileURL : currentCard?.image}
                    className="m-2 mx-auto w-full max-w-[340px]"
                  />
                </div>
                {isSubmitting && <LinearProgress />}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  sx={{
                    fontWeight: 'bold',
                    mt: 2,
                    justifyContent: 'center',
                    color: 'white',
                  }}
                  //   onClick={submitForm}
                >
                  Save
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Dialog>
  )
}
