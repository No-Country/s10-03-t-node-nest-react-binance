import React from 'react'
import SliderPagoInstantaneo from './SliderPagoInstantaneo'
import SliderCupones from './SliderCupones'

const Slider: React.FC = () => {
    return (
        <>
            <div className='cupones'>
                <h2>Cupones</h2>
                <SliderCupones />
            </div>
            <div className='pagos'>
                <h2>Pagos Instantaneos</h2>
                <SliderPagoInstantaneo />
            </div>
        </>
    )
}

export default Slider
