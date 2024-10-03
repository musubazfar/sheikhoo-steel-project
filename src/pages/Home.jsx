import React from 'react'
import { Box, Typography } from '@mui/material'
import homeBanner from '../assets/sheikhoo-steel-video-banner.png'
import '../styles/Home.css'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <>
    <Box className='banner-container'>
    <img src={homeBanner} alt="sheikhoo-steel-video-banner" className='banner-image'/>
    </Box>
    <Timeline/>
    <Box className='Steel_game_change'>
        <Typography variant='h1' textAlign={'center'} fontWeight={800} color='white'>HOW OUR STEEL <br/> CHANGES THE GAME</Typography>
    </Box>
    </>
  )
}

export default Home