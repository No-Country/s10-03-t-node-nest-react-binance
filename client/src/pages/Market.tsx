// import React from 'react'
// import TabsMarket from '../components/molecule/tabs/TabsMarket'
// // import CardsComponents from '../components/molecule/cardscomponent/CardComponents'
// import { Box } from '@mui/material'
// import Slider from '../components/atom/swiper/Slider'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// interface MarketProps { }

// const Market: React.FC<MarketProps> = () => {
//   return (

//     <section>
//       <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
//         <div>
//           <h3>Balance total</h3>
//         </div>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-around',
//             alignItems: 'center',

//             padding: '2px',
//             minWidth: '280px',
//             background: 'linear-gradient(to bottom, #fef54b, #ffec67, #ffe580, #fff1ff, #ffffff);'
//           }}
//         >
//           <h2>$100.00</h2>
//           <span>
//             <VisibilityOffIcon />
//           </span>
//         </Box>

//       </Box>



//       <Slider />
//       <TabsMarket />
//     </section>
//   )
// }

// export default Market


import React, { useState } from 'react';
import TabsMarket from '../components/molecule/tabs/TabsMarket';
import { Box } from '@mui/material';
import Slider from '../components/atom/swiper/Slider';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface MarketProps { }

const Market: React.FC<MarketProps> = () => {
  const [isAmountVisible, setIsAmountVisible] = useState(true);

  const handleVisibilityToggle = () => {
    setIsAmountVisible((prevIsAmountVisible) => !prevIsAmountVisible);
  };

  return (
    <section className='section'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h3>Balance total</h3>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

            padding: '2px',
            minWidth: '280px',
            background:
              'linear-gradient(to bottom, #ffe580, #fff1ff, #ffffff);',
          }}
        >
          <h2>{isAmountVisible ? '$100.00' : '******'}</h2>
          <span onClick={handleVisibilityToggle}>
            {isAmountVisible ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon />
            )}
          </span>
        </Box>
      </Box>

      <Slider />
      <TabsMarket />
    </section>
  );
};

export default Market;
