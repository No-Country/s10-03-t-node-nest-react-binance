import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Grid, Link, } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import ClearIcon from '@mui/icons-material/Clear'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { NAVBAR_STYLES } from './NavBarStyles'
import BuyDepositModal from './BuyDepositModal'

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
  const [openBuySellModal, setOpenBuySellModal] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const linkStyle = (path: string) => {
    return location.pathname === path ?
      NAVBAR_STYLES.linkIconActive
      : NAVBAR_STYLES.linkIconNotActive
  }

  const handleClickOpen = () => setOpenBuySellModal(!openBuySellModal)
  const handleCloseBuySellModal = () => setOpenBuySellModal(!openBuySellModal)

  return (
    <nav>
      <Grid
        container
        spacing={ 2 }
        sx={ NAVBAR_STYLES.container }
      >
        <Grid item>
          { !openBuySellModal &&
            <Link
              aria-label="ir a mercados"
              component="button"
              onClick={ () => navigate('/market') }
              sx={ linkStyle('/market') }
            >
              <BarChartIcon fontSize="large" />
            </Link>
          }
        </Grid>
        <Grid item>
          { !openBuySellModal &&
            <Link
              aria-label="ir a feed"
              component="button"
              onClick={ () => navigate('/feed') }
              sx={ linkStyle('/feed') }
            >
              <RssFeedIcon fontSize="large" />
            </Link>
          }
        </Grid>
        <Grid item>
          <Link
            component="button"
            aria-label="comprar o vender"
            onClick={ handleClickOpen }
          >
            { !openBuySellModal ?
              <CompareArrowsIcon fontSize="large" sx={ NAVBAR_STYLES.link } />
              :
              <ClearIcon fontSize="large" sx={ NAVBAR_STYLES.link } />
            }
            <BuyDepositModal
              openBuyDepositModal={ openBuySellModal }
              handleCloseBuyDepositModal={ handleCloseBuySellModal }
            />
          </Link>
        </Grid>
        <Grid item>
          { !openBuySellModal &&
            <Link
              aria-label="ir a servicios"
              component="button"
              onClick={ () => navigate('/services') }
              sx={ linkStyle('/services') }
            >
              <MiscellaneousServicesIcon fontSize="large" />
            </Link>
          }
        </Grid>
        <Grid item>
          { !openBuySellModal &&
            <Link
              aria-label="ir a cartera"
              component="button"
              onClick={ () => navigate('/wallets') }
              sx={ linkStyle('/wallets') }
            >
              <AccountBalanceWalletIcon fontSize="large" />
            </Link>
          }
        </Grid>
      </Grid>
    </nav>
  )
}

export default NavBar