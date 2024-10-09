import React, { Suspense, lazy } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import '../styles/Home.css';
import { useTheme } from '@emotion/react';
import homeBanner from '../assets/sheikhoo-steel-video-banner.webp';
import MeltingSectionTimeline from '../components/MeltingSectionTimeline';

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
                    // width="1920" 
                    // height="1080" 
                    className='banner-image'
                    loading="lazy" // Lazy load the image
                />
            </Box>
            {/* Use Suspense to handle the loading state of the lazy-loaded component */}
            <Suspense fallback={<div>Loading...</div>}>
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
                    HOW OUR STEEL <br /> CHANGES THE GAME
                </Typography>
            </Box>
            <MeltingSectionTimeline/>
        </>
    );
}

export default Home;
