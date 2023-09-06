import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Grid, IconButton, Menu, MenuItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { HEADER_STYLES } from './HeaderStyles'
import NavBar from '../navbar/NavBar'
import useAuth from './../../../hooks/useAuth'

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const { isLogueado, setIsLogueado } = useAuth()
  console.log(isLogueado)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  const handleLogOut = () => {
    setIsLogueado(false)
    navigate("/")
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
        <Grid item xs={ 4 } sm={ 7 } sx={ HEADER_STYLES.containerNavBar } >
          <Box sx={ HEADER_STYLES.navBar }>
            { isLogueado && <NavBar /> }
          </Box>
        </Grid>
        <Grid item xs={ 2 } sm={ 2 } sx={ HEADER_STYLES.containerAvatar } >
          { isLogueado &&
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
                sx={ { top: '40px' } }
              >
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