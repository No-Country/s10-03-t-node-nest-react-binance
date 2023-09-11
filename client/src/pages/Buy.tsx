import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import SearchBar from '../components/molecule/searchBar'
import CoinsSellBuyTable from '../components/molecule/coins-table/CoinsSellBuyTable'
import { useLocation } from 'react-router-dom'
import { useApiContext } from '../context/FetchContext'
import useAuth from '../hooks/useAuth'


const Buy = () => {
  const { coinsData } = useApiContext()
  const auth = useAuth(); // Usar el hook useAuth para obtener el contexto

  const { login, loginAuth } = auth;
  console.log(loginAuth);
  
  const location = useLocation()
  const urlPathName = location.pathname

  return (
    <Container maxWidth="sm" sx={{ minHeight: '82vh'}}>
      <Typography
        variant="h2"
        align="center"
        sx={ { marginTop: '55px', marginBottom: '20px' } }
      >
        Elegir activo a comprar
      </Typography>
      <SearchBar />
      <Typography
        variant="h3"
        align="left"
        sx={ { color: 'red', marginBottom: '50px' } }
      >
        Tenencias en cartera
      </Typography>
      <CoinsSellBuyTable
        urlPathName={ urlPathName }
        btnText="Comprar"
        coinsData={ coinsData }
      />
    </Container>
  )
}

export default Buy