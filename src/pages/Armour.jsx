import { Box, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Armour.css';
import img1 from '../assets/tech-img-armor1.png';
import img2 from '../assets/tech-img-armor2.png';
import steel from '../assets/armour.png';

const Armour = () => {
  // Define animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <main className="main-content">
      <Box className='productsContent' component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <Box className='leftDiv'>
          <Box className='ribbonProducts armourProduct'>
            <img src={steel} alt="" className='overlayImage' />
            <Box className='textContainer'>
              <Typography className='productTitleHeading' variant='h2' component={motion.h2} whileHover={{ scale: 1.05 }}>
                Sheikhoo <br /> Armour
              </Typography>
              <Typography className='productTitleDetails' variant='h2'>
                ASTM 615/615-M: <br /> GRADE 60
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className='rightDiv'>
          <motion.div variants={itemVariants} custom={1} initial="hidden" animate="visible">
            <Typography className='textStylesProducts' variant='body1'>
              Sheikhoo Armour rebars are made with strict adherence to the American Standard for Testing Material (ASTM) A-615/A-615M. Sheikhoo Armour rebar is well rounded and suitable for most sizes of construction, residential or commercial.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants} custom={2} initial="hidden" animate="visible">
            <Typography variant='h2' className='headingsProducts' sx={{ color: '#cd132c' }}>Specifications</Typography>
            <Box component="ul">
              <motion.li variants={itemVariants} custom={3}>
                <Typography variant="body2" className='textStylesProducts'>Minimum Yield Strength: 60,000 psi (420 MPa)</Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={4}>
                <Typography variant="body2" className='textStylesProducts'>Minimum Tensile Strength: 90,000 psi (620 MPa)</Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={5}>
                <Typography variant="body2" className='textStylesProducts'>Steel Category: S 60 = Carbon Steel (A615/A615M)</Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={6}>
                <Typography variant="body2" className='textStylesProducts'>Minimum Bar Elongation: 7% - 9%</Typography>
              </motion.li>
            </Box>
          </motion.div>
          <motion.div variants={itemVariants} custom={7} initial="hidden" animate="visible">
            <Typography variant='h2' className='headingsProducts' sx={{ color: '#cd132c' }}>Features</Typography>
            <Box component="ul">
              <motion.li variants={itemVariants} custom={8}>
                <Typography variant="body2" className='textStylesProducts'>Homogenized and Pure</Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={9}>
                <Typography variant="body2" className='textStylesProducts'>Even weight distribution</Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={10}>
                <Typography variant="body2" className='textStylesProducts'>Resistant to all weather conditions</Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={11}>
                <Typography variant="body2" className='textStylesProducts'>Superior bonding with concrete owing to sharp, protruding rib structure</Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={12}>
                <Typography variant="body2" className='textStylesProducts'>Fabrication-friendly</Typography>
              </motion.li>
            </Box>
          </motion.div>
          <Box className='imageSectionProducts'>
            <motion.img src={img1} alt="Product Image 1" whileHover={{ scale: 1.1 }} />
            <motion.img src={img2} alt="Product Image 2" whileHover={{ scale: 1.1 }} />
          </Box>
        </Box>
      </Box>
    </main>
  );
}

export default Armour;
