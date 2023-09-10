import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Container, Typography, TextField } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { loginStyle } from '../../Login/loginStyle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const BuyPaymentMethod = () => {

    const location = useLocation()
    const monto = new URLSearchParams(location.search).get('moneda')
    console.log(monto);
    
    

    const navigate = useNavigate()
    const [method, setMethod] = useState('tarjeta'); // Valor predeterminado

    const handleMethodChange = (event) => {
        setMethod(event.target.value);
    };
    
    const handleClick = () =>{
      navigate('/agregar-tarjeta')
    }
    
    return (
        <Container maxWidth="xs">
            <Typography
                variant='h2'
                align='center'
                gutterBottom
                sx={loginStyle.typography}
                style={{marginBottom:"20px"}}
            >
                Seleccionar metodo de cobro
            </Typography>
            <Typography
              variant='h1'
              textAlign="center"
              marginBottom="15px"
            >${monto}</Typography>
            
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
                
              </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleClick} style={{marginBottom:"30px", marginTop:"30px"}}>
              Confirmar Método de Pago
            </Button>
        </Container>
      );
      
}

export default BuyPaymentMethod