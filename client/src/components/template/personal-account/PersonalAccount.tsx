import * as React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Container, Box, TextField } from '@mui/material'
import PrimaryButton from '../../atom/buttons/PrimaryButton'

interface PersonalAccountProps {

}

const PersonalAccount: React.FC<PersonalAccountProps> = () => {
  return (
    <>
      <Container maxWidth="sm" sx={ { display: 'flex', alignContent: 'center', width: '100%' } }>
        <Box sx={ {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '5px', // Cambiar de 5px a 0 para un recuadro rectangular
          my: 3, // Espacio vertical entre elementos
        } }>
          <Typography variant="h1" component="h1" gutterBottom>
            Create Personal Account
          </Typography>

          <TextField id="filled-basic" label="Email/Phone Number" variant="filled" style={ { borderRadius: 0, width: '70%', marginBottom: '20px' } } />

          <Typography variant="body1" style={ { fontSize: '10px' } } component="h1" gutterBottom>
            By creating an Account, I Agree to Binance's
            <Typography variant="body1" style={ { fontSize: '10px', fontWeight: 'bold', display: 'inline' } }>
              Terms of Service
            </Typography>
            <Typography variant="body1" style={ { fontSize: '10px', fontWeight: 'normal', display: 'inline' } }> and </Typography>
            <Typography variant="body1" style={ { fontSize: '10px', fontWeight: 'bold', display: 'inline', marginBottom: '20px' } }>
              Privacy Policy
            </Typography>
          </Typography>

          <Link style={ { marginBottom: '20px', marginTop: '35px', width: '80%' } } to={ '/continue' }>
            <PrimaryButton
              text='Next'
              ariaLabelText=''
              variant='contained'
              color='primary'
              size='medium'
            />
          </Link>

          <Link to={ '' } style={ {
            margin: '25px',
            marginLeft: '10px',
            width: '100%',
            background: 'white',
            color: 'black',
            textDecoration: 'none',
            marginBottom: '250px'
          } }> Not looking for personal account? <span style={ { color: 'gold' } }>Sing up for an entity account</span></Link>
        </Box>
      </Container>
    </>
  )
}

export default PersonalAccount