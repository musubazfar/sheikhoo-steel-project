import { Box, Grid2, Typography } from '@mui/material';
import React, { useRef } from 'react';
import '../styles/Melting.css';
import rollingSection1 from '../assets/rolling-sec-1.png';
import rollingSection2 from '../assets/rolling-sec-2.png';
import rollingSection3 from '../assets/rolling-sec-3.png';
import rollingSection4 from '../assets/rolling-sec-4.png';
import rollingSection5 from '../assets/rolling-sec-5.png';
import NavigationIcon from '@mui/icons-material/Navigation';
import {motion} from 'framer-motion'

const Rolling = () => {
  const ref = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToSection = (index, direction) => {
    const targetIndex = index + direction;
    if (ref[targetIndex]) {
      ref[targetIndex].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const textAnimations = {
    initial: { opacity: 0, scale: 0.8, x: -100 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99], // Smooth cubic-bezier ease for entry
        delay: 0.3 // Small delay for text animation to appear after page load
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: -50,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  };
  
  const ImageAnimations = {
    initial: { opacity: 0, scale: 0.8, x: 150 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: [0, 5, -5, 0], // Slight rotational shake effect on entry
      transition: {
        duration: 1.4,
        ease: 'easeOut',
        type: 'spring', // Spring effect for smooth movement
        damping: 12,    // Slower bounce for smoothness
        stiffness: 150, // Stiffness control for spring effect
        delay: 0.2      // Offset delay to sync with text animation
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: 150,
      transition: {
        duration: 1.2,
        ease: 'easeInOut'
      }
    }
  };
  

  return (
      <Box 
        sx={{
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
          height: '100vh',
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar on WebKit browsers
          scrollbarWidth: 'none', // Hide scrollbar on Firefox
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' /* Linear-out, ease-in */
        }}
      >
      <section className='melting-section-1 rolling-bg-1' ref={ref[0]}>
        <Box className='container-melting'>
        <Grid2 container spacing={2} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6} component={motion.div} initial="initial"
              whileInView="animate"
              exit="exit"
              variants={textAnimations}
              >
        <Box>
        <Typography className='pageHeadingMelting' sx={{top: '-150px'}}>ROLLING SECTION</Typography>
        </Box>
              <Typography variant='h2' className='MeltingHeading'>AUTOMATED FOR CONSISTENCY AND OPTIMIZATION</Typography>
              <Typography variant='body1' className='detailsMelting'>Our state-of-the-art Induction Furnaces are built with higher turbulence settings to avoid any infiltration of non-metallic impurities in molten steel. These turbulence settings separate the impurities and slag, which are later removed from the pure metallic melt, ensuring only the purest mix is left for making steel billets.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={rollingSection1} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
            </Grid2>
          </Grid2>
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
        </Box>
      </section>
      <section className='melting-section-1 rolling-bg-2' ref={ref[1]}>
        <Box className='container-melting'>
          <Grid2 container spacing={2} flexDirection={'row-reverse'} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6}
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={textAnimations}>
              <Typography variant='h2' className='MeltingHeading'>DIRECT ROLLING PROCESS</Typography>
              <Typography variant='body1' className='detailsMelting'>Our rebars are produced by a direct rolling process. This cutting edge technology allows us to pass our high quality billets directly, straight ahead to our rolling mill to ensure exceptional purity, consistency and strength in our rebars, while saving energy cost.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={rollingSection2} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
            </Grid2>
          </Grid2>
          <Box display={'flex'}>
          <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '1rem',
                color: 'red',
              }}
              onClick={() => scrollToSection(1, 1)}
            >
              <NavigationIcon sx={{transform: 'rotate(180deg)', height: '4rem', width: '4rem'}}/>
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
              onClick={() => scrollToSection(1, -1)}
            >
              <NavigationIcon sx={{height: '4rem', width: '4rem'}}/>
            </Box>
            </Box>
        </Box>
      </section>
      <section className='melting-section-1 rolling-bg-3' ref={ref[2]}>
        <Box className='container-melting'>
        <Grid2 container spacing={2} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6}
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={textAnimations}>
              <Typography variant='h2' className='MeltingHeading'>PERFECT CURVATURE & EVEN WEIGHT DISTRIBUTION</Typography>
              <Typography variant='body1' className='detailsMelting'>Consistent weight distribution throughout the length of the rebars makes for true international quality steel. We have equipped our rolling mill with 8 Loopers for giving better curvature and weight distribution to our rebars. Our rebars are flawless in shape and uniform in weight from one end to another – making them perfect deformed bars (i.e. rebars with visible ribs) - but not distorted or disfigured in any way.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={rollingSection3} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
            </Grid2>
          </Grid2>
          <Box display={'flex'}>
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
              onClick={() => scrollToSection(2, 1)}
            >
              <NavigationIcon sx={{transform: 'rotate(180deg)', height: '4rem', width: '4rem'}}/>
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
              onClick={() => scrollToSection(2 , -1)}
            >
              <NavigationIcon sx={{height: '4rem', width: '4rem'}}/>
            </Box>
            </Box>
        </Box>
      </section>
      <section className='melting-section-1 rolling-bg-4' ref={ref[3]}>
        <Box className='container-melting'>
        
          <Grid2 container spacing={2} flexDirection={'row-reverse'} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6}
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={textAnimations}>
              <Typography variant='h2' className='MeltingHeading'>UPLIFTED QUALITY WITH STRAIGHTER REBARS</Typography>
              <Typography variant='body1' className='detailsMelting'>We are equipped with the latest cooling bed with walking-beam technology that automizes the cooling process before rebars are ready to be bundled and shipped. This reduces waviness and ensures that rebars remain straight and in their best form.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={rollingSection4} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
            </Grid2>
          </Grid2>
          <Box display={'flex'}>
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
              onClick={() => scrollToSection(3, 1)}
            >
              <NavigationIcon sx={{transform: 'rotate(180deg)', height: '4rem', width: '4rem'}}/>
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
              onClick={() => scrollToSection(3, -1)}
            >
              <NavigationIcon sx={{height: '4rem', width: '4rem'}}/>
            </Box>
            </Box>
        </Box>
      </section>
      <section className='melting-section-1 rolling-bg-5' ref={ref[4]}>
        <Box className='container-melting'>
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
              onClick={() => scrollToSection(4, -1)}
            >
              <NavigationIcon sx={{height: '4rem', width: '4rem'}}/>
            </Box>
          <Grid2 container spacing={2} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6}
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={textAnimations}>
              <Typography variant='h2' className='MeltingHeading'>RIBS AND STAMP AS PER INTERNATIONAL STANDARDS</Typography>
              <Typography variant='body1' className='detailsMelting'>Focus on quality is central to every aspect of our rebars, such that even the ribs and stamps on our rebars conform to international quality standards. This ensures that our rebars bond with concrete with the strongest hold.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={rollingSection5} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
            </Grid2>
          </Grid2>
        </Box>
        
      </section>
    </Box>
  );
};

export default Rolling;
