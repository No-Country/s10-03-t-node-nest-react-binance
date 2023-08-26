import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { MARKET_STYLES } from './MarketComponetSttyles'
import { useApiContext } from '../../../context/FetchContext';

const MarketComponet: React.FC = () => {

    const { coinsData } = useApiContext();

    return (
        <div>
            {coinsData.map(item => {
                const itemChange: number = +(parseFloat(item.change).toFixed(2))
                const price = parseFloat(item.price).toFixed(2)

                return (
                    <Grid container key={item.uuid} sx={MARKET_STYLES.box}>
                        <Card sx={MARKET_STYLES.card}>
                            <Grid item xs={7} sm={6} sx={MARKET_STYLES.girdItem}>
                                <CardMedia
                                    sx={{ width: 25 }}
                                    component='img'
                                    image={item.iconUrl}
                                    height={25}
                                    alt="coin"
                                />
                                <CardContent component='div' sx={MARKET_STYLES.cardContent}>
                                    <Typography variant="h4">
                                        {item.name}
                                    </Typography>
                                    <Typography color="initial">
                                        {item.symbol}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={6} sm={6} sx={MARKET_STYLES.boxPrice}>
                                <Typography variant="h4" >
                                    <Box component="span" sx={{ color: itemChange > 0 ? '#03A66D' : '#CF304A' }}>
                                        {itemChange > 0 && '+ '}{itemChange} %
                                    </Box>
                                </Typography>
                                <Typography variant="h4" >
                                    $ {price}
                                </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                )
            })
            }
        </div >
    )
}

export default MarketComponet