import { Box, Button, Container } from '@mui/material'
import React, { useState } from 'react'
import GraficoArea from '../components/molecule/wallet/GraficoArea'
import GraficoDona from '../components/molecule/wallet/GraficoDona'
import WalletTabs from '../components/molecule/wallet/WalletTabs'
import HeroWallet from '../components/molecule/wallet/HeroWallet'
import WalletsIcons from '../components/atom/walletIcon/WalletsIcons'

interface WalletsProps { }

const Wallets: React.FC<WalletsProps> = () => {
  const [showArea, setShowArea] = useState(true)

  return (
    <>
      <Container maxWidth="sm">
        <HeroWallet />
        <WalletsIcons />
        <Box
          sx={ { 
            display: 'flex', 
            justifyContent: 'space-evenly', 
            alignItems: 'center',
             my: '2rem',
             gap: '12px' 
            } }
        >
          <Button
            onClick={ () => setShowArea(true) }
            disabled={ showArea }
            aria-label="Mostrar grafico de area"
          >
            Mostrar gráfico de área
          </Button>
          <Button
            onClick={ () => setShowArea(false) }
            disabled={ !showArea }
            aria-label="Mostrar grafico de torta"
          >
            Mostrar gráfico torta
          </Button>
        </Box>
        { showArea && <GraficoArea /> }
        { !showArea && <GraficoDona /> }
        <WalletTabs />
      </Container>
    </>
  )
}

export default Wallets
