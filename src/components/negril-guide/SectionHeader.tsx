import { AddAPhoto, Close, Edit } from '@mui/icons-material'
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { Form, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

// import { db, storage } from '@/firebase'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { editGuideSection } from '@/features/negril/negrilSlice'
import SkylarkDivider from '@/components/features/SkylarkDivider'
import CustomImage, {
  CustomImageCoPilot,
} from '@/components/features/toolbox/CustomImage'
import { CustomObj } from '@/features/interfaces'
import { db } from '@/firebase'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  text: Yup.string().notRequired(),
  image: Yup.string().notRequired(),
})
const docRef = doc(db, 'negril', 'guides')

export default function SectionHeader({
  title,
  sectionImage,
  text,
  id,
  header,
  imgMobile,
}: {
  title: string
  sectionImage: string
  text?: string
  id: string
  header: CustomObj
  imgMobile?: string
}) {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const theme: any = useTheme()
  const greaterThanMid = useMediaQuery(theme.breakpoints.up('md'))
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const [file, setFile] = useState<File | null>(null)
  const [fileURL, setFileURL] = useState('')
  const { currentUser, user } = useAppSelector((state: any) => state.auth)

  const onFileChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (e.target.files[0].size > 1000000) {
      toast('File is too large. Choose a smaller file.')
      setFile(null)
    } else {
      const fileData = e.target.files[0]
      setFile(e.target.files[0])
      setFileURL(URL.createObjectURL(fileData))
    }
  }

  const initialValues = {
    title: title || '',
    image: sectionImage,
    text: text || '',
    id: id || '',
  }
  const handleFormData = async (data: any) => {
    const formData = new FormData()
    if (file) {
      formData.append('image', file, file.name)
    }
    formData.append('title', data?.title)
    formData.append('text', data?.text)
    await dispatch(
      editGuideSection({ data: formData, id: id, token: user?.access })
    )
  }

  return (
    <div>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        id="food-drink"
        mb={3}
        mt={0.5}
      >
        <Grid item xs={12}>
          {currentUser && currentUser?.is_admin && (
            <Box className="absolute right-0 z-50">
              <IconButton onClick={handleOpen}>
                <Edit />
              </IconButton>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {header ? (
            // <Image
            //   src={sectionImage}
            //   width={greaterThanMid ? 900 : 640}
            //   height={greaterThanMid ? 500 : 440}
            //   layout="responsive"
            //   className="z-0"
            // />
            <CustomImage
              src={sectionImage}
              alt={title}
              width={greaterThanMid ? 900 : 640}
              height={greaterThanMid ? 500 : 440}
            />
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" paddingBottom={0} color="secondary">
            {title}
          </Typography>
          <SkylarkDivider />
          {!!text && <p className="mb-2">{text}</p>}
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={3}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" paddingBottom={2} color="primary">
              {title}
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
              setFile(null)
              setFileURL('')
              handleClose()
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
                <Stack direction="column" spacing={2}>
                  <Stack direction="column" spacing={2}>
                    <TextField
                      name="title"
                      label="Title"
                      value={values.title}
                      onChange={(e) => setFieldValue('title', e.target.value)}
                      error={touched.title && Boolean(errors.title)}
                      helperText={touched.title && errors.title}
                      fullWidth
                      variant="filled"
                    />
                    <TextField
                      fullWidth
                      name="text"
                      label="Text"
                      variant="filled"
                      multiline
                      rows={3}
                      value={values.text}
                      onChange={(e) => setFieldValue('text', e.target.value)}
                      error={touched.text && Boolean(errors.text)}
                      helperText={touched.text && errors.text}
                    />
                  </Stack>

                  <div className="text-center">
                    <div className="mx-auto">
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
                      src={fileURL?.length > 0 ? fileURL : sectionImage}
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
                  >
                    Save
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Dialog>
    </div>
  )
}
