import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Container, Box, TextField } from '@mui/material'
import PrimaryButton from '../../atom/buttons/PrimaryButton'
import { PERSONAL_STYLES } from './PersonalAccountStyles'

interface PersonalAccountProps { }

const PersonalAccount: React.FC<PersonalAccountProps> = () => {
  const navigate = useNavigate()
  const handleContinue = () => {
    // TODO: hay que hacer bien lo de crear la cuenta personal
    // TODO: antes del navigate que salga algun cartel avisando el ok o no
    navigate('/market')
  }

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
              style={ { borderRadius: 0, width: '70%', marginBottom: '20px' } } />
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
              text='Continuar'
              ariaLabelText='Continuar'
              variant='contained'
              color='primary'
              onClick={ handleContinue }
            />
          </form>
          <Typography my={ 2 }>
            Si no quieres una cuenta personal,
            <Link
              to={ '/register/continue' }
              style={ PERSONAL_STYLES.link }
              aria-label='inscribirse en cuenta entidad'
            >
              <Box component="span">
                inscríbete en una cuenta de entidad
              </Box>
            </Link>
          </Typography>
        </Box>
      </Container>
    </main>
  )
}

export default PersonalAccount