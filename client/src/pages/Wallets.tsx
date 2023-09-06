import { Container } from '@mui/material'
import React, { useState } from 'react'
import GraficoArea from '../components/molecule/walletComponent/GraficoArea'
import GraficoDona from '../components/molecule/walletComponent/GraficoDona'
import WalletConponent from '../components/molecule/walletComponent/WalletConponent'


interface WalletsProps { }

const Wallets: React.FC<WalletsProps> = () => {
  const [showArea, setShowArea] = useState(true);

  return (

    <>
      <Container maxWidth="sm">
        <button onClick={() => setShowArea(true)} disabled={showArea}>Mostrar gráfico de área</button>
        <button onClick={() => setShowArea(false)} disabled={!showArea}>Mostrar gráfico dona</button>
        {showArea && <GraficoArea />}
        {!showArea && <GraficoDona />}

        <WalletConponent />
      </Container>
    </>
  )
}

export default Wallets
