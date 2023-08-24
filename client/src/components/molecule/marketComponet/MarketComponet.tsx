
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

interface CoinData {
    uuid: string;
    name: string;
    iconUrl: string;
    symbol: string;
    price: string;
    sparkline: string & [string];

}

const MarketComponet: React.FC = () => {
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
        <div>
            {coinsData.map(item => (


                <Box key={item.uuid} sx={{ display: 'flex', bgcolor: '#3C3C3A' }}>

                    <Card sx={{ width: 365, margin: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', color: '' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                            <CardMedia
                                sx={{ width: 25 }}
                                component='img'
                                image={item.iconUrl}
                                height={25}
                                alt="coin"
                            />
                            <CardContent component='div' sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
                                <Typography variant="h4" component='span'>{item.name}</Typography>
                                <Typography variant="h3" component='span' color="initial">{item.symbol}</Typography>
                            </CardContent>

                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
                            <Typography variant="h4" component='span'> $ {item.sparkline.slice(0, 1)}</Typography>

                            <Typography variant="h4" component='span'> $ {item.price.substring(0, 5)}</Typography>

                        </Box>
                    </Card>

                </Box>
            ))
            }
        </div >

    );
}

export default MarketComponet;