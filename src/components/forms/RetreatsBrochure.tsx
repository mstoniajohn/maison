import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { decode } from 'html-entities'
import emailjs from '@emailjs/browser'

const RetreatsBrochure = ({
  status,
  message,
  onValidated,
}: {
  status: any
  message: any

  onValidated: (data: { EMAIL: string; SIGNUP: 'retreats_bro' }) => boolean
}) => {
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string>('')

  /**
   * Handle form submit.
   *
   * @return {boolean}
   */

  const form: any = useRef()

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    setError(null)

    if (email === '') {
      setError('Please enter your email.')
      return false
    }

    const isFormValidated = onValidated({
      EMAIL: email,
      SIGNUP: 'retreats_bro',
    })
    const currentForm = form.current
    emailjs
      .sendForm(
        'service_edfny4b',
        'template_u3b6tov',
        currentForm,
        'Q3FdJozPBW62sJiSg'
      )
      .then(
        (result: any) => {
          console.log('sent email')
        },
        (error: any) => {
          console.log('faile')
        }
      )

    setEmail('')

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
      handleFormSubmit(event)
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
    <div className="mx-auto w-80 rounded-lg border px-3 py-2 lg:px-4">
      <Stack
        rowGap={2}
        alignItems="center"
        justifyContent="space-between"
        component="form"
        ref={form}
        onSubmit={handleFormSubmit}
      >
        <div className="">
          <div className="mt-2">
            {/* label request our retreats brochure */}
            <label
              htmlFor="email"
              className="text-md mb-2 block font-medium capitalize text-blue"
            >
              Request our retreats brochure
            </label>
            <input
              name="email"
              id="email"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-blue placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
              onChange={(event) => setEmail(event?.target?.value)}
              type="email"
              placeholder="Email"
              value={email}
              onKeyDown={handleInputKeyEvent}
            />
          </div>
        </div>

        <input type="hidden" name="SIGNUP" value="retreats_bro" />

        <Button
          type="submit"
          disableElevation
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: '25px',
            fontWeight: 'bold',
            border: '2px solid transparent',
            color: 'white',
            '&:hover': {
              color: 'white',
              backgroundColor: 'secondary',
            },
          }}
        >
          request brochure
        </Button>
        <div className="hiden">
          <input type="hidden" name="tags" value="11090429" />
        </div>
        <div className="newsletter-form-info">
          {status === 'sending' && (
            <div className="p-2 text-center text-xs font-bold">Sending...</div>
          )}
          {status === 'error' || error ? (
            <div
              className="newsletter-form-error text-xs"
              dangerouslySetInnerHTML={{
                __html: error || getMessage(message) || '',
              }}
            />
          ) : null}
          {status === 'success' && (
            <div
              dangerouslySetInnerHTML={{
                __html: `
           <div class="p-2 text-center font-bold text-xs text-blue">
           <p>Please check your email in a few minutes for our Retreats Brochure.</p></p>
           
           </div>
            `,
              }}
            />
          )}
        </div>
      </Stack>
    </div>
  )
}

export default function RetreatsSubmitter() {
  return (
    <MailchimpSubscribe
      url="https://skylarknegril.us19.list-manage.com/subscribe/post?u=05ef4612941924f8daf6aa200&amp;id=12975f07d3&amp;f_id=003eb1e4f0&amp;SIGNUP=retreats_bro"
      render={(props: any) => {
        const { subscribe, status, message } = props || {}
        return (
          <RetreatsBrochure
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )
      }}
    />
  )
}

{
  /* 
 
<div id="mc_embed_signup">
    <form action="https://skylarknegril.us19.list-manage.com/subscribe/post?u=05ef4612941924f8daf6aa200&amp;id=12975f07d3&amp;f_id=003eb1e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-SIGNUP">Signup form location </label><input type="text" name="SIGNUP" class=" text" id="mce-SIGNUP" value=""></div>
<div hidden=""><input type="hidden" name="tags" value="11090429"></div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_05ef4612941924f8daf6aa200_12975f07d3" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
    </div>
</form>


   */
}
