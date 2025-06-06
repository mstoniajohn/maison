import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import PressForm from './PressForm'
import { Close } from '@mui/icons-material'
import { Button } from '../ui/button'

interface PressDialogProps {
  open: boolean
  onClose: () => void
  press?: any
}

export default function PressDialog({
  open,
  onClose,
  press,
}: PressDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <h2 className="font-sans text-xl font-semibold text-blue">
          {press ? `Editing ${press?.title}` : 'Add New Press Item'}
        </h2>
        <button
          className="absolute right-0 top-2 mr-4 text-gray-600"
          onClick={onClose}
        >
          <Close />
        </button>
      </DialogTitle>
      <DialogContent className="w-full">
        <PressForm press={press} onClose={onClose} />
      </DialogContent>
      <DialogActions>
        <Button
          size="sm"
          className="text-white rounded-full bg-red-700"
          onClick={onClose}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
