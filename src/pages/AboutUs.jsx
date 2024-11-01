import { Box, Typography } from '@mui/material'
import React, {useRef} from 'react'
import '../styles/aboutUs.css'
import NavigationIcon from '@mui/icons-material/Navigation';
import logo from '../assets/sheikhoo-group-aboutUs.png'
import bg1 from '../assets/graphic-shape1.png'
import bg2 from '../assets/graphic-shape2.png'
import iconEye from '../assets/icon-eye.png'
import ambition1 from '../assets/ambition1.png';
import ambition2 from '../assets/ambition2.png';
import ambition3 from '../assets/ambition3.png';
import ambition4 from '../assets/ambition4.png';
import ambition5 from '../assets/ambition5.png';
import values1 from '../assets/values1.png'
import values2 from '../assets/values2.png'
import values3 from '../assets/values3.png'
import values4 from '../assets/values4.png'
import values5 from '../assets/values5.png'
import values6 from '../assets/values6.png'

const AboutUs = () => {
    const ref = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToSection = (index, direction) => {
    const targetIndex = index + direction;
    if (ref[targetIndex]) {
      ref[targetIndex].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <Box display={'flex'} flexDirection={'column'}>
        <section className='sectionOne-aboutUs' ref={ref[0]}>
            <Box className='aboutUs-text-container'>
                <Box className='text-aboutUs padding-2'>
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
                        <img src={logo} alt="Sheikhoo-Group-Logo-About" height={'100%'} width={'100%'}/>
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
        <section className='sectionOne-aboutUs sec-bg bg-sec1' ref={ref[1]}>
        <Box className='aboutUs-text-container'>
                <Box className='image-aboutUs' sx={{mt: '0 !important'}}>
                    <Box sx={{backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', minHeight: '274px', display: 'flex', flexDirection: 'column', padding: '2rem'}}>
                        <Typography variant='h2' className='sheikhoo-group-heading' sx={{color: '#56c8e7'}}>ABOUT</Typography>
                        <Typography variant='h2' className='sheikhoo-group-heading' sx={{color: '#cf152d'}}>SHEIKHOO<br/>GROUP</Typography>
                    </Box>
                </Box>
                <Box className='text-aboutUs' sx={{color: '#ffffff', justifyContent: 'flex-start !important', p: '2rem', boxSizing: 'border-box', mt: '3rem'}}>
                    <Typography variant='body1' maxWidth={'800px'} fontFamily={'noir_proregular'}>Sheikhoo Steel is the newest venture of the Group, conceived with the aim to create steel products that become a benchmark for quality in Pakistan.</Typography>
                    <Typography variant='body1' maxWidth={'800px'} fontFamily={'noir_proregular'}>Located at the heart of South Punjab, Anwar-abad Kot Addu, the Sheikhoo Steel production facility is equipped with one-of-its-kind technology for gaining an edge above all, for outstanding quality steel production in Pakistan. It is no surprise that Sheikhoo Steel has been enjoying the reputation of Pakistan’s best-selling steel billet for the past 3 years. Same is the reason why steel players of the industry purchase billets from Sheikhoo Steel, as they know we produce the best and the purest billets in Pakistan.</Typography>
                    <Typography variant='body1' maxWidth={'800px'} fontFamily={'noir_proregular'}>Sheikhoo Steel melting facility boasts two American Technology Induction Furnaces, with a capacity of 20 MTN each. Having the only European Continuous Casting Machine with 7/13 radius allows us to produce high quality billets like no other.</Typography>
                    <Typography variant='body1' maxWidth={'800px'} fontFamily={'noir_proregular'}>Sheikhoo Steel has set up a state-of-the-art, fully-vertical direct rolling mill to produce steel rebars from our high quality billets. Our mill has the capacity to produce 300,000 tons annually, which means we are prepared to cater to rising demands while giving clients the best possible steel products as per international standards.</Typography>
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
                fontSize: '2rem',
                zIndex: 1
              }}
              
            >
              <NavigationIcon sx={{transform: 'rotate(180deg)', height: '4rem', width: '4rem'}} onClick={() => scrollToSection(1, 1)}/>
              <NavigationIcon sx={{height: '4rem', width: '4rem'}} onClick={() => scrollToSection(1, -1)}/>
            </Box>
        </section>
        <section className='sectionOne-aboutUs sec-bg bg-sec2' ref={ref[2]}>
        <Box className='aboutUs-text-container'>
                <Box className='image-aboutUs' sx={{mt: '0 !important'}}>
                    <Box sx={{backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', minHeight: '274px', display: 'flex', flexDirection: 'column', padding: '2rem'}}>
                        <Typography variant='h2' className='sheikhoo-group-heading' sx={{color: '#cf152d'}}>OUR<br/>VISION</Typography>
                    </Box>
                </Box>
                <Box className='text-aboutUs' sx={{color: '#ffffff', alignItems: 'center', p: '4rem', boxSizing: 'border-box', m: '0 auto'}}>
                    <img src={iconEye} alt="" />
                    <Typography variant='h5' textAlign={'center'} fontFamily={'noir_proregular'}>We aspire to set a benchmark of excellence not by following, but by revolutionizing and leading the industry into a new era of success within the country and beyond borders.</Typography>
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
                fontSize: '2rem',
                zIndex: 1
              }}
              
            >
              <NavigationIcon sx={{transform: 'rotate(180deg)', height: '4rem', width: '4rem'}} onClick={() => scrollToSection(2, 1)}/>
              <NavigationIcon sx={{height: '4rem', width: '4rem'}} onClick={() => scrollToSection(2, -1)}/>
            </Box>
        </section>
        <section className='sectionOne-aboutUs sec-bg bg-sec2 left-overlay' ref={ref[3]}>
        <Box className='aboutUs-text-container' sx={{width: '100%', flexDirection: 'row-reverse'}}>
                <Box className='image-aboutUs' sx={{mt: '0 !important'}}>
                    <Box sx={{backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', minHeight: '274px', display: 'flex', flexDirection: 'column', padding: '2rem'}}>
                        <Typography variant='h2' className='sheikhoo-group-heading' sx={{color: '#cf152d'}}>OUR<br/>AMBITION</Typography>
                    </Box>
                </Box>
                <Box className='text-aboutUs' sx={{color: '#ffffff', alignItems: 'flex-start', p: '2rem', boxSizing: 'border-box', m: '0 auto', flexGrow: 1}}>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={ambition1} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>LEADING THROUGH INNOVATION</Typography>
                            <Typography fontFamily={'noir_proregular'}>An undying commitment to provide more than what we promise by investing in modern production facilities and equipment.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={ambition2} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>GREEN AT HEART</Typography>
                            <Typography fontFamily={'noir_proregular'}>To build an environment free from pollution. We strive to go green and reduce our carbon footprint as we produce our own energy, employ sustainable and environment-friendly procedures.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={ambition3} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>NURTURING TOMORROW’S LEADERS</Typography>
                            <Typography fontFamily={'noir_proregular'}>We work together, we learn together, we grow together. We believe in providing the best and a healthy work environment for our employees so that they enjoy what they do.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={ambition4} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>STRONGER TOGETHER</Typography>
                            <Typography fontFamily={'noir_proregular'}>Create a coherent ecosystem within the industry to keep the interests of all stakeholders at heart.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={ambition5} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>THINK NEXT</Typography>
                            <Typography fontFamily={'noir_proregular'}>Going beyond steel to fuel the company’s global ambition. we are prepared to cater to rising demands while giving clients the best possible steel products as per international standards.</Typography>
                        </Box>
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
                fontSize: '2rem',
                zIndex: 1
              }}
              
            >
              <NavigationIcon sx={{transform: 'rotate(180deg)', height: '4rem', width: '4rem'}} onClick={() => scrollToSection(3, 1)}/>
              <NavigationIcon sx={{height: '4rem', width: '4rem'}} onClick={() => scrollToSection(3, -1)}/>
            </Box>
        </section>
        <section className='sectionOne-aboutUs sec-bg bg-sec2' ref={ref[4]}>
        <Box className='aboutUs-text-container' sx={{width: '100%'}}>
                <Box className='image-aboutUs' sx={{mt: '0 !important'}}>
                    <Box sx={{backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', minHeight: '274px', display: 'flex', flexDirection: 'column', padding: '2rem'}}>
                        <Typography variant='h2' className='sheikhoo-group-heading' sx={{color: '#cf152d'}}>OUR<br/>VALUES</Typography>
                    </Box>
                </Box>
                <Box className='text-aboutUs' sx={{color: '#ffffff', alignItems: 'flex-start', p: '2rem', boxSizing: 'border-box', m: '0 auto', flexGrow: 1}}>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={values1} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>EXCELLENCE</Typography>
                            <Typography fontFamily={'noir_proregular'}>Setting a benchmark for remarkable work begins with creating a culture of excellence for people and processes. This is a value we not only put to work, but also identify, cultivate and celebrate, every day.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={values2} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>PIONEERING</Typography>
                            <Typography fontFamily={'noir_proregular'}>Having the courage to do the new, is what drives us forward. It is also which drives us ahead.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={values3} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>SUSTAINABILITY</Typography>
                            <Typography fontFamily={'noir_proregular'}>We think not for today, but for tomorrow. In doing so, we are driven to making the right decisions which minimise our carbon footprint, so we can shape a better future at every step</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={values4} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>INTEGRITY</Typography>
                            <Typography fontFamily={'noir_proregular'}>What we say, what we do, and what we feel must be aligned with every value that runs through our veins.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={values5} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>TRANSPARENCY</Typography>
                            <Typography fontFamily={'noir_proregular'}>We count on keeping our work crystal-clear and authentic. That is how trust is built.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '2rem'}}>
                        <img src={values6} alt="" style={{height: '73px', width: '64px'}}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <Typography sx={{color: '#40cbeb', fontFamily: 'noir_probold'}}>RESPECT</Typography>
                            <Typography fontFamily={'noir_proregular'}>We treat our stakeholders with dignity and kindness, respecting all backgrounds. This is how we create a more equal workplace which respects not only our social but also our physical environment.</Typography>
                        </Box>
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
                fontSize: '2rem',
                zIndex: 1
              }}
            >
              <NavigationIcon sx={{height: '4rem', width: '4rem'}} onClick={() => scrollToSection(4, -4)}/>
            </Box>
        </section>
    </Box>
  )
}

export default AboutUs