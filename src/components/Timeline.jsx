import { Box } from '@mui/material';
import React, { useRef } from 'react';
import '../styles/Timeline.css';
import { motion, useTransform, useScroll } from "framer-motion";

const Timeline = () => {
  return (
        <HorizontalScrollCarousel />
  );
}

const HorizontalScrollCarousel = () => {
    const timelineItems = Array.from({ length: 40 }, (_, index) => `Hello ${index + 1}`);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]); // Adjust the range based on your items
  
    return (
      <section ref={targetRef} className="timeline-section">
        <div ref={targetRef} className="timeline-wrapper">
        <Box className='timeline-text'>
        TIMELINE
      </Box>
          <motion.div style={{ x }} className="timeline-items">
            {timelineItems.map((item, index) => (
              <Box key={index} className="timeline-item">
                {item}
              </Box>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

export default Timeline;
