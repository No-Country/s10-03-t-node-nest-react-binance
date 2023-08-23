import React from 'react'
import { Box, Grid } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { HEADER_STYLES } from './HeaderStyles'
import NavBar from '../navbar/NavBar'

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Grid
        container
        maxWidth="lg"
        sx={ HEADER_STYLES.container }
      >
        <Grid
          item
          xs={ 6 }
          sm={ 3 }
          sx={ HEADER_STYLES.containerLogo }
        >
          <img width="40" height="40" src="/binance-64.png" alt="Binance cryptocurrency logo" />
          <Box component="span" sx={ HEADER_STYLES.logo }> Binance</Box>
        </Grid>
        <Grid
          item
          xs={ 4 }
          sm={ 8 }
          sx={ HEADER_STYLES.containerNavBar }
        >
          <Box sx={ HEADER_STYLES.navBar }>
            <NavBar />
          </Box>
        </Grid>
        <Grid
          item
          xs={ 2 }
          sm={ 1 }
          sx={ HEADER_STYLES.containerAvatar }
        >
          <AccountCircleIcon fontSize="large" />
        </Grid>
      </Grid>
    </header>
  )
}

export default Header