import { useAppDispatch, useAppSelector } from '@/app/store'
import useFetchPressItems from '@/components/api/getPressItems'
import PressDialog from '@/components/forms/PressDialog'
import PressForm from '@/components/forms/PressForm'
import CustomSpinner from '@/components/layout/CustomSpinner'
import Layout from '@/components/layout/Layout'

import PressItem from '@/components/press/PressItem'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog'

import { getDjangoPress } from '@/features/press/pressSlice'
import { IPress } from '@/hooks/usePressForm'

import { Box, Link, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

function Press() {
  const dispatch = useAppDispatch()

  const { pressItems, isLoading } = useFetchPressItems()
  const { currentUser, user, token, message } = useAppSelector(
    (state) => state.auth
  )

  const [open, setOpen] = useState(false)
  const [selectedPress, setSelectedPress] = useState<any>(null)
  const handleClose = () => {
    setOpen(false)
    setSelectedPress(null)
  }

  React.useEffect(() => {
    dispatch(getDjangoPress())
  }, [dispatch])
  console.log(selectedPress)

  return (
    <Layout title="Press Media">
      <div className="container mx-auto mt-10 flex flex-col items-center justify-center gap-10">
        <Box className=" text-center">
          <Typography variant="h1" color="primary">
            AWARDS & PRESS
          </Typography>
          <Typography>
            For press and media inquiries, please contact:{' '}
            <Link color="secondary" href="mailto:pr@skylarknegril.com">
              pr@skylarknegril.com
            </Link>
          </Typography>
        </Box>
        {isLoading ? (
          <CustomSpinner />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {pressItems?.map((press: IPress) => (
              <PressItem
                setSelectedPress={setSelectedPress}
                press={press}
                showEdit={currentUser?.is_admin}
                onOpen={setOpen}
              />
            ))}
          </div>
        )}
      </div>
      <PressDialog onClose={handleClose} press={selectedPress} open={open} />
      {/* <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="overflow-y-scroll sm:max-w-[425px]">
          <PressForm press={selectedPress} onClose={handleClose} />
          <DialogFooter>
            <Button variant="destructive" type="button" onClick={handleClose}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </Layout>
  )
}

export default Press
