import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
// import { Helmet } from 'react-helmet';
import homeBanner from '../assets/sheikhoo-steel-video-banner.webp'
import '../styles/Home.css'
import Timeline from '../components/Timeline'
import { useTheme } from '@emotion/react'

const Home = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
    <Box className='banner-container'>
    <img src={homeBanner} alt="sheikhoo-steel-video-banner" width="1920" height="1080" className='banner-image'/>
    </Box>
    <Timeline/>
    <Box className='Steel_game_change'>
        <Typography variant={'h1'} textAlign={'center'} fontWeight={600} fontSize={isMdUp ? '5rem' : '3rem'} color='white'>HOW OUR STEEL <br/> CHANGES THE GAME</Typography>
    </Box>
    </>
  )
}

export default Home