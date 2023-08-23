import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Grid, IconButton, Menu, MenuItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { HEADER_STYLES } from './HeaderStyles'
import NavBar from '../navbar/NavBar'

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  // TODO: para despues manejar globalmente si esta logueado o no
  // por ahora lo dejo harcodeado a true
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  const handleLogOut = () => {
    setAuth(false)
    navigate("/market")
    handleClose()
  }

  const handleProfile = () => {
    navigate("/profile")
    handleClose()
  }

  return (
    <header>
      <Grid container maxWidth="lg" sx={ HEADER_STYLES.container } >
        <Grid item xs={ 6 } sm={ 3 } sx={ HEADER_STYLES.containerLogo } >
          <Link to="/market" aria-label="ir a mercados" style={ HEADER_STYLES.linkLogo } >
            <img width="40" height="40" src="/binance-64.png" alt="Binance cryptocurrency logo" />
            <Box component="span" sx={ HEADER_STYLES.logo }> Binance</Box>
          </Link>
        </Grid>
        <Grid item xs={ 4 } sm={ 8 } sx={ HEADER_STYLES.containerNavBar } >
          <Box sx={ HEADER_STYLES.navBar }>
            <NavBar />
          </Box>
        </Grid>
        <Grid item xs={ 2 } sm={ 1 } sx={ HEADER_STYLES.containerAvatar } >
          { auth &&
            <>
              <IconButton
                size="large"
                aria-label="perfil de usuario"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={ handleMenu }
                color="inherit"
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={ anchorEl }
                anchorOrigin={ {
                  vertical: 'top',
                  horizontal: 'right',
                } }
                keepMounted
                transformOrigin={ {
                  vertical: 'top',
                  horizontal: 'right',
                } }
                open={ Boolean(anchorEl) }
                onClose={ handleClose }
              >
                <MenuItem onClick={ handleProfile }>
                  <AccountCircle sx={ { marginRight: '12px' } } /> Mi perfil
                </MenuItem>
                <MenuItem onClick={ handleLogOut }>
                  <ArrowBackIcon sx={ { marginRight: '12px' } } /> Salir
                </MenuItem>
              </Menu>
            </>
          }
        </Grid>
      </Grid>
    </header>
  )
}

export default Header