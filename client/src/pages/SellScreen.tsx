import React, { useState } from 'react';
import { TextField, MenuItem, Box, Typography, Container } from '@mui/material';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Currency Converter
      </Typography>
      <Box display="flex" alignItems="center">
        <TextField
          label="Amount"
          type="number"
          variant="outlined"
          value={amount}
          onChange={handleAmountChange}
          InputProps={{
            endAdornment: (
              <TextField
                select
                value={currency}
                onChange={handleCurrencyChange}
                variant="outlined"
                size="small"
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                {/* Agrega más opciones de monedas según tus necesidades */}
              </TextField>
            ),
          }}
        />
      </Box>
      {/* Puedes mostrar el resultado de la conversión aquí si lo deseas */}
    </Container>
  );
};

export default CurrencyConverter;
