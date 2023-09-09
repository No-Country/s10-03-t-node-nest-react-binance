import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Container, Typography, TextField } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { loginStyle } from '../../Login/loginStyle';
import { useNavigate } from 'react-router-dom';
import {MontoInput} from '../../../molecule/BuyCard/index'

const BuyPaymentMethod = () => {
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
                style={{marginBottom:"50px"}}
            >
                Seleccionar metodo de cobro
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
              
            </RadioGroup>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Confirmar Método de Pago
          </Button>
        </Container>
      );
      
}

export default BuyPaymentMethod