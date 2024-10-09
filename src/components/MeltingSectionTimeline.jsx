import React, { useRef, useState, useEffect } from 'react';
import '../styles/MeltingSectionTimeline.css';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, useTransform, useScroll, useInView } from "framer-motion";

const MeltingSectionTimeline = () => {
  const theme = useTheme(); 
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [xTransform, setXTransform] = useState(["-30%", "-200%"]); 

  // useEffect(() => {
  //   const updateTransformValues = () => {
  //     const width = window.innerWidth;

  //     if (width <= 600) {
  //       setXTransform(["0%", "-70%"]);
  //     } else if (width <= 960) {
  //       setXTransform(["0%", "-60%"]);
  //     } else if (width <= 1280) {
  //       setXTransform(["0%", "-50%"]);
  //     } else {
  //       setXTransform(["0%", "-35%"]);
  //     }
  //   };

  //   updateTransformValues();
  //   window.addEventListener("resize", updateTransformValues);
  //   return () => {
  //     window.removeEventListener("resize", updateTransformValues);
  //   };
  // }, []);

  const x = useTransform(scrollYProgress, [0, 1], xTransform);

  // Create refs and inView checks for each timeline item
  const refs = Array.from({ length: 7 }, () => useRef(null));
  const inViewChecks = refs.map(ref => useInView(ref, { triggerOnce: true }));

  return (
    <section className='container-timeline2' ref={targetRef}>
      <Box className='timeline-wrapper-timeline2'>
        <Box className='timeline-text-timeline2' sx={{ left: isMd ? '20px' : '80px' }}>
          MELTING SECTION
        </Box>
        <motion.div style={{ x }} className="timeline-items-timeline2">
          <Box className='timeline-item-timeline2' sx={{minWidth: '370px'}}>
            <Typography variant='h2' className='slide-heading' fontWeight={1000}>BETTER <br/>THE BULLET, <br/>STRONGER<br/> THE STEEL. </Typography>
            <Typography className='slide-description' maxWidth={'470px'}>Sheikhoo Steel is the producer of Pakistan’s best-selling steel billets for over three years in a row, owing to Sheikhoo Steel’s Melt Shop. Here is what makes Sheikhoo Steel Melt Shop the best in the industry</Typography>
          </Box>
          <Box className='timeline-item-timeline2'>1</Box>
          <Box className='timeline-item-timeline2'>1</Box>
          <Box className='timeline-item-timeline2'>1</Box>
          <Box className='timeline-item-timeline2'>1</Box>
        </motion.div>
      </Box>
    </section>
  );
};

export default MeltingSectionTimeline;