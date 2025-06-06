import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import DialogTitle from '@mui/material/DialogTitle'
import { useAppSelector } from '../../app/store'
import * as yup from 'yup'
import { useFormik } from 'formik'
import ButtonCustomV2 from '@/components/features/ButtonCustomV2'
import { Box } from '@mui/material'

const presValidation = yup.object().shape({
  title: yup.string().required('Required'),
  image: yup.string().required('Required'),
  date: yup.string().required('Required'),
  link: yup.string().required('Required'),
  text: yup.string().required('Required'),
})

function AddOrEditPressForm({
  pkid,
  open,
  handleClose,
  create,
}: {
  pkid: any
  open: boolean
  handleClose: () => void
  create?: boolean
}) {
  const { pressDjango } = useAppSelector((state) => state.press)

  const press = pressDjango?.find((i) => i.pkid === pkid) ?? {}
  const initialValues = create
    ? { ...press }
    : { title: '', text: '', date: '', image: '', link: '' }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...initialValues,
    },
    validationSchema: presValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  console.log(pkid, press)

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit {pkid}</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          className="space-y-2"
        >
          <TextField
            fullWidth
            variant="standard"
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            // helperText={formik.touched.title && formik.errors.title}
          />

          <ButtonCustomV2 type="submit">Submit</ButtonCustomV2>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default AddOrEditPressForm
