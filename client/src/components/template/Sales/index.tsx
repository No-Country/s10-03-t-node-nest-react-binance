import React from "react"
import { Container, Typography } from "@mui/material"
import { salesStyle } from "./salesStyle"
import SearchBar from
  "../../molecule/searchBar"
import TabsSales from "../../molecule/tabs/TabsSales"

const Sales = () => {

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={ salesStyle.typography }>
        Elegir activo a vender
      </Typography>
      <SearchBar />
      <Typography variant="h4" align="left" sx={ salesStyle.typography }>
        Tenencias en cartera
      </Typography>
      <TabsSales />
    </Container>
  )
}

export default Sales
