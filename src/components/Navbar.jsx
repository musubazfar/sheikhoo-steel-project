import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { Box } from '@mui/material'
import { Menu } from '@mui/icons-material';
import logo from '../assets/logo.png'
import Sidebar from './Sidebar';

const Navbar = ({isTransparent}) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const toggleDrawer = () => {setOpenDrawer(!openDrawer)}
  return (
  <>
    <header>
        <Box className='navbar' sx={{position: isTransparent ? 'fixed' : 'relative', backgroundColor: isTransparent ? 'transparent' : '#56c8e7d6'}}>
            <Box className='Button-nav'>
              <Box className="menu-icon-container" onClick={toggleDrawer}>
                <Menu className="menu-icon"/>
              </Box>
            </Box>
            <Box className='logo'>
              <Link to="/" style={{ display: "inline-block" }}>
                <img src={logo} alt='Shiekhoo-steel-logo' style={{width: '250px', height: '100px'}}/>
              </Link>
            </Box>
        </Box>
        <Sidebar open={openDrawer} toggleDrawer={toggleDrawer}/>
    </header>
    </>
  )
}

export default Navbar;
