import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { TextField, Typography, Container, Box } from '@mui/material'
import PrimaryButton from '../../atom/buttons/PrimaryButton'
import GoogleIcon from '@mui/icons-material/Google'
import { LOGIN_STYLES } from '../../template/login-form/LoginFormStyles'
import { loginStyle } from './loginStyle'
import { AuthProvider } from '../../../context/AuthContext'
import { emailRegex } from '../../../utils/constants'

const LoginScreen: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPasswordInput, setShowPasswordInput] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState({ text: '', msg: '' })
  const [welcomeMessage, setWelcomeMessage] = useState({ text: '' })
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const isValidEmail = emailRegex.test(email)
  const {loginWithGoogle} = AuthProvider; // TODO no esta en el Provider

  const handleNextClick = () => {
    if ([email].includes('')) {
      setError(true)
      setMessage({
        text: 'El email es obligatorio',
        msg: 'Email'
      })
      setTimeout(() => {
        setError(false)
      }, 3000);
      return
    }
    if (!isValidEmail) {
      setError(true)
      setMessage({
        text: 'El email contiene caracteres invalidos',
        msg: 'Email invalido'
      })
      setTimeout(() => {
        setError(false)
      }, 3000);
      return
    }
    setShowPasswordInput(true)
  }

  const handleLoginClick = async () => {
    if (!password || password.length < 6) {
      setError(true);
      setMessage({
        text: 'El password es obligatorio y debe tener mas de 6 caracteres',
        msg: 'password invalido'
      })
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }
    setWelcomeMessage({
      text: 'Bienvenido'
    });
    setShowMessage(true)
    
    try {
      // TODO esta constante no se reutiliza en ningun lugar
      const response = await axios.post('https://binance-production.up.railway.app/api/v1/auth/login', {
        userOrEmail: 'n@prueba.com',
        password: 'string',
      });
      navigate('/market')
    } catch (error) {
      console.log('Error en el inicio de sesion', error);
      
    }

    
  }

  const handleGoogleLogin = async () => {
    await loginWithGoogle()
  }

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="left" gutterBottom sx={ loginStyle.typography }>
        Iniciar sesión
      </Typography>
      <TextField
        label="Correo electrónico / Número de teléfono"
        variant="outlined"
        fullWidth
        margin="normal"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
        style={ { marginBottom: '20px' } }
      />
      { showPasswordInput && (
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      ) }
      <PrimaryButton
        text={ !showPasswordInput ? 'Siguiente' : 'Iniciar sesión' }
        ariaLabelText="Continuar con google"
        onClick={ (showPasswordInput ? handleLoginClick : handleNextClick) }
        style={ {
          marginBottom: '20px',
        } } />
      <Box sx={ loginStyle.or }>
        <Typography sx={ { px: 2, color: 'black', py: 3 } }>
          ____________________or__________________
        </Typography>
      </Box>
      <PrimaryButton
        text="Continuar con google"
        ariaLabelText="Continuar con google"
        variant="contained"
        color="secondary"
        onClick={handleGoogleLogin}
        icon={ <GoogleIcon /> }
        style={ {
          marginBottom: '20px',
        } } />
      <Typography variant="h4" align="left" gutterBottom style={ loginStyle.typography }>
        <Link to="/register" style={ LOGIN_STYLES.link } aria-label="crear cuenta en Binance">
          Crear cuenta en Binance
        </Link>
      </Typography>
    </Container>
  )
}

export default LoginScreen
