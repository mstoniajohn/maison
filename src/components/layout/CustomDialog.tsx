import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Close } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

export default function CustomDialog({
  open,
  handleClose,
  children,
  mt = 2,
}: {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
  mt?: number
}) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={
          {
            // style: {
            //   backgroundColor: 'transparent',
            //   boxShadow: 'none',
            // },
          }
        }
        sx={{
          zIndex: 98,
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',

            right: 0,
            color: 'white',
            zIndex: 99,
          }}
        >
          <Close fontSize="large" />
        </IconButton>
        <DialogContent
          sx={{
            width: '100%',
            height: '100%',
            padding: { xs: 1, md: 2 },
            mt: mt,
          }}
        >
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
