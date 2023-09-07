import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import GraficoArea from '../components/molecule/walletComponent/GraficoArea'
import GraficoDona from '../components/molecule/walletComponent/GraficoDona'
import WalletTabs from '../components/molecule/walletComponent/WalletTabs'
import HeroWallet from '../components/molecule/walletComponent/HeroWallet'
import WalletsIcons from '../components/atom/walletIcon/WalletsIcons'


interface WalletsProps { }

const Wallets: React.FC<WalletsProps> = () => {
  const [showArea, setShowArea] = useState(true);

  return (

    <>
      <Container maxWidth="sm">
        <HeroWallet />
        <WalletsIcons />
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', my: '2rem' }}>
          <button onClick={() => setShowArea(true)} disabled={showArea}>Mostrar gráfico de área</button>
          <button onClick={() => setShowArea(false)} disabled={!showArea}>Mostrar gráfico dona</button>
        </Box>
        {showArea && <GraficoArea />}
        {!showArea && <GraficoDona />}

        <WalletTabs />
      </Container>
    </>
  )
}

export default Wallets
