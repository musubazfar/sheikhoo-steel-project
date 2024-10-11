import React, { useRef, useState, useEffect } from 'react';
import '../styles/RollingSectionTimeline.css';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, useTransform, useScroll } from "framer-motion";
import item1 from '../assets/Timeline3-item1.jpg';
import item2 from '../assets/Timeline3-item2.jpg';
import item3 from '../assets/Timeline3-item3.jpg';
import item4 from '../assets/Timeline3-item4.jpg';
import item5 from '../assets/Timeline3-item5.jpg';

const RollingSection = () => {
  const theme = useTheme(); 
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [xTransform, setXTransform] = useState(["-10%", "-130%"]); 

  useEffect(() => {
    const updateTransformValues = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setXTransform(["-10%", "-145%"]);
      } else if (width <= 1130) {
        setXTransform(["-10%", "-137%"]);
      } else if (width <= 1526) {
        setXTransform(["-10%", "-124%"]);
      } else {
        setXTransform(["-10%", "-113%"]);
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
    <section className='container-timeline3' ref={targetRef}>
      <Box className='timeline-wrapper-timeline3'>
        <Box className='timeline-text-timeline3' sx={{ left: isMd ? '20px' : '80px' }}>
          ROLLING SECTION
        </Box>
        <motion.div style={{ x }} className="timeline-items-timeline3">
          <Box className='timeline-item-timeline3' sx={{ marginRight: '60vw' }}>
            <Typography variant='h2' className='slide-heading-timeline3' fontWeight={1000}>
              ROLLED TO <br/> PERFECTION.
            </Typography>
            <Typography className='slide-description-timeline3' maxWidth={'470px'}>
            The strengths passed on from Sheikhoo Melt Shop become the strength of our Rolling Mill. Hence, Sheikhoo Steel rebars boast the same exceptional quality and finish as that is characteristic of Sheikhoo Steel billets that are used to make them
            </Typography>
          </Box>
          
          {/* Animated Image 1 */}
          <Box className='timeline-item-timeline3' sx={{ display: 'flex' }}>
            <Box className='text-box-timeline3'>IMPORTED AND TESTED RAW MATERIALS</Box>
            <motion.div
              className='image-box-timeline3'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.5 }}
              variants={imageAnimations}
            >
              <img src={item1} alt="Sheikhoo-steel-imported-and-tested-raw-materials" width={'100%'} />
            </motion.div>
          </Box>

          {/* Animated Image 2 */}
          <Box className='timeline-item-timeline3' sx={{ display: 'flex' }}>
            <motion.div
              className='image-box-timeline3'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.5 }}
              variants={{ ...imageAnimations, transition: { duration: 1.2 } }}
            >
              <img src={item2} alt="Sheikhoo-steel-unmix-method" width={'100%'} />
            </motion.div>
            <Box className='text-box-timeline3'>UN-MIXED METHOD</Box>
          </Box>

          {/* Animated Image 3 */}
          <Box className='timeline-item-timeline3' sx={{ display: 'flex' }}>
            <Box className='text-box-timeline3'>PUREST QUALITY MIX</Box>
            <motion.div
              className='image-box-timeline3'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.5 }}
              variants={{ ...imageAnimations, transition: { duration: 1.4 } }}
            >
              <img src={item3} alt="Sheikhoo-steel-pure-quality" width={'100%'} />
            </motion.div>
          </Box>

          {/* Animated Image 4 */}
          <Box className='timeline-item-timeline3' sx={{ display: 'flex' }}>
            <motion.div
              className='image-box-timeline3'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.5 }}
              variants={{ ...imageAnimations, transition: { duration: 1.6 } }}
            >
              <img src={item4} alt="Sheikhoo-steel-no-impurity" width={'100%'} />
            </motion.div>
            <Box className='text-box-timeline3'>IMPURITY ISOLATION</Box>
          </Box>

          {/* Animated Image 5 */}
          <Box className='timeline-item-timeline3' sx={{ display: 'flex' }}>
            <Box className='text-box-timeline3'>EUROPEAN CONTINUOUS CASTING MACHINE</Box>
            <motion.div
              className='image-box-timeline3'
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ amount: 0.5 }}
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

export default RollingSection;
