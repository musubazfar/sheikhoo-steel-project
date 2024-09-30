import React, { useState } from 'react'
import '../styles/navbar.css'
import { Box } from '@mui/material'
import { Menu } from '@mui/icons-material';
import logo from '../assets/logo.png'
import Sidebar from './Sidebar';

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const toggleDrawer = () => {setOpenDrawer(!openDrawer)}
  return (
  <>
    <header>
        <Box className='navbar'>
            <Box className='Button-nav'>
              <Box className="menu-icon-container" onClick={toggleDrawer}>
                <Menu className="menu-icon"/>
              </Box>
            </Box>
            <Box className='logo'>
                <img src={logo} alt='Shiekhoo-steel-logo'/>
            </Box>
        </Box>
        <Sidebar open={openDrawer} toggleDrawer={toggleDrawer}/>
    </header>
    </>
  )
}

export default Navbar;
