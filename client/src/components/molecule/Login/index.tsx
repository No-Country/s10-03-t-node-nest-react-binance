import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { TextField, Typography, Container, Box, Alert, AlertTitle, } from "@mui/material"
import PrimaryButton from "../../atom/buttons/PrimaryButton"
import GoogleIcon from "@mui/icons-material/Google"
import { LOGIN_STYLES } from "../../template/login-form/LoginFormStyles"
import { loginStyle } from "./loginStyle"
import { emailRegex } from "../../../utils/constants"
import useAuth from "../../../hooks/useAuth"
import useGoogleAuth from "../../../hooks/useGoogleAuth"

const LoginScreen: React.FC = () => {
  const auth = useAuth() // Usar el hook useAuth para obtener el contexto
  const googleAuth = useGoogleAuth()
  const { signInWithGoogle } = googleAuth
  const { login } = auth
  const navigate = useNavigate()
  const [userOrEmail, setUserOrEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPasswordInput, setShowPasswordInput] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState({ text: "", msg: "" })
  const [welcomeMessage, setWelcomeMessage] = useState({ text: "" })
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const isValidEmail = emailRegex.test(userOrEmail)

  const handleNextClick = () => {
    if ([userOrEmail].includes("")) {
      setError(true);
      setMessage({
        text: "El email es obligatorio",
        msg: "Email",
      });
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    if (!isValidEmail) {
      setError(true);
      setMessage({
        text: "El email contiene caracteres invalidos",
        msg: "Email invalido",
      });
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setShowPasswordInput(true);
  };

  const handleLoginClick = async () => {
    if (!password || password.length < 6) {
      setError(true);
      setMessage({
        text: "El password es obligatorio y debe tener más de 6 caracteres",
        msg: "password invalido",
      });
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    try {
      const { data } = await axios.post(
        "https://binance-production.up.railway.app/api/v1/auth/login",
        {
          userOrEmail,
          password,
        }
      );

      // Guarda el token en el localStorage
      login(data.data)
      navigate("/market")
    } catch (error) {
      console.log("Error en el inicio de sesión", error)
    }
  };


  const handleGoogleLogin = async () => {
    await signInWithGoogle();

    navigate("/market");
  };

  return (
    <Container maxWidth="xs" sx={{ minHeight: '82vh' }}>
      <Typography
        variant="h2"
        align="left"
        gutterBottom
        sx={loginStyle.typography}
      >
        Iniciar sesión
      </Typography>
      <TextField
        label="Correo electrónico / Número de teléfono"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userOrEmail}
        onChange={(e) => setUserOrEmail(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {message.text} — <strong>{message.msg}</strong>
        </Alert>
      )}
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
      {showMessage && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {welcomeMessage.text} —{" "}
          <strong>Registro con Exito! Seras redireccionado al Market</strong>
        </Alert>
      )}
      <PrimaryButton
        text={!showPasswordInput ? "Siguiente" : "Iniciar sesión"}
        ariaLabelText="Continuar con google"
        onClick={showPasswordInput ? handleLoginClick : handleNextClick}
        style={{
          marginBottom: "20px",
        }}
      />
      <Box sx={loginStyle.or}>
        <Typography sx={{ px: 2, color: "black", py: 3 }}>
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
          marginBottom: "20px",
        }}
        onClick={handleGoogleLogin}
      />

      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={loginStyle.typography}
      >
        <Link
          to="/"
          style={LOGIN_STYLES.link}
          aria-label="crear cuenta en Binance"
        >
          Crear cuenta en Binance
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginScreen;
