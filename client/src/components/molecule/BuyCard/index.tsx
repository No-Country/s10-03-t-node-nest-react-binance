import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { loginStyle } from '../Login/loginStyle';
import PrimaryButton from '../../atom/buttons/PrimaryButton';
import {Container, Typography} from "@mui/material"


const MontoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    navigate("/paymentmethod");
  };
  return (
    <Container maxWidth="xs">
      <Typography 
        variant='h4'
        align='left'
        gutterBottom
        sx={loginStyle.typography}
      >
        Vender BTC
      </Typography>
      <Typography style={{marginTop:"20px"}}>Quiero vender</Typography>
      <TextField
        type="number"
        variant="outlined"
        placeholder='Ingrese un importe'
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        style={{marginBottom:"20px", marginTop:"10px", marginRight:"15px",}}
      />
      
      <PrimaryButton text='confirmar' onClick={handleClick} style={{marginBottom:"40px"}}/>
    </Container>
  );
};

export default MontoInput;
