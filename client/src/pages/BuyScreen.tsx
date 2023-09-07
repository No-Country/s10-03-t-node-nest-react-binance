import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { loginStyle } from '../components/molecule/Login/loginStyle';


function MontoInput() {
  return (
    <Container maxWidth="xs">
        <Typography
            variant='h4'
            align='left'
            gutterBottom
            sx={loginStyle.typography}
        >
            Quiero Pagar
        </Typography>
        <MontoInput />

       
        
    </Container>
  );
}

export default MontoInput;
