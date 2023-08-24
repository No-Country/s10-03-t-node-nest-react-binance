
import React, { useState, useEffect } from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { MARKET_STYLES } from './MarketComponetSttyles'

interface CoinData {
    uuid: string
    name: string
    iconUrl: string
    symbol: string
    price: string
    change: string
}

const MarketComponet: React.FC = () => {
    const [coinsData, setCoinsData] = useState<CoinData[]>([])
    const URL = "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"

    const fetchData = async () => {
        const headersList = {
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            "X-RapidAPI-Key": "f39898f7ecmsh777502191ba939ap15cd54jsne595f27791a3",
            "Content-Type": "application/json"
        };

        try {
            const response = await fetch(URL, {
                method: "GET",
                headers: headersList
            });

            if (response.ok) {
                const data: { data: { coins: CoinData[] } } = await response.json()
                setCoinsData(data.data.coins)
            } else {
                throw new Error('La respuesta de la red no fue exitosa.')
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            { coinsData.map(item => {
                const itemChange: number = +(parseFloat(item.change).toFixed(2))
                const price = parseFloat(item.price).toFixed(2)

                return (
                    <Grid container key={ item.uuid } sx={ MARKET_STYLES.box }>
                        <Card sx={ MARKET_STYLES.card }>
                            <Grid item xs={ 7 } sm={ 6 } sx={ MARKET_STYLES.girdItem }>
                                <CardMedia
                                    sx={ { width: 25 } }
                                    component='img'
                                    image={ item.iconUrl }
                                    height={ 25 }
                                    alt="coin"
                                />
                                <CardContent component='div' sx={ MARKET_STYLES.cardContent }>
                                    <Typography variant="h4">
                                        { item.name }
                                    </Typography>
                                    <Typography color="initial">
                                        { item.symbol }
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={ 6 } sm={ 6 } sx={ MARKET_STYLES.boxPrice }>
                                <Typography variant="h4" >
                                    <Box component="span" sx={ { color: itemChange > 0 ? '#03A66D' : '#CF304A' } }>
                                        { itemChange > 0 && '+ ' }{ itemChange } %
                                    </Box>
                                </Typography>
                                <Typography variant="h4" >
                                    $ { price }
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