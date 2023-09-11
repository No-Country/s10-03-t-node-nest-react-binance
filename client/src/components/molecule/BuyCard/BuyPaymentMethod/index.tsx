import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { loginStyle } from "../../Login/loginStyle";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BuyPaymentMethod = () => {
  const location = useLocation();
  const moneda = new URLSearchParams(location.search).get("moneda");
  const navigate = useNavigate();
  const [method, setMethod] = useState("tarjeta"); // Valor predeterminado

  const handleMethodChange = (event) => setMethod(event.target.value);

  const handleClick = () => navigate("/agregar-tarjeta");

  return (
    <Container maxWidth="xs" sx={{ minHeight: "82vh" }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={loginStyle.typography}
        style={{ marginBottom: "50px" }}
      >
        Seleccionar metodo de cobro
      </Typography>
      <Typography variant="h1" align="center" marginBottom="20px">
        ${moneda}
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Método de Pago</FormLabel>
        <RadioGroup
          aria-label="method"
          name="method"
          value={method}
          onChange={handleMethodChange}
        >
          <FormControlLabel
            value="tarjeta"
            control={<Radio />}
            label="Tarjeta de credito"
          />

          <FormControlLabel
            value="tarjeta"
            control={<Radio />}
            label="Mercado Pago"
          />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Confirmar Método de Pago
      </Button>
    </Container>
  );
};

export default BuyPaymentMethod;
