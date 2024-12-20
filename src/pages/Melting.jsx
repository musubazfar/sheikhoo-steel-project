import { Box, Grid2, Typography } from '@mui/material';
import React, { useRef } from 'react';
import '../styles/Melting.css';
import meltingSection1 from '../assets/melting-sec-1.png';
import meltingSection2 from '../assets/melting-sec-2.png';
import meltingSection3 from '../assets/melting-sec-3.png';
import meltingSection4 from '../assets/melting-sec-4.png';
import meltingSection5 from '../assets/melting-sec-5.png';
import NavigationIcon from '@mui/icons-material/Navigation';
import {motion} from 'framer-motion'

const Melting = () => {
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
      <section className='melting-section-1 melting-bg-1' ref={ref[0]}>
        <Box className='container-melting'>
        <Grid2 container spacing={2} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6} component={motion.div} initial="initial"
              whileInView="animate"
              exit="exit"
              variants={textAnimations}
              >
        <Box>
        <Typography className='pageHeadingMelting' sx={{top: '-200px'}}>MELTING SECTION</Typography>
        </Box>
              <Typography variant='h2' className='MeltingHeading'>IMPORTED & TESTED RAW MATERIAL</Typography>
              <Typography variant='body1' className='detailsMelting'>Use of quality imported raw material, which is tested as per international standards (SGS testing) before use.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={meltingSection1} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
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
      <section className='melting-section-1 melting-bg-2' ref={ref[1]}>
        <Box className='container-melting'>
          <Grid2 container spacing={2} flexDirection={'row-reverse'} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6}
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={textAnimations}>
              <Typography variant='h2' className='MeltingHeading'>UNI-MIX METHOD</Typography>
              <Typography variant='body1' className='detailsMelting'>Our homogeneous process ensures mixing of ferroalloys and consumables inside the furnace. This efficient process ensures uniformity of the melt composition as consistent heating and stirring of the melt recipe produces the most homogenized, high-quality steel billets.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={meltingSection2} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
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
      <section className='melting-section-1 melting-bg-3' ref={ref[2]}>
        <Box className='container-melting'>
        <Grid2 container spacing={2} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6}
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={textAnimations}>
              <Typography variant='h2' className='MeltingHeading'>PUREST QUALITY MIX</Typography>
              <Typography variant='body1' className='detailsMelting'>The only steel company to use high alumina neutral ramming mass (imported from Germany and UK) inside the Melting Furnace. This ensures making only the purest possible steel compositions without any type of non-metallic inclusion, resulting in stellar quality billets.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={meltingSection3} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
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
      <section className='melting-section-1 melting-bg-4' ref={ref[3]}>
        <Box className='container-melting'>
        
          <Grid2 container spacing={2} flexDirection={'row-reverse'} sx={{ flexWrap: { sm: 'nowrap', lg: 'wrap' } }}>
            <Grid2 item='true' className='textSectionMelting' xs={12} sm={6}
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={textAnimations}>
              <Typography variant='h2' className='MeltingHeading'>IMPURITY ISOLATION</Typography>
              <Typography variant='body1' className='detailsMelting'>Our state-of-the-art Induction Furnaces are built with higher turbulence settings to avoid any contamination of non-metallic impurities in molten steel. These turbulence settings separate the impurities and slag, which are later removed from the pure metallic melt, ensuring only the purest mix is left for making steel billets.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={meltingSection4} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
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
      <section className='melting-section-1 melting-bg-5' ref={ref[4]}>
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
              <Typography variant='h2' className='MeltingHeading'>EUROPEAN CONTINUOUS CASTING MACHINE</Typography>
              <Typography variant='body1' className='detailsMelting'>Pakistan’s first and only European, high-speed CCM having 7/13 radius. This ratio gives better stress handling while casting, a characteristic which is passed on to rebars produced with our billets. Our Italian CCM also uses quality Copper Mould Tubes for premium surface finish of steel billets with less scaling on billets/rebars.</Typography>
            </Grid2>
            <Grid2 item='true' xs={12} sm={6} className='imageSectionMelting'
            component={motion.div} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={ImageAnimations}>
              <img src={meltingSection5} alt="raw-Materials" style={{ maxWidth: '700px', width: '100%' }} />
            </Grid2>
          </Grid2>
        </Box>
        
      </section>
    </Box>
  );
};

export default Melting;
