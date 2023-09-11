import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Slider from '../../atom/swiper/Slider'
import { HERO_MARKET_STYLES } from './HeroMarketStyles'

const HeroMarket = () => {
  const [isAmountVisible, setIsAmountVisible] = useState(true)

  const handleVisibilityToggle = () => {
    setIsAmountVisible((prevIsAmountVisible) => !prevIsAmountVisible)
  }
  
  return (
    <>
      <Grid
        item
        xs={ 12 }
        sm={ 4 }
        md={ 3 }
        sx={ HERO_MARKET_STYLES.container }
      >
        <Grid
          container
          sx={ HERO_MARKET_STYLES.containerSaldo }
        >
          <Grid
            item
            xs={ 12 }
            sx={ HERO_MARKET_STYLES.saldoText }
          >
            <Typography
              component="h2"
              sx={ { fontSize: '24px', fontWeight: '700' } }
            >
              Saldo total
            </Typography>
            <Box
              component="span"
              onClick={ handleVisibilityToggle }
            >
              { isAmountVisible ? <VisibilityOffIcon /> : <VisibilityIcon /> }
            </Box>
          </Grid>
          <Grid item xs={ 12 }>
            <Typography
              component="h2"
              sx={ HERO_MARKET_STYLES.saldoAmount}
            >
              { isAmountVisible ? '$100.00' : '******' }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={ 12 } sm={ 8 } md={ 9 }>
        <Slider />
      </Grid>
    </>
  )
}
export default HeroMarket