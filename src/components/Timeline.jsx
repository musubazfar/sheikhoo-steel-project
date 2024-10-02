import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef } from 'react';
import '../styles/Timeline.css';
import { motion, useTransform, useScroll } from "framer-motion";
import timeline1 from '../assets/timeline1.png'
import timeline2 from '../assets/timeline2.png'

const Timeline = () => {
  const theme = useTheme();
  const isMdBelow = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HorizontalScrollCarousel isMdBelow={isMdBelow} />
  );
}

const HorizontalScrollCarousel = ({ isMdBelow }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust x value based on screen size
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0.1%", "-90%"]
  );

  return (
    <section ref={targetRef} className="timeline-section">
      <div className="timeline-wrapper">
        <Box className='timeline-text' sx={{ left: isMdBelow ? '20px' : '80px'}}>
          TIMELINE
        </Box>
        <motion.div 
          style={{ 
            x 
          }} 
          className="timeline-items"
        >
          <Box className='long-strip'></Box>
          <Box className="timeline-item" sx={{position: 'relative', top: '2.5rem'}}>
            <Box className="heading-1">SHEIKHOO <br/> GROUP <br/> <span className='heading-1-history'>HISTORY</span></Box>
            <Box className="descriptionData">The SHEIKHOO GROUP was founded in 1947, with a mission to establish an industrial base for helping the development of our country and strengthening the people of Pakistan.</Box>
          </Box>
          <Box className="timeline-item top-part">
            <Box className="flexibleItem">
            <Box className="heading-general">
            Cotton<br/>Trade
            </Box>
            <Box className="descriptionData">
            <strong>United Cotton and Wool</strong>, a partnership renowned across the globe for cotton exports, which soon became the most prestigious cotton traders known all over the world.
            </Box>
            <Box className="yeartop">19</Box>
            <Box className="yeartop-2nd">50s</Box>
            </Box>
            <Box className="timelineImage top-image-setting">
              <img src={timeline1} alt="" />
            </Box>
          </Box>
          <Box className="timeline-item bottom-part">
            <Box className="flexibleItem">
            <Box className="yearbottom">19</Box>
            <Box className="yearbottom-2nd">50s</Box>
            <Box className="heading-general">
            SHIPPING<br/>TRANSPORTATION,<br/>BUILDING &<br/>REPAIR
            </Box>
            <Box className="descriptionData">
            Boasted Pakistan’s largest shipping fleet for shipping transportation under the name<strong> United Oriental Steamship Co.</strong> in 1959. Later established<strong> Carstairs and Cummings Ltd.</strong>, which was renowned across the world for ship building and repairing yards.
            </Box>
            </Box>
            <Box className="timelineImage bottom-image-setting">
              <img src={timeline2} alt="" />
            </Box>
          </Box>
          <Box className="timeline-item top-part item3">
            <Box className="flexibleItem">
            <Box className="heading-general">
            Cotton<br/>Trade
            </Box>
            <Box className="descriptionData">
            <strong>United Cotton and Wool</strong>, a partnership renowned across the globe for cotton exports, which soon became the most prestigious cotton traders known all over the world.
            </Box>
            <Box className="yeartop">19</Box>
            <Box className="yeartop-2nd">50s</Box>
            </Box>
            <Box className="timelineImage top-image-setting">
              <img src={timeline1} alt="" />
            </Box>
          </Box>
          <Box className="timeline-item">Event 4</Box>
          <Box className="timeline-item">Event 5</Box>
          <Box className="timeline-item">Event 6</Box>
          <Box className="timeline-item">Event 7</Box>
        </motion.div>
      </div>
    </section>
  );
}


export default Timeline;
