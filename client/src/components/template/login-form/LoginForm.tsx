import * as React from 'react'
import { Button, ImageList, Typography, Container, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { LOGIN_STYLES } from './LoginFormStyles'
import PrimaryButton from '../../atom/buttons/PrimaryButton'


const LoginForm = () => {
  return (
    <>
      <Container maxWidth="sm" sx={ LOGIN_STYLES.container }>
        <Box sx={ LOGIN_STYLES.box }>
          <ImageList sx={ { width: 200, height: 250 } }>
            <img
              src={ '../../public/binance-64.png' }
              srcSet={ '' }
              alt='logo de Binance'
              loading="lazy"
              style={ { width: '200%', height: 'auto' } }
            />
          </ImageList>
          <Typography variant="h6" component="h1" gutterBottom>
            Inscríbete para conseguir 100 USDT de descuento en la comisión de trading
          </Typography>
          <Box sx={ {
            display: 'flex',
            flexDirection: 'column',
          } } >
            <Link to={ '/register/continue' }>
              <PrimaryButton
                text='Sing up with Email or Phone'
                ariaLabelText=''
                variant='contained'
                color='primary'
                size='medium'
              />
            </Link>
            <Box sx={ { display: 'flex', alignItems: 'center', my: 2 } }>
              <hr style={ { flex: 1, borderTop: '1px solid black' } } />
              <Typography sx={ { px: 2, color: 'black' } }>
                ____________________or__________________
              </Typography>
              <hr style={ { flex: 1, borderTop: '1px solid black' } } />
            </Box>
            <Link to={ '/continue' }>
              <Button
                sx={ LOGIN_STYLES.btnGoogle }
                variant="contained">
                Continuar con google
              </Button>
            </Link>
            <Link
              to={ '' }
              style={ {
                margin: '25px',
                marginLeft: '10px',
                width: '100%',
                background: 'white',
                color: 'black',
                textDecoration: 'none'
              } }
            >
              ¿Ya tiene una cuenta? <span style={ { color: 'gold' } }>Iniciar sesión</span></Link>
            <Link
              to={ '' }
              style={ {
                margin: '25px',
                marginLeft: '10px',
                width: '100%',
                background: 'white',
                color: 'black',
                textDecoration: 'none'
              } }>
              ¿Necesita una cuenta? <span style={ { color: 'gold' } }>Registrarse</span>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default LoginForm