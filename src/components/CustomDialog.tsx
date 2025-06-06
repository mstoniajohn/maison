import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

export default function CustomDialog({
  open,
  handleClose,
  children,
}: {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',

            right: 0,
            color: 'primary.main',
            zIndex: 99,
          }}
        >
          <Close fontSize="large" />
        </IconButton>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
