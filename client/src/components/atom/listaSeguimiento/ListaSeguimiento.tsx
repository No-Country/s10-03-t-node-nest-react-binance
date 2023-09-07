import React from 'react'
import { useApiContext } from '../../../context/FetchContext'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListaSeguimiento: React.FC = () => {
    const { coinsData } = useApiContext()
    const navigate = useNavigate()

    return (
        <>
            <Grid
                container
                maxWidth="lg"
                sx={ {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                } }
            >
                { coinsData.slice(0, 6).map((coin) => (
                    <Grid
                        item
                        xs={ 12 }
                        sm={ 6 }
                        key={ coin.uuid }
                    >
                        <Box sx={ {
                            minWidth: 120,
                            maxWidth: 260,
                            margin: '4px auto',
                            border: '1px solid lightgray',
                            borderRadius: 2,
                            boxShadow: 'none',
                        } }>
                            <Grid
                                container
                                sx={ {
                                    minHeight: '140px'
                                } }
                            >
                                <Grid
                                    item
                                    xs={ 6 }
                                    sx={ {
                                        padding: '8px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexWrap: 'wrap',
                                        alignContent: 'flex-start',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        gap: '8px'
                                    } }
                                >
                                    <Box
                                        sx={ { width: 30 } }
                                        component='img'
                                        src={ coin.iconUrl }
                                        height={ 30 }
                                        alt={ coin.name }
                                    />
                                    <Box >
                                        <Typography
                                            variant="h4"
                                            color="initial"
                                        >
                                            { coin.name }
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="initial"
                                        >
                                            { coin.symbol }
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={ 6 }
                                    sx={ {
                                        padding: '8px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexWrap: 'wrap',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    } }
                                >
                                    <Typography
                                        variant="h5"
                                        color="initial"
                                    >
                                        { coin.currentPrice.substring(0, 6) }
                                    </Typography>
                                    <Button
                                        variant='contained'
                                        size='small'
                                        aria-label="comprar"
                                        onClick={ () => navigate(`/buy?coin=${ coin.uuid }`) }
                                    >
                                        Comprar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid >
                )) }
            </Grid >
        </>
    )
}

export default ListaSeguimiento
