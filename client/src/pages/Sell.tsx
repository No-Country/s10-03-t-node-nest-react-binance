import React from 'react'
import { Container, Typography } from '@mui/material'
import SearchBar from '../components/molecule/searchBar'
import CoinsSellBuyTable from '../components/molecule/coins-table/CoinsSellBuyTable'
import { useLocation } from 'react-router-dom'

const Sell = () => {
  const location = useLocation()
  const urlPathName = location.pathname

  return (
    <Container maxWidth="sm" sx={{ minHeight: '82vh'}}>
      <Typography
        variant="h2"
        align="center"
        sx={ { marginTop: '55px', marginBottom: '20px' } }
      >
        Elegir activo a vender
      </Typography>
      <SearchBar />
      <Typography
        variant="h2"
        align="left"
        sx={ {
          color: 'red', marginBottom: '50px'
        } }
      >
        Tenencias en cartera
      </Typography>
      <CoinsSellBuyTable
        urlPathName={ urlPathName }
        btnText="Vender"
        coinsData={ []}
      />
    </Container>
  )
}

export default Sell
