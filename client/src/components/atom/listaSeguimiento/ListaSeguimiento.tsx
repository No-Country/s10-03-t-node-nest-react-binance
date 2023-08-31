import React from 'react'
import { useApiContext } from "../../../context/FetchContext"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const ListaSeguimiento: React.FC = () => {
    const { coinsData } = useApiContext()
    return (
        <>
            <Grid container justifyContent="center">
                {coinsData.slice(0, 6).map((coin) => (
                    <Grid item xs={6} key={coin.uuid}>
                        <Box sx={{
                            minWidth: 120,
                            maxWidth: 780,
                            margin: '0 auto'
                        }}>
                            <Card sx={{
                                border: '1px solid lightgray',
                                borderRadius: 2,
                                boxShadow: 'none',
                                padding: 1,
                            }}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <CardMedia
                                            sx={{ width: 30 }}
                                            component='img'
                                            image={coin.iconUrl}
                                            height={30}
                                            alt={coin.name}
                                        />
                                        <CardContent >
                                            <Typography variant="h5" color="initial">
                                                {coin.name}
                                            </Typography>
                                            <Typography variant="h5" color="initial">
                                                {coin.symbol}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h5" color="initial">
                                            {coin.currentPrice.substring(0, 6)}
                                        </Typography>
                                        <CardActions sx={{ width: 90 }} >
                                            <Button variant='contained' size='small' aria-label="comprar">
                                                Comprar
                                            </Button>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ListaSeguimiento
