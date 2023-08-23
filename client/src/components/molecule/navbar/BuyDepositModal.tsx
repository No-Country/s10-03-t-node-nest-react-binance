import React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  Grid,
  Slide,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { TransitionProps } from '@mui/material/transitions'
import { BUY_SELL_STYLES } from './BuySellModalStyles'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ ref } { ...props } />;
})

interface BuyDepositModalProps {
  openBuyDepositModal: boolean
  handleCloseBuyDepositModal: () => void
}

const BuyDepositModal: React.FC<BuyDepositModalProps> = ({
  openBuyDepositModal,
  handleCloseBuyDepositModal
}) => {
  const handleBuy = () => console.log('comprar')
  const handleDeposit = () => console.log('depositar')

  return (
    <Dialog
      open={ openBuyDepositModal }
      TransitionComponent={ Transition }
      keepMounted
      onClose={ handleCloseBuyDepositModal }
      aria-describedby="comprar o vender"
    >
      <Box component="div" sx={ { heigth: '50px' } }>
        <IconButton aria-label="close" onClick={ handleCloseBuyDepositModal } sx={ BUY_SELL_STYLES.xIcon } >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogActions sx={ BUY_SELL_STYLES.dialogActions }>
        <Grid container sx={ BUY_SELL_STYLES.actionsContainer }>
          <Grid item xs={ 2 }>
            <Button aria-label="comprar" onClick={ handleBuy } sx={ BUY_SELL_STYLES.actionsBtn } >
              <AddIcon />
            </Button>
          </Grid>
          <Grid item xs={ 10 }>
            <DialogTitle id="compra-title" sx={ BUY_SELL_STYLES.title }>
              Compra
            </DialogTitle>
            <DialogContent sx={ BUY_SELL_STYLES.content }>
              <DialogContentText id="compra-description" >
                Compra criptomonedas con USD
              </DialogContentText>
            </DialogContent>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={ 2 }>
            <Button aria-label="depositar" onClick={ handleDeposit } sx={ BUY_SELL_STYLES.actionsBtn } >
              <ArrowDownwardIcon />
            </Button>
          </Grid>
          <Grid item xs={ 10 }>
            <DialogTitle id="depositar-title" sx={ BUY_SELL_STYLES.title }>
              Depositar
            </DialogTitle>
            <DialogContent sx={ BUY_SELL_STYLES.content }>
              <DialogContentText id="depositar-description">
                Depositar con moneda flat y criptomonedas
              </DialogContentText>
            </DialogContent>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default BuyDepositModal