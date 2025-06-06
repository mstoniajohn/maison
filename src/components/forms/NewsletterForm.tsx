import React, { useState } from 'react'
import { decode } from 'html-entities'
import { Stack, TextField, Typography } from '@mui/material'
import ButtonCustomV2 from '@/components/features/ButtonCustomV2'

export default function NewsletterForm({
  status,
  message,
  onValidated,
}: {
  status: any
  message: any

  onValidated: (data: { EMAIL: string; SIGNUP: 'newsletter' }) => boolean
}) {
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string>('')

  /**
   * Handle form submit.
   *
   * @return {boolean}
   */
  const handleFormSubmit = () => {
    setError(null)

    if (email === '') {
      setError('Please enter your email.')
      return false
    }

    const isFormValidated = onValidated({
      EMAIL: email,
      SIGNUP: 'newsletter',
    })

    // On success return true
    if (isFormValidated) {
      //   clear fields
      setEmail('')
    }
    return email && email.indexOf('@') > -1 && isFormValidated
  }

  const handleInputKeyEvent = (event: any) => {
    setError(null)
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      handleFormSubmit()
    }
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

  return (
    <div>
      <>
        <Stack rowGap={2} bgcolor="AppWorkspace" p={1}>
          <TextField
            variant="standard"
            sx={{
              //   bgcolor: 'white',
              p: 1,
              mx: 1,
            }}
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            autoComplete="new-password"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <div className="hidden">
            <input type="hidden" name="tags" value="6752365" />
            <input type="hidden" name="SIGNUP" value="newsletter" />
          </div>

          <div className="mx-auto mb-2">
            <ButtonCustomV2
              variant="contained"
              color="secondary"
              sx={{
                color: 'white',
                fontWeight: 'bold',
              }}
              onClick={handleFormSubmit}
            >
              Subscribe
            </ButtonCustomV2>
          </div>
          <div className="text-center">
            <Typography variant="subtitle2" color="darkgray" pb={1}>
              By submitting this form, you are consenting to receive marketing
              emails from: Skylark Negril Beach Resort, Norman Manley Blvd,
              Jamaica. You can revoke your consent to receive emails at any time
              by using the SafeUnsubscribe® link, found at the bottom of every
              email.
            </Typography>
          </div>
        </Stack>
        <div className="newsletter-form-info">
          {status === 'sending' && (
            <div className="p-2 text-center font-bold">Sending...</div>
          )}
          {status === 'error' || error ? (
            <div
              className="newsletter-form-error"
              dangerouslySetInnerHTML={{
                __html: error || getMessage(message) || '',
              }}
            />
          ) : null}
          {status === 'success' && (
            <div
              dangerouslySetInnerHTML={{
                __html: `
           <div class="p-2 text-center font-bold">
           <p>Thanks for subscribing to our newsletter!</p>
           
           </div>
            `,
              }}
            />
          )}
          {/* {status === 'success' && status !== 'error' && !error && (
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <p>Thanks for Signing Up!</p>
            <p>In your email you will receive the 
            password to sign into the guide.</p>
            `,
              }}
            />
          )} */}
        </div>
      </>
    </div>
  )
}
