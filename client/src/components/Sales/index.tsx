import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { salesStyle } from "./salesStyle";
import SearchBar from 
"../molecule/searchBar";
import CardsComponents from "../molecule/cardscomponent/CardComponents";
import TabsSales from "../molecule/tabs/TabsSales";



const Sales = () => {

    

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={salesStyle.typography}>
        Elegir activo a vender
      </Typography>
      <SearchBar/>
      <Typography variant="h4" align="left" sx={salesStyle.typography}>
        Tenencias en cartera
      </Typography>
      <TabsSales />

      
      
      

      
      
    </Container>
  );
};

export default Sales;
