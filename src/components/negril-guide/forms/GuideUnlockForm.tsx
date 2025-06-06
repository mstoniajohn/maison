import ButtonCustomV2 from '@/components/features/ButtonCustomV2'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material'

import React from 'react'
import NegrilGuideForm from '@/components/forms/NegrilGuideForm'

interface GuideUnlockFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  password?: string
  showPassword?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClickShowPassword?: () => void
  handleMouseDownPassword?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function GuideUnlockForm({ onSubmit }: { onSubmit: (email: string) => void }) {
  return (
    <div className="relative ">
      <Box
        className="relative h-[1000px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${'https://res.cloudinary.com/dfwvu4gct/image/upload/v1674869823/skylark/RH_Slideshow_Desktop_1920x823_C_kxhbai.jpg'})`,
        }}
      >
        <Box
          component="form"
          className=" absolute left-1/2 top-[40%] mx-auto mt-4 w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 transform space-y-2 p-4"
        >
          <Stack bgcolor="white" pt={2}>
            <Stack px={2}>
              <Typography
                variant="h3"
                color="primary"
                sx={{ textTransform: 'uppercase' }}
                align="center"
              >
                Unlock The 2025 Skylarker's Guide to Negril
              </Typography>

              <Typography align="center">
                Brought to you by the original dilly-dalliers at Skylark Negril
                Beach Resort
              </Typography>
            </Stack>
            <Stack maxWidth={500} mx="auto" pt={2}>
              {/* mailchimp */}
              <MailchimpSubscribe
                url="https://skylarknegril.us19.list-manage.com/subscribe/post?u=05ef4612941924f8daf6aa200&amp;id=12975f07d3&amp;f_id=003eb1e4f0&amp;SIGNUP=guidepw"
                render={(props: any) => {
                  const { subscribe, status, message } = props || {}
                  return (
                    <NegrilGuideForm
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                      onSubmit={onSubmit}
                    />
                  )
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default GuideUnlockForm
