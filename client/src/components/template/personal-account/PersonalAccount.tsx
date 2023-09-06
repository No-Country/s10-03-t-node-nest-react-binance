import * as React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Typography, Container, Box, TextField, Alert, AlertTitle } from '@mui/material'
import PrimaryButton from '../../atom/buttons/PrimaryButton'
import { PERSONAL_STYLES } from './PersonalAccountStyles'
import useAuth from '../../../hooks/useAuth';

interface PersonalAccountProps { }

const PersonalAccount: React.FC<PersonalAccountProps> = () => {

  const auth = useAuth(); // Usar el hook useAuth para obtener el contexto

  if (!auth) {
    // Manejar el caso en que el contexto no esté definido
    return null; // O mostrar un mensaje apropiado, redirigir, etc.
  }

  const { registerAuth } = auth;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState({ text: '', msg: '' });
  const [welcomeMessage, setWelcomeMessage] = useState({ text: '' })
  const [showMessage, setShowMessage] = useState(false)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const navigate = useNavigate()

  const handleRegister = async () => {
    // TODO: hay que hacer bien lo de crear la cuenta personal
    // TODO: antes del navigate que salga algun cartel avisando el ok o no
    if (!password || password.length < 6) {
      setError(true);
      setMessage({
        text: 'El password es obligatorio y debe tener mas de 6 caracteres',
        msg: 'password invalido'
      })
      setTimeout(() => {
        setError(false)
      }, 3000);
      return
    }
    
    


    setWelcomeMessage({
      text: 'Bienvenido'
    });
    setShowMessage(true)
    setTimeout(() => {
      navigate('/market')
    }, 3000);

    await registerAuth(password, email)

  };

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
    setShowPassword(true)
  

  };



  return (
    <main style={ PERSONAL_STYLES.main }>
      <Container maxWidth="sm" sx={ PERSONAL_STYLES.container }>
        <Box sx={ PERSONAL_STYLES.boxContainer }>
          <Typography
            variant="h1"
            component="h1"
            mb={ 4 }
          >
            Crear una cuenta personal
          </Typography>
          <form style={ { maxWidth: '400px' } }>
            <TextField
              id="filled-basic"
              label="Correo / Teléfono"
              variant="filled"
              style={ { borderRadius: 0, width: '70%', marginBottom: '20px' } }
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />

            {
              error &&
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                { message.text } — <strong>{ message.msg }</strong>
              </Alert>
            }

            {
              showPassword && (
                <TextField
                  id="filled-basic"
                  label="password"
                  variant="filled"
                  style={ { borderRadius: 0, width: '70%', marginBottom: '20px' } }
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                />
              )
            }

            {
              showMessage &&
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                { welcomeMessage.text } — <strong>Registro con Exito! Seras redireccionado al Market</strong>
              </Alert>
            }

            <Typography
              variant="body1"
              my={ 2 }
              gutterBottom>
              Al crear una cuenta, acepto las
              <Box component="span" sx={ PERSONAL_STYLES.textBold }>
                condiciones de servicio
              </Box>
              y las
              <Box component="span" sx={ PERSONAL_STYLES.textBold }>
                política de privacidad
              </Box>
              de
              <Box component="span" sx={ PERSONAL_STYLES.textBold }>
                Binance
              </Box>
            </Typography>
            <PrimaryButton
              text={ !showPassword ? 'Siguiente' : 'Registrarse' }
              ariaLabelText='Continuar'
              variant='contained'
              color='primary'
              onClick={ (showPassword ? handleRegister : handleNextClick) }
            />

          </form>

        </Box>
      </Container>
    </main>
  )
}

export default PersonalAccount