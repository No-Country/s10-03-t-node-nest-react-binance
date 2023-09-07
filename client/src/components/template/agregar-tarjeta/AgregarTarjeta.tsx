import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  TextField,
  Alert,
  AlertTitle,
  InputLabel,
} from "@mui/material";
import PrimaryButton from "../../atom/buttons/PrimaryButton";

import useAuth from "../../../hooks/useAuth";
import { emailRegex } from "../../../utils/constants";
import { PERSONAL_STYLES } from "../personal-account/PersonalAccountStyles";

const AgregarTarjeta = () => {
  const auth = useAuth(); // Usar el hook useAuth para obtener el contexto
  const { registerAuth } = auth;

  const [numero, setNumero] = useState<number>();
  const [titular, setTitular] = useState<string>('');
  const [fechaVencimiento, setFechaVencimiento] = useState({ mes: 0, year: 0});
  
  const [cvv, setCvv] = useState<number>(0);
  const [direccion, setDireccion] = useState<string>('');
  const [codigoPostal, setCodigoPostal] = useState<number>(0)
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState({ text: "", msg: "" });
  const [welcomeMessage, setWelcomeMessage] = useState({ text: "" });
  const [showMessage, setShowMessage] = useState<boolean>(false);
  
  const navigate = useNavigate();
  

  const handleNextClick = () => {
    if (!numero) {
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
    
    
  };

  // const fechaValida = (e) => {
  //   let inputValido = e.target.value;
  //   let [mes, year] = inputValido.split('/');
  //   console.log(mes, year);
    
  //   if (mes.length === 2)  {
  //     document.getElementById('mes-year').focus()
  //   }
  //   if (year.length === 2) {
  //   }
  //   if (mes.length === 2 && year.length === 2) {
  //     setFechaVencimiento({ mes, year });
  //   }
  // }
  
 
  if (!auth) {
    // Manejar el caso en que el contexto no esté definido
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        No se puede registrar
      </Alert>
    );
  }

  return (
    <main style={PERSONAL_STYLES.main}>
      <Container maxWidth="sm" sx={PERSONAL_STYLES.container}>
        <Box sx={PERSONAL_STYLES.boxContainer}>
          <Typography variant="h1" component="h1" mb={4}>
            Datos de la tarjeta
          </Typography>
          
          <form style={{ maxWidth: "400px" }}>
          <InputLabel htmlFor="filled-basic" sx={PERSONAL_STYLES.textBold} style={{textAlign: 'left', fontSize: '18px' }} >Numero de la tarjeta</InputLabel>
            <TextField
              type="number"
              id="filled-basic"
              label="Ingrese numero de la tarjeta"
              variant="filled"
              style={{ width: "100%", marginBottom: "20px" }}
              value={numero}
              onChange={(e) => setNumero(parseInt(e.target.value))}
            />
          
          <InputLabel htmlFor="filled-basic" sx={PERSONAL_STYLES.textBold} style={{textAlign: 'left', fontSize: '18px' }} >Titular de la tarjeta</InputLabel>
            <TextField
              type="text"
              id="filled-basic"
              label="Ingrese al titular de la tarjeta"
              variant="filled"
              style={{ width: "100%", marginBottom: "20px" }}
              value={titular}
              onChange={(e) => setTitular(e.target.value)}
            />
          
          <InputLabel htmlFor="filled-basic" sx={PERSONAL_STYLES.textBold} style={{textAlign: 'left', fontSize: '18px' }} >Fecha de vencimiento</InputLabel>
            <TextField
              type="text"
              id="mes-year"
              label="MM/AA"
              variant="filled"
              style={{ width: "100%", marginBottom: "20px" }}
              value={fechaVencimiento.year}
              // onChange={fechaValida}
            />
            
          <InputLabel htmlFor="filled-basic" sx={PERSONAL_STYLES.textBold} style={{textAlign: 'left', fontSize: '18px' }} >CVV</InputLabel>
            <TextField
              type="number"
              id="filled-basic"
              label="CVV"
              variant="filled"
              style={{ width: "100%", marginBottom: "20px" }}
              value={cvv}
              onChange={(e) => setCvv(parseInt(e.target.value))}
            />
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {message.text} — <strong>{message.msg}</strong>
              </Alert>
            )}
            
            {showMessage && (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                {welcomeMessage.text} —{" "}
                <strong>
                  Registro con Exito! Seras redireccionado al Login
                </strong>
              </Alert>
            )}
            {/* <Typography variant="body1" my={2} gutterBottom>
              Al crear una cuenta, acepto las
              <Box component="span" sx={PERSONAL_STYLES.textBold}>
                condiciones de servicio
              </Box>
              y las
              <Box component="span" sx={PERSONAL_STYLES.textBold}>
                política de privacidad
              </Box>
              de
              <Box component="span" sx={PERSONAL_STYLES.textBold}>
                Binance
              </Box>
            </Typography> */}
            <PrimaryButton
              text={ "Siguiente"}
              ariaLabelText="Continuar"
              variant="contained"
              color="primary"
              onClick={ handleNextClick}
            />
          </form>
        </Box>
      </Container>
    </main>
  );
}

export default AgregarTarjeta