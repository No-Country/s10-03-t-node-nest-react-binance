import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { LOGIN_STYLES } from '../template/login-form/LoginFormStyles';
import PrimaryButton from '../atom/buttons/PrimaryButton';
import GoogleIcon from '@mui/icons-material/Google';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}



const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <h1>Ingresa</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '20px', marginTop: '56px' }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth 
        style={{marginBottom:'50px'}}>
          Next
        </Button>
      </form>
      <Box sx={LOGIN_STYLES.boxText}>
        <Typography sx={{ px: 2, color: 'black', py: 3 }}>
          ____________________or__________________
        </Typography>
      </Box>
      <PrimaryButton
        text="Continuar con google"
        ariaLabelText="Continuar con google"
        variant="contained"
        color="secondary"
        icon={<GoogleIcon />}
        onClick={() => navigate('/continue'))}
        style={{
          marginBottom: '40px',
        }}/>
    </Container>
  );
};

export default LoginForm;
