import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { loginStyle } from '../Login/loginStyle';
import PrimaryButton from '../../atom/buttons/PrimaryButton';
import {Container, Typography} from "@mui/material"
import { ApiProvider } from "../../../context/FetchContext";




const MontoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    navigate(`/buypaymentmethod?moneda=${inputValue}`);
  };
  return (
    <Container maxWidth="xs">
      <Typography 
        variant='h4'
        align='left'
        gutterBottom
        sx={loginStyle.typography}
      >
        Comprar BTC
      </Typography>
      <Typography style={{marginTop:"20px"}}>Quiero Comprar</Typography>
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
