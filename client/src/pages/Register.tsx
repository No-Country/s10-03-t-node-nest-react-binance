import * as React from 'react';
import { Button, ImageList, Typography,Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/atom/buttons/PrimaryButton';
import { REGISTER_STYLE } from './RegisterStyle';

interface RegisterProps { }

const Register: React.FC<RegisterProps> = () => {

  return (
   
      <>
        <Container maxWidth="sm"
          sx={
           REGISTER_STYLE.container
         }
        >
          <Box sx={{
            width: '100%',
            display:'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '5px' 
            
            }}>
              <ImageList sx={{ width: 200, height: 250 }}>
                      <img
                          src={'../../public/binance-64.png'}
                          srcSet={''}
                          alt={''}
                          loading="lazy"
                          style={{ width: '200%', height: 'auto' }}
                      />
              </ImageList>
              <Typography variant="h6" component="h1" gutterBottom>
              Sing Up to get 100 USDT trading fee rebate
              </Typography>
              
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
              }} >
              <Link to={'/register/continue'}>
                {/* <Button sx={{
                  width: '100%',
                  background: '#FFC107',
                  color: 'black',
                  '&:hover': {
                    background: '#FFC107', 
                  },
                }} variant="contained">Sing up with Email or Phone</Button> */}
                <PrimaryButton
                    text='Sing up with Email or Phone'
                    ariaLabelText=''
                    variant='contained'
                    color='primary'
                    size='medium'
                />
              </Link>
              
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <hr style={{ flex: 1, borderTop: '1px solid black' }} />
                <Typography sx={{ px: 2, color: 'black' }}>____________________or__________________</Typography>
                <hr style={{ flex: 1, borderTop: '1px solid black' }} />
              </Box>
                
                <Link to={'/continue'}>
                  <Button sx={{
                    mt: '30px',
                    width: '100%',
                    background: 'white',
                    color: 'black',
                    '&:hover': {
                      background: '#FFC107', // Amarillo más oscuro en hover
                    },
                  }} variant="contained">Continue with google</Button>
                </Link>
                
                
                  <Link to={''}  style={{
                      margin: '25px',
                      marginLeft: '10px',
                      width: '100%',
                      background: 'white',
                      color: 'black',
                      textDecoration: 'none'
                    }}> Already have an account? <span style={{color: 'gold'}}>Log In</span></Link>
                  <Link to={''} style={{
                      margin: '25px',
                      marginLeft: '10px',
                      width: '100%',
                      background: 'white',
                      color: 'black',
                      textDecoration: 'none'
                    }}>Need an entity accoubt? <span style={{color: 'gold'}}>Sing Up</span></Link>
  
               
              </Box>
              
          </Box> 
      </Container>
      </>
    
  )
}

export default Register




