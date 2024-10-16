import React, { useRef, useState, useEffect } from 'react';
import '../styles/MeltingSectionTimeline.css';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, useTransform, useScroll } from "framer-motion";
import item1 from '../assets/Timeline2-item1.jpg';
import item2 from '../assets/Timeline2-item2.jpg';
import item3 from '../assets/Timeline2-item3.jpg';
import item4 from '../assets/Timeline2-item4.jpg';
import item5 from '../assets/Timeline2-item5.jpg';

const MeltingSectionTimeline = () => {
  const theme = useTheme(); 
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [xTransform, setXTransform] = useState(["-10%", "-130%"]); 

  useEffect(() => {
    const updateTransformValues = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setXTransform(["-10%", "-170%"]);
      } else if (width <= 1130) {
        setXTransform(["-10%", "-155%"]);
      } else if (width <= 1526) {
        setXTransform(["-10%", "-140%"]);
      } else {
        setXTransform(["-10%", "-130%"]);
      }
    };

    updateTransformValues();
    window.addEventListener("resize", updateTransformValues);
    return () => {
      window.removeEventListener("resize", updateTransformValues);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xTransform);

  const imageAnimations = {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 },
    transition: { duration: 1, ease: 'easeOut' }
  };

  return (
    <section className='container-timeline2' ref={targetRef}>
      <Box className='timeline-wrapper-timeline2'>
        <Box className='timeline-text-timeline2' sx={{ left: isMd ? '20px' : '80px' }}>
          MELTING SECTION
        </Box>
        <motion.div style={{ x }} className="timeline-items-timeline2">
          <Box className='timeline-item-timeline2' sx={{ marginRight: '60vw' }}>
            <Typography variant='h2' className='slide-heading' fontWeight={1000}>
              BETTER <br/>THE BULLET, <br/>STRONGER<br/> THE STEEL.
            </Typography>
            <Typography className='slide-description' maxWidth={'470px'}>
              Sheikhoo Steel is the producer of Pakistan’s best-selling steel billets for over three years in a row, owing to Sheikhoo Steel’s Melt Shop. Here is what makes Sheikhoo Steel Melt Shop the best in the industry
            </Typography>
          </Box>
          
          {/* Animated Image 1 */}
          <Box className='timeline-item-timeline2' sx={{ display: 'flex' }}>
            <Box className='text-box'>IMPORTED AND TESTED RAW MATERIALS</Box>
            <motion.div
              className='image-box'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.6 }}
              variants={imageAnimations}
            >
              <img src={item1} alt="Sheikhoo-steel-imported-and-tested-raw-materials" width={'100%'} />
            </motion.div>
          </Box>

          {/* Animated Image 2 */}
          <Box className='timeline-item-timeline2' sx={{ display: 'flex' }}>
            <motion.div
              className='image-box'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.6 }}
              variants={{ ...imageAnimations, transition: { duration: 1.2 } }}
            >
              <img src={item2} alt="Sheikhoo-steel-unmix-method" width={'100%'} />
            </motion.div>
            <Box className='text-box'>UN-MIXED METHOD</Box>
          </Box>

          {/* Animated Image 3 */}
          <Box className='timeline-item-timeline2' sx={{ display: 'flex' }}>
            <Box className='text-box'>PUREST QUALITY MIX</Box>
            <motion.div
              className='image-box'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.6 }}
              variants={{ ...imageAnimations, transition: { duration: 1.4 } }}
            >
              <img src={item3} alt="Sheikhoo-steel-pure-quality" width={'100%'} />
            </motion.div>
          </Box>

          {/* Animated Image 4 */}
          <Box className='timeline-item-timeline2' sx={{ display: 'flex' }}>
            <motion.div
              className='image-box'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.6 }}
              variants={{ ...imageAnimations, transition: { duration: 1.6 } }}
            >
              <img src={item4} alt="Sheikhoo-steel-no-impurity" width={'100%'} />
            </motion.div>
            <Box className='text-box'>IMPURITY ISOLATION</Box>
          </Box>

          {/* Animated Image 5 */}
          <Box className='timeline-item-timeline2' sx={{ display: 'flex' }}>
            <Box className='text-box'>EUROPEAN CONTINUOUS CASTING MACHINE</Box>
            <motion.div
              className='image-box'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.6 }}
              variants={{ ...imageAnimations, transition: { duration: 1.8 } }}
            >
              <img src={item5} alt="Sheikhoo-steel-european-standards-casting-machine" width={'100%'} />
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </section>
  );
};

export default MeltingSectionTimeline;
