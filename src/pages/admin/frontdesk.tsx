import React, { useState } from 'react'
import AdminLayout from '.'
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CustomDialog from '../../components/layout/CustomDialog'
import { Delete } from '@mui/icons-material'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

interface Person {
  name: string
  email: string
}

export default function Frontdesk() {
  const [openEmailForm, setOpenEmailForm] = useState(false)
  const [people, setPeople] = useState<Person[]>([{ name: '', email: '' }])

  const handleAddPerson = () => {
    setPeople([...people, { name: '', email: '' }])
  }
  const handleRemovePerson = (index: number) => {
    const newPeople = [...people]
    newPeople.splice(index, 1)
    setPeople(newPeople)
  }
  const handleChange = (index: number, field: keyof Person, value: string) => {
    const newPeople = [...people]
    newPeople[index][field] = value
    setPeople(newPeople)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    for (const person of people) {
      console.log('Submitting:', person)
      sendEmailToPeople(person.email, person.name)
    }
    setOpenEmailForm(false)
    toast.success('Emails Sent')
  }

  return (
    <AdminLayout>
      {/* Send Welcome emails to a list of emails */}
      <Stack
        width={'100%'}
        p={2}
        justifyContent={'center'}
        alignItems={'center'}
        rowGap={2}
      >
        <Typography variant="h2" component={'h1'} color={'primary'}>
          Send Welcome Emails
        </Typography>

        <Button
          variant="contained"
          sx={{
            color: 'white',
            fontWeight: 600,
          }}
          onClick={() => {
            setOpenEmailForm(true)
          }}
        >
          Open Email Form
        </Button>
      </Stack>
      <CustomDialog
        open={openEmailForm}
        handleClose={() => {
          setOpenEmailForm(false)
        }}
      >
        <Stack
          p={2}
          justifyContent={'center'}
          alignItems={'center'}
          rowGap={2}
          component={'form'}
          onSubmit={handleSubmit}
        >
          <Typography variant="h2" component={'h1'} color={'primary'}>
            Send Welcome Emails
          </Typography>
          {people.map((person, index) => (
            <Box
              key={index}
              sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
            >
              <TextField
                label="Name"
                variant="filled"
                value={person.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                sx={{ mr: 1 }}
                inputProps={{
                  style: {
                    outline: 'none',
                    boxShadow: 'none',
                    WebkitBoxShadow: 'none',
                    MozBoxShadow: 'none',
                  },
                }}
              />
              <TextField
                label="Email"
                variant="filled"
                value={person.email}
                onChange={(e) => handleChange(index, 'email', e.target.value)}
                sx={{ mr: 1 }}
                inputProps={{
                  style: {
                    outline: 'none',
                    boxShadow: 'none',
                    WebkitBoxShadow: 'none',
                    MozBoxShadow: 'none',
                  },
                }}
              />
              <IconButton
                onClick={() => handleRemovePerson(index)}
                color="error"
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button
            sx={{
              color: 'white',
              fontWeight: 600,
            }}
            onClick={handleAddPerson}
            variant="contained"
            color="primary"
          >
            Add Another Person
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ ml: 1, color: 'white', fontWeight: 600 }}
          >
            Send Emails
          </Button>
        </Stack>
      </CustomDialog>
    </AdminLayout>
  )
}

export function sendEmailToPeople(email: string, name: string) {
  emailjs
    .send(
      'service_r0qpin7',
      'template_rlhyux9',
      {
        email: email,
        to_name: name,
      },
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
}
