import React from 'react'
import SliderCupones from './SliderCupones'
import { Typography } from '@mui/material'

const Slider: React.FC = () => {
    return (
        <div className='cupones'>
            <Typography
                component="h2"
                sx={ {
                    fontSize: '22px',
                    fontWeight: '600',
                    textAlign: 'center',
                    margin: '12px auto'
                } }
            >
                Cupones
            </Typography>
            <SliderCupones />
        </div>
    )
}

export default Slider
