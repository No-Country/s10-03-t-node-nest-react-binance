import React from 'react';
import TextField from '@mui/material/TextField';

function MontoInput() {
  return (
    <TextField
      type="number"
      label="Monto"
      placeholder="Ingrese su monto aquí"
      variant="outlined"
      fullWidth
    />
  );
}

export default MontoInput;
