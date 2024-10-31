import { Box, Typography } from '@mui/material'
import React from 'react'
import '../styles/Armour.css'
import img1 from '../assets/tech-img-armor1.png'
import img2 from '../assets/tech-img-armor2.png'
import steel from '../assets/armour.png'

const Armour = () => {
  return (
    <main>
        <Box className='productsContent'>
        <Box className='leftDiv'>
    <Box className='ribbonProducts armourProduct'>
        <img src={steel} alt="" className='overlayImage' />
        <Box className='textContainer'>
            <Typography className='productTitleHeading' variant='h2'>Sheikhoo <br /> Armour</Typography>
            <Typography className='productTitleDetails' variant='h2'>ASTM 615/615-M: <br /> GRADE 60</Typography>
        </Box>
    </Box>
</Box>
            <Box className='rightDiv'>
                <Typography className='textStylesProducts' variant='body1'>Sheikhoo Armour rebars are made with strict adherence to the American Standard for Testing Material (ASTM) A-615/A-615M. Sheikhoo Armour rebar is well rounded and suitable for most sizes of construction, residential or commercial.</Typography>
                <Typography variant='h2' className='headingsProducts' sx={{color: '#cd132c'}}>Specifications</Typography>
                <Box component="ul">
                    <Typography component="li" variant="body2" className='textStylesProducts'>Minimum Yield Strength: 60,000 psi (420 MPa)</Typography>
                    <Typography component="li" variant="body2" className='textStylesProducts'>Minimum Tensile Strength: 90,000 psi (620 MPa)</Typography>
                    <Typography component="li" variant="body2" className='textStylesProducts'>Steel Category: S 60 = Carbon Steel (A615/A615M)</Typography>
                    <Typography component="li" variant="body2" className='textStylesProducts'>Minimum Bar Elongation: 7% - 9%</Typography>
                </Box>
                <Typography variant='h2' className='headingsProducts' sx={{color: '#cd132c'}}>Features</Typography>
                <Box component="ul">
                    <Typography component="li" variant="body2" className='textStylesProducts'>Homogenized and Pure</Typography>
                    <Typography component="li" variant="body2" className='textStylesProducts'>Even weight distribution</Typography>
                    <Typography component="li" variant="body2" className='textStylesProducts'>Resistant to all weather conditions</Typography>
                    <Typography component="li" variant="body2" className='textStylesProducts'>Superior bonding with concrete owing to sharp, protruding rib structure</Typography>
                    <Typography component="li" variant="body2" className='textStylesProducts'>Fabrication-friendly</Typography>
                </Box>
                <Box className='imageSectionProducts'>
                    <img src={img1} alt="Product Image 1" />
                    <img src={img2} alt="Product Image 2" />
                </Box>
            </Box>
        </Box>
    </main>
  )
}

export default Armour