import React from 'react'
import { Grid, Typography } from '@mui/material'
import { FOOTER_STYLES } from './FooterStyles'
import NavBar from '../navbar/NavBar'
import useAuth from '../../../hooks/useAuth'

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  const { isLogueado } = useAuth()

  return (
    <footer>
      <Grid container maxWidth="lg" sx={ FOOTER_STYLES.container } >
        <Grid item xs={ 12 } sx={ FOOTER_STYLES.gridYear } >
          <Typography>
            Binance &copy; { new Date().getFullYear() }
          </Typography>
        </Grid>
        <Grid item xs={ 12 } sx={ FOOTER_STYLES.gridNavBar } >
          { isLogueado && <NavBar /> }
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer