
import React, { useState, useEffect } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { CARDS_STYLES } from './CardsComponentsStyles'

interface CoinData {
    uuid: string
    name: string
    iconUrl: string
    symbol: string
    price: string
    sparkline: string & [string]

}

const CardsComponents: React.FC = () => {
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
            })

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
        <Box component="div" sx={ CARDS_STYLES.div } >
            {
                coinsData.map(item => (
                    <Card key={ item.uuid } sx={ CARDS_STYLES.card } >
                        <Grid container sx={ CARDS_STYLES.gridContainer }>
                            <Grid item xs={ 6 }>
                                <CardMedia
                                    sx={ { width: 50 } }
                                    component='img'
                                    image={ item.iconUrl }
                                    height={ 50 }
                                    alt="coin"
                                />
                                <CardContent >
                                    <Typography variant="h3" color="initial">
                                        { item.name }
                                    </Typography>
                                    <Typography variant="h3" color="initial">
                                        { item.symbol }
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Typography variant="h4" color="initial">
                                    { item.price.substring(0, 6) }
                                </Typography>
                                <CardActions sx={ { width: 100 } } >
                                    <Button variant='contained' size='small' aria-label="comprar">
                                        Comprar
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                ))
            }
        </Box>

    )
}

export default CardsComponents