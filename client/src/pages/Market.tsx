import React from 'react'
import TabsMarket from '../components/molecule/tabs/TabsMarket'
import CardsComponents from '../components/molecule/cardscomponent/CardComponents'

interface MarketProps { }

const Market: React.FC<MarketProps> = () => {
  return (
    <div>
      <CardsComponents />
      <TabsMarket />
    </div>
  )
}

export default Market