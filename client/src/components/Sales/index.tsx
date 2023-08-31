import React from "react";
import { Container, Typography } from "@mui/material";
import { salesStyle } from "./salesStyle";
import SearchBar from 
"../molecule/searchBar";
import CardsComponents from "../molecule/cardscomponent/CardComponents";


const Sales = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={salesStyle.typography}>
        Elegi la crypto
      </Typography>
      <SearchBar/>
      
      

      
      
    </Container>
  );
};

export default Sales;
