import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from 'swiper/modules';
import "swiper/css";
import "./styleSlider.css";
import { useApiContext } from "../../../context/FetchContext";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import { CARDS_STYLES } from "../../molecule/cardscomponent/CardsComponentsStyles";


const SliderPagoInstantaneo: React.FC = () => {
    const { coinsData } = useApiContext();
    return (
        <>
            <Swiper
                rewind={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Mousewheel, Pagination]}
                className="mySwiper">


                <Box sx={CARDS_STYLES.div}>
                    {coinsData.slice(0, 4).map((coin) => (

                        <SwiperSlide key={coin.uuid}>
                            <Box>
                                <Card sx={CARDS_STYLES.card} >
                                    <Grid container sx={CARDS_STYLES.gridContainer}>
                                        <Grid item xs={6} sx={CARDS_STYLES.gridItem}>
                                            <CardMedia
                                                sx={{ width: 50 }}
                                                component='img'
                                                image={coin.iconUrl}
                                                height={50}
                                                alt={coin.name}
                                            />
                                            <CardContent >
                                                <Typography variant="h3" color="initial">
                                                    {coin.name}
                                                </Typography>
                                                <Typography variant="h3" color="initial">
                                                    {coin.symbol}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item xs={6} sx={CARDS_STYLES.gridItem}>
                                            <Typography variant="h4" color="initial">
                                                {coin.currentPrice.substring(0, 6)}
                                            </Typography>
                                            <CardActions sx={{ width: 100 }} >
                                                <Button variant='contained' size='small' aria-label="comprar">
                                                    Comprar
                                                </Button>
                                            </CardActions>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Box>
            </Swiper>
        </>
    );
}

export default SliderPagoInstantaneo
