import React from 'react'
import { Box } from '@mui/material'
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
    </>
  )
}

export default Home