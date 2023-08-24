import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import PrimaryButton from '../atom/buttons/PrimaryButton';
import GoogleIcon from '@mui/icons-material/Google';
import { LOGIN_STYLES } from '../template/login-form/LoginFormStyles';
import { loginStyle } from './loginStyle';

const LoginScreen: React.FC = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleNextClick = () => {
    setShowPasswordInput(true);
  };

  const handleLoginClick = () => {
    navigate("/market")
  };



  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="start" gutterBottom style={{marginTop:"55px", marginBottom:"20px"}}>
        Iniciar sesión
      </Typography>
      <TextField
        label="Correo electrónico / Número de teléfono"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      {showPasswordInput && (
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      <PrimaryButton
        text={!showPasswordInput ? 'Siguiente' : 'Iniciar sesión'}
        ariaLabelText="Continuar con google"
        onClick={(showPasswordInput ? handleLoginClick : handleNextClick)}
        style={{
          marginBottom: '20px',
        }}/>
      <Box sx={loginStyle.or}>
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
        style={{
          marginBottom: '20px',
        }}/>
      <Typography variant="h4" align="start" gutterBottom style={{marginTop:"55px", marginBottom:"20px"}}>
        <Link to="/register" style={LOGIN_STYLES.link}>Crear cuenta en Binance</Link>
      </Typography>
    </Container>
  );
};

export default LoginScreen;
