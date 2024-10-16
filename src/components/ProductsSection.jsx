import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../styles/ProductsSection.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import '../styles/ProductsSlides.css';
import { Box, Typography } from '@mui/material';

import armour from '../assets/armour.png'
import commander from '../assets/commander.png'
import defender from '../assets/defender.png'
import red from '../assets/product-bg-red.jpg'
import blue from '../assets/product-bg-blue.jpg'
import purple from '../assets/product-bg-purple.jpg'



const ProductsSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box className='container-products'>
      <Box className='productSectionHeading'>PRODUCTS</Box>
      <Box>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={ thumbsSwiper ? {swiper: thumbsSwiper} : undefined }
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Box className='armour-slide' sx={{backgroundImage: `url(${red})`}}>
              <Box><img src={armour} alt="armour-rebar-sheikhoo" /></Box>
              <Box className='slide-text'>SHEIKHOO <br/> ARMOUR <br/> <Typography className='slide-text' sx={{fontSize: '2rem'}}>GRADE 60</Typography></Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className='armour-slide' sx={{backgroundImage: `url(${blue})`}}>
              <Box><img src={defender} alt="defender-rebar-sheikhoo" /></Box>
              <Box className='slide-text'>SHEIKHOO <br/> DEFENDER <br/> <Typography className='slide-text' sx={{fontSize: '2rem'}}>ASTM 706</Typography></Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className='armour-slide' sx={{backgroundImage: `url(${purple})`}}>
              <Box><img src={commander} alt="commander-rebar-sheikhoo" /></Box>
              <Box className='slide-text'>SHEIKHOO <br/> COMMANDER <br/> <Typography className='slide-text' sx={{fontSize: '2rem'}}>BS 4449</Typography></Box>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide style={{ position: 'relative' }}>
          <img src={red} alt="nature-thumb-1" />
          <Box className="overlay-text">
            <Typography className='overlay-text-style'>SHEIKHOO<br/>ARMOUR<br/><Typography>GRADE 60</Typography></Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}>
          <img src={blue} alt="nature-thumb-2" />
          <Box className="overlay-text">
            <Typography className='overlay-text-style'>SHEIKHOO<br/>DEFENDER<br/><Typography>ASTM 706</Typography></Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}>
          <img src={purple} alt="nature-thumb-3" />
          <Box className="overlay-text">
            <Typography className='overlay-text-style'>SHEIKHOO<br/>COMMANDER<br/><Typography>BS 4449</Typography></Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
      </Box>
    </Box>
  );
};

export default ProductsSection;
