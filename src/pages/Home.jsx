import React, { Suspense, lazy } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import '../styles/Home.css';
import { useTheme } from '@emotion/react';
import homeBanner from '../assets/sheikhoo-steel-video-banner.webp';
import MeltingSectionTimeline from '../components/MeltingSectionTimeline';
import Loading from '../components/Loading'
import TypewriterEffect from '../components/TypeWriter';
import RollingSection from '../components/RollingSectionTimeline';

// Lazy load the Timeline component
const Timeline = lazy(() => import('../components/Timeline'));

const Home = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box className='banner-container'>
                <img 
                    src={homeBanner} 
                    alt="sheikhoo-steel-video-banner" 
                    className='banner-image'
                    loading="lazy" // Lazy load the image
                />
            </Box>
            <Suspense fallback={<Loading/>}>
                <Timeline />
            </Suspense>
            <Box className='Steel_game_change'>
                <Typography 
                    variant={'h1'} 
                    textAlign={'center'} 
                    fontWeight={600} 
                    fontSize={isMdUp ? '5rem' : '3rem'} 
                    color='white'
                >
                    <TypewriterEffect text="HOOW OUR STEEL <br /> CCHANGES THE GAME" speed={100} />
                </Typography>
            </Box>
            <MeltingSectionTimeline/>
            <RollingSection/>
        </>
    );
}

export default Home;
