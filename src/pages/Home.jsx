import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import homeBanner from '../assets/sheikhoo-steel-video-banner.png'
import '../styles/Home.css'
import Timeline from '../components/Timeline'
import { useTheme } from '@emotion/react'

const Home = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    console.log(isMdUp)
  return (
    <>
    <Box className='banner-container'>
    <img src={homeBanner} alt="sheikhoo-steel-video-banner" className='banner-image'/>
    </Box>
    <Timeline/>
    <Box className='Steel_game_change'>
        <Typography variant={'h1'} textAlign={'center'} fontWeight={600} fontSize={isMdUp ? '5rem' : '3rem'} color='white'>HOW OUR STEEL <br/> CHANGES THE GAME</Typography>
    </Box>
    </>
  )
}

export default Home