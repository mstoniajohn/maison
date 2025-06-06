import React, { useRef } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

function FaqFormInput() {
  const [userMessage, setUserMessage] = React.useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  const form: any = useRef()
  const router = useRouter()

  const handleChange = (e: any) => {
    e.preventDefault()
    setUserMessage({
      ...userMessage,
      [e.target.name]: e.target.value,
    })
  }
  const sendEmail = (e: any) => {
    e.preventDefault()

    const currentForm = form.current
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return
    // the compiler is smart enough to know that currentForm here is of type HTMLFormElement

    emailjs
      .sendForm(
        'service_r0qpin7',
        'template_jdw0d3u',
        currentForm,
        'Q3FdJozPBW62sJiSg'
      )
      .then(
        (result: any) => {
          toast('Your message has been sent successfully')
        },
        (error: any) => {
          toast('Oops Something went wrong')
        }
      )
    setUserMessage({
      from_name: '',
      from_email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <form className="mt-8 space-y-6" ref={form} onSubmit={sendEmail}>
        <div className="space-y-4 rounded-md">
          <TextField
            required
            id="filled-multiline-static"
            label="Name"
            name="from_name"
            autoComplete="password"
            fullWidth
            onChange={(e) => handleChange(e)}
            placeholder="Name"
            type="text"
            variant="standard"
            value={userMessage?.from_name}
          />

          <TextField
            id="filled-multiline-static"
            label="Email"
            required
            autoComplete="password"
            fullWidth
            name="from_email"
            onChange={handleChange}
            placeholder="Email"
            type="email"
            variant="standard"
            value={userMessage?.from_email}
          />

          <TextField
            id="filled-multiline-static"
            label="Subject"
            fullWidth
            name="subject"
            onChange={handleChange}
            placeholder="Subject"
            variant="standard"
            value={userMessage?.subject}
          />

          <TextField
            required
            id="filled-multiline-static"
            label="Message"
            multiline
            fullWidth
            name="message"
            onChange={handleChange}
            rows={4}
            placeholder="Your Message"
            variant="standard"
            value={userMessage?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FaqFormInput
