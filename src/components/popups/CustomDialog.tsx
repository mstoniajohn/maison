import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Close } from '@mui/icons-material'
import { Box, IconButton, SxProps } from '@mui/material'

export default function CustomDialog({
  open,
  handleClose,
  children,
  mt = 2,
  bgColor = 'rgba(0,0,0,0.70)',
  fullScreen = false,
  dialogTitle,
  handleSave,
  showCancelBtn = true,
  zIndex = 9999,
  sx,
  color = 'text-black',
}: {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
  mt?: number
  bgColor?: string
  fullScreen?: boolean
  dialogTitle?: string
  handleSave?: () => void
  showCancelBtn?: boolean
  zIndex?: number
  sx?: SxProps
  color?: string
}) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          style: {
            backgroundColor: 'white',
            boxShadow: 'none',
          },
        }}
        sx={{
          zIndex: zIndex,
          '& .MuiBackdrop-root': {
            backgroundColor: bgColor,
          },
          ...sx,
        }}
        fullScreen={fullScreen}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 0,
            color: 'black',
            zIndex: 99,
            p: 0,
          }}
        >
          <Close fontSize="large" className={color} />
        </IconButton>
        {dialogTitle ? <DialogTitle>{dialogTitle}</DialogTitle> : null}
        <DialogContent
          sx={{
            width: '100%',
            height: '100%',
            padding: { xs: 1, md: 2 },
            mt: mt,
            mb: 0,
          }}
        >
          {children}
        </DialogContent>

        <DialogActions sx={{ p: 0 }}>
          {handleSave && (
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          )}
          {showCancelBtn && (
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  )
}
