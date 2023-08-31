import * as React from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography  } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface BuyModalCoinsProps {
  handleClickOpen: () => void
  handleClose: () => void
  openModal: boolean
}
const BuyModalCoins:React.FC<BuyModalCoinsProps> = ({
  handleClickOpen,
  handleClose,
  openModal
}) => {

  return (
    <div>
      {/* <Button variant="outlined" onClick={ handleClickOpen }>
        Open dialog
      </Button> */}
      <Dialog
        onClose={ handleClose }
        aria-labelledby="customized-dialog-title"
        open={ openModal }
      >
        <DialogTitle sx={ { m: 0, p: 2 } } id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={ handleClose }
          sx={ {
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          } }
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={ handleClose }>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default BuyModalCoins