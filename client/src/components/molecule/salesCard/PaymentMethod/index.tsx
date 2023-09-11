import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Container, Typography, TextField } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { loginStyle } from '../../Login/loginStyle';

const PaymentMethod = () => {

  const [method, setMethod] = useState('tarjeta'); // Valor predeterminado

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };


  return (
    <Container maxWidth="xs" sx={ { minHeight: '82vh' } }>
      <Typography
        variant='h2'
        align='center'
        gutterBottom
        sx={ loginStyle.typography }
        style={ { marginBottom: "50px" } }
      >
        Seleccionar metodo de cobro
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Método de Pago</FormLabel>
        <RadioGroup
          aria-label="method"
          name="method"
          value={ method }
          onChange={ handleMethodChange }
        >
          <FormControlLabel
            value="tarjeta"
            control={ <Radio /> }
            label="Mercado Pago"
          />

        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={ () => console.log(`Método seleccionado: ${ method }`) }
        aria-label="Confirmar Método de Pago"
      >
        Confirmar Método de Pago
      </Button>
    </Container>
  )
}

export default PaymentMethod