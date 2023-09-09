import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import SearchBar from '../components/molecule/searchBar'
import TabsSales from '../components/molecule/tabs/TabsSales'
import { useApiContext } from '../context/FetchContext'

const Buy = () => {

  return (
    <Container maxWidth="xs">
      <Typography
        variant="h4"
        align="center"
        sx={ {
          marginTop: '55px',
          marginBottom: '20px'
        } }
      >
        Elegir activo a comprar
      </Typography>
      <SearchBar />
      <Typography
        variant="h4"
        align="left"
        sx={ {
          color: 'red',
          marginBottom: '50px'
        } }
      >
        Tenencias en cartera
      </Typography>
      <TabsSales />
    </Container>  
  )
}

export default Buy