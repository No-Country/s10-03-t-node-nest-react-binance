import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BarChartIcon from '@mui/icons-material/BarChart'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { Grid } from '@mui/material'
import { Link } from '@mui/material'
import { NAVBAR_STYLES } from './NavBarStyles'

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const linkStyle = (path:string) => {
    console.log('location.pathname = ', location.pathname)
    console.log(path)
    return location.pathname === path ? NAVBAR_STYLES.linkIconActive : NAVBAR_STYLES.linkIconNotActive
  }

  return (
    <nav>
      <Grid container spacing={2} sx={ { maxWidth: '320px', margin: '0 auto' } }>
        <Grid item>
          <Link
            aria-label="ir a mercados"
            component="button"
            onClick={ () => navigate('/market') }
            sx={ linkStyle('/market')  }
          >
            <BarChartIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link
            aria-label="ir a feed"
            component="button"
            onClick={ () => navigate('/feed') }
            sx={  linkStyle('/feed') }
          >
            <RssFeedIcon />
          </Link>
        </Grid>
        <Grid item>
          <CompareArrowsIcon />
        </Grid>
        <Grid item>
          <Link
            aria-label="ir a servicios"
            component="button"
            onClick={ () => navigate('/services') }
            sx={  linkStyle('/services') }
          >
            <MiscellaneousServicesIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link
            aria-label="ir a cartera"
            component="button"
            onClick={ () => navigate('/wallets') }
            sx={  linkStyle('/wallets') }
          >
            <AccountBalanceWalletIcon />
          </Link>
        </Grid>
      </Grid>
    </nav>
  )
}

export default NavBar