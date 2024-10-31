import { Box, Typography } from '@mui/material'
import React, {useRef} from 'react'
import '../styles/aboutUs.css'
import NavigationIcon from '@mui/icons-material/Navigation';
import logo from '../assets/sheikhoo-group-aboutUs.png'

const AboutUs = () => {
    const ref = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToSection = (index, direction) => {
    const targetIndex = index + direction;
    if (ref[targetIndex]) {
      ref[targetIndex].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <Box>
        <section className='sectionOne-aboutUs' ref={ref[0]}>
            <Box className='aboutUs-text-container'>
                <Box className='text-aboutUs'>
                    <Typography variant='body1' fontFamily={'noir_proregular'}>In 1947 Pakistan, The Baksh Group of Companies was established by four visionary brothers, S.M. Maulabaksh (S.K), S.M. Iqbal, S.M Anwar and S. Maqbool Ahmed, to build and establish an industrial base which will not only help the development of a new country but also strengthen the people of Pakistan. The group set out to build an industrial empire in Pakistan, forming a group of companies in different fields.</Typography>
                    <Typography variant='body1' fontFamily={'noir_proregular'}>United Cotton and Wool was the family’s first partnership company which dominated the cotton exports from Pakistan and soon became the most prestigious cotton traders known all over the world.</Typography>
                    <Typography variant='body1' fontFamily={'noir_proregular'}>The brothers embarked on a shipping transportation venture called the United Oriental Steamship Co. which had the largest shipping fleet in Pakistan in 1959. Soon after, the family also established a ship building and repairing yards by the name of Carstairs and Cummings Ltd., which not only trained the Merchant Naval Officers and Engineers but also made them recognized throughout the world for their expertise and professionalism. The Baksh Group also began to develop the best ship chartering, ship breaking and barge manufacturing putting the name of Pakistan on the top of the industry in the world.</Typography>
                    <Typography variant='body1' fontFamily={'noir_proregular'}>In 1960, the Baksh group expanded in roots and became the second largest Jute Mills owners in Pakistan. Not only that, the group also set foot and pioneered the textile industry with three mills in the city of Gharo.</Typography>
                    <Typography variant='body1' fontFamily={'noir_proregular'}>In 1970, the Baksh group also established a countrywide renowned paint factory in Pakistan, United Paints (Pak) Ltd.</Typography>
                    <Typography variant='body1' fontFamily={'noir_proregular'}>The Baksh group has most recently completed a state-of-the-art sugar mills operations in Pakistan, SHEIKHOO SUGAR MILLS, LTD. With over three decades of success as Sheikhoo Sugar, the group now ventures into the Steel industry as SHEIKHOO STEEL. For the past two years, SHEIKHOO STEEL has already been supplying the country’s leading Steel manufacturing companies with premium quality source material (billets). SHEIKHOO STEEL aims to exceed all benchmarks of quality standards in the production process.</Typography>
                    <Typography variant='body1' fontFamily={'noir_proregular'}>The Baksh group of companies have developed a credible and professional reputation in the world focusing on to strengthen and secure the required foreign investments in Pakistan. The objective is to help accelerate the modernization and expansion of the industrial and infrastructure base in Pakistan. The Baksh group of companies is proud of its history as well as enthusiastic and excited about its future and Pakistan</Typography>
                </Box>
                <Box className='image-aboutUs'>
                    <Box>
                        <Typography variant='h2' className='sheikhoo-group-heading' sx={{color: '#cf152d'}}>SHEIKHOO<br/>GROUP</Typography>
                        <Typography variant='h2' className='sheikhoo-group-heading' sx={{color: '#56c8e7'}}>HISTORY</Typography>
                    </Box>
                    <Box>
                        <img src={logo} alt="" />
                    </Box>
                </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '1rem',
                color: 'red',
                fontSize: '2rem'
              }}
              onClick={() => scrollToSection(0, 1)}
            >
              <NavigationIcon sx={{transform: 'rotate(180deg)', height: '4rem', width: '4rem'}}/>
            </Box>
        </section>
        <section className='sectionOne-aboutUs sec1-bg' ref={ref[1]}>
            <Box></Box>
        </section>
        <section ref={ref[2]}></section>
        <section ref={ref[3]}></section>
    </Box>
  )
}

export default AboutUs