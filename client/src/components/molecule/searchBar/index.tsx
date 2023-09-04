import React from 'react'
import { InputBase, Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={ {
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        marginBottom: '30px',
      } }
    >
      <IconButton sx={ { p: '10px' } } aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={ { ml: 1, flex: 1 } }
        placeholder="Buscar..."
        inputProps={ { 'aria-label': 'search' } }
      />
    </Paper>
  )
}

export default SearchBar
