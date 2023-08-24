
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import styles from './card.module.css'


interface CoinData {
    uuid: string;
    name: string;
    iconUrl: string;
    symbol: string;
    price: string;
    sparkline: string & [string];

}

const CardsComponents: React.FC = () => {

    const [coinsData, setCoinsData] = useState<CoinData[]>([]);

    const fetchData = async () => {
        const headersList = {
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            "X-RapidAPI-Key": "f39898f7ecmsh777502191ba939ap15cd54jsne595f27791a3",
            "Content-Type": "application/json"
        };

        try {
            const response = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
                method: "GET",
                headers: headersList
            });

            if (response.ok) {
                const data: { data: { coins: CoinData[] } } = await response.json();

                console.log(data);
                setCoinsData(data.data.coins);
            } else {
                throw new Error('La respuesta de la red no fue exitosa.');
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className={`${styles.card}`}>

            {
                coinsData.map(item => (

                    <Card key={item.uuid} sx={{ minWidth: 350, margin: 2, display: 'flex', justifyContent: 'space-between', padding: '2px' }} >
                        <Box sx={{ width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: 2 }}>

                            <CardMedia
                                sx={{ width: 50 }}
                                component='img'
                                image={item.iconUrl}
                                height={50}
                                alt="coin"
                            />
                            <CardContent >
                                <Typography variant="h3" color="initial">{item.name}</Typography>
                                <Typography variant="h3" color="initial">{item.symbol}</Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: 2 }}>

                            <Typography variant="h4" color="initial">{item.price.substring(0, 6)}</Typography>
                            <CardActions sx={{ width: 100 }} >
                                <Button variant='contained' size='small'>Comprar</Button>
                            </CardActions>

                        </Box>

                    </Card>
                )
                )
            }
        </div>

    )
}

export default CardsComponents