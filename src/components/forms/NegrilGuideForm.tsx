import React, { useEffect, useState } from 'react'
import { decode } from 'html-entities'
import { Stack, TextField, Typography } from '@mui/material'
import ButtonCustomV2 from '@/components/features/ButtonCustomV2'

import * as Yup from 'yup'
import { FormikProvider, useFormik } from 'formik'

import { useAppDispatch } from '../../app/store'
import {
  setNegrilPassword,
  setShowPassword,
} from '@/features/negril/negrilSlice'
import { isEmpty } from 'lodash'

export default function NegrilGuideForm({
  status,
  message,
  onValidated,
  onSubmit,
}: {
  status: any
  message: any
  onValidated: (data: { EMAIL: string; SIGNUP: string }) => boolean
  onSubmit: (email: string) => void
}) {
  const [error, setError] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const [disableButton, setDisableButton] = useState<boolean>(true)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email')
      .matches(/^\S+@\S+\.\S+$/, 'Invalid Email'),
  })
  const initialValues = {
    email: '',
  }

  /**
   * Handle form submit.
   *
   * @return {boolean}
   */

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: any) => {
      console.log('onSubmit\n\n', values.email)

      formik.setSubmitting(true)
      setDisableButton(true)

      handleFormSubmit()
      setDisableButton(false)
    },
  })
  function handleFormSubmit() {
    console.log(formik.values.email, formik.errors.email)
    if (Boolean(formik.errors.email)) {
      setDisableButton(true)
      return false
    }
    onSubmit(formik.values.email)

    const isFormValidated = onValidated({
      EMAIL: formik.values.email,
      SIGNUP: 'guidepw',
    })

    if (isFormValidated) {
      formik.setFieldValue('email', '')
      formik.setErrors({})
    }
    dispatch(setNegrilPassword({ password: process.env.NEXT_PUBLIC_PASSWORD }))
    dispatch(setShowPassword(true))
    return !Boolean(formik.errors.email) && isFormValidated
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: any): string | null => {
    if (!message) {
      return null
    }
    const result = message?.split('-') ?? null
    if ('0' !== result?.[0]?.trim()) {
      return decode(message)
    }
    const formattedMessage = result?.[1]?.trim() ?? null
    return formattedMessage ? decode(formattedMessage) : null
  }
  useEffect(() => {
    if (!Boolean(formik.errors.email) || formik.values.email === '') {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [formik.errors.email, formik.values.email])
  useEffect(() => {
    if (status === 'success') {
      formik.setFieldValue('email', '')
      formik.setErrors({})
    }
  }, [status])
  return (
    <div>
      <FormikProvider value={formik}>
        <Stack rowGap={2} bgcolor="AppWorkspace" p={1}>
          <TextField
            variant="standard"
            sx={{
              mx: 1,
            }}
            inputProps={{
              style: {
                color: 'black',
              },
            }}
            {...formik.getFieldProps('email')}
            type="email"
            placeholder="Enter a valid email"
            autoComplete="new-password"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={!isEmpty(formik.errors.email) && 'email is required'}
          />
          <input
            className="hidden"
            type="checkbox"
            value="1"
            name="group[467997][1]"
            id="mce-group[467997]-467997-1"
            defaultChecked
          />

          <input type="hidden" name="tags" value="6738661" />
          <input type="hidden" name="SIGNUP" value="guidepw" />
          <input type="hidden" name="tags" value="40691" />
          <div className="text-center">
            {status === 'success' && (
              <div
                dangerouslySetInnerHTML={{
                  __html: `
           <div class="pb-3 text-center font-bold">
           <h2 class="text-[22px] text-pink">Thanks for Signing Up!</h2>
           <p>The password is: <br /> <span class="font-bold">vacation</span></p>
           <p>Click the ACCESS button above.</p>
           </div>
            `,
                }}
              />
            )}
            {status === 'sending' && (
              <div className="p-2 text-center font-bold">Sending...</div>
            )}
            <div className="newsletter-form-info text-center">
              {status === 'error' || error ? (
                <div
                  className="newsletter-form-error text-md font-bold"
                  dangerouslySetInnerHTML={{
                    __html: error || getMessage(message) || '',
                  }}
                />
              ) : null}
            </div>
            <Typography variant="subtitle2" color="darkgray" pb={1}>
              By submitting this form, you are consenting to receive marketing
              emails from: Skylark Negril Beach Resort, Norman Manley Blvd,
              Jamaica. You can revoke your consent to receive emails at any time
              by using the SafeUnsubscribe® link, found at the bottom of every
              email.
            </Typography>
          </div>
          <div className="mx-auto">
            <ButtonCustomV2
              disabled={disableButton}
              variant="contained"
              color="secondary"
              sx={{
                color: 'white',
                fontWeight: 'bold',
              }}
              onClick={handleFormSubmit}
            >
              Access
            </ButtonCustomV2>
          </div>
        </Stack>
      </FormikProvider>
    </div>
  )
}
