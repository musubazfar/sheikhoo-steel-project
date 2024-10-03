import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import '../styles/Timeline.css';
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import timeline1 from '../assets/timeline1.png';
import timeline2 from '../assets/timeline2.png';
import timeline3 from '../assets/timeline3.png';
import timeline4 from '../assets/timeline4.png';
import timeline5 from '../assets/timeline5.png';
import timeline6 from '../assets/timeline6.png';

const Timeline = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [xTransform, setXTransform] = useState(["0px", "-1000px"]); // Default values

  useEffect(() => {
    const updateTransformValues = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setXTransform(["0.1%", "-70%"]);
      } else if (width <= 960) {
        setXTransform(["0.1%", "-60%"]);
      } else if (width <= 1280) {
        setXTransform(["0.1%", "-50%"]);
      } else {
        setXTransform(["0.1%", "-35%"]);
      }
    };

    updateTransformValues();
    window.addEventListener("resize", updateTransformValues);
    return () => {
      window.removeEventListener("resize", updateTransformValues);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xTransform);

  // Create refs and inView checks for each timeline item
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const inViewChecks = refs.map(ref => useInView(ref, { triggerOnce: true }));

  return (
    <section ref={targetRef} className="timeline-section">
      <div className="timeline-wrapper">
        <Box className='timeline-text' sx={{ left: isMd ? '20px' : '80px' }}>
          TIMELINE
        </Box>
        <motion.div style={{ x }} className="timeline-items">
          <Box className='long-strip'></Box>
          {/* Timeline Item 1 */}
          <Box className="timeline-item" component={motion.div} ref={refs[0]} initial={{ x: -200, opacity: 0 }} animate={inViewChecks[0] ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1 }} sx={{ position: 'relative', top: '2.5rem' }}>
            <Box className="heading-1">SHEIKHOO <br /> GROUP <br /> <span className='heading-1-history'>HISTORY</span></Box>
            <Box className="descriptionData">The SHEIKHOO GROUP was founded in 1947, with a mission to establish an industrial base for helping the development of our country and strengthening the people of Pakistan.</Box>
          </Box>

          {/* Timeline Item 2 */}
          <Box className="timeline-item top-part" component={motion.div} ref={refs[1]} initial={{ y: -100, opacity: 0 }} animate={inViewChecks[1] ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1 }}>
            <Box className="flexibleItem">
              <Box className="heading-general">Cotton<br />Trade</Box>
              <Box className="descriptionData">
                <strong>United Cotton and Wool</strong>, a partnership renowned across the globe for cotton exports, which soon became the most prestigious cotton traders known all over the world.
              </Box>
              <Box className="yeartop">19</Box>
              <Box className="yeartop-2nd">50s</Box>
            </Box>
            <Box className="timelineImage top-image-setting">
              <img src={timeline1} alt="" style={{width: '200px', height: '75px'}} loading="lazy" />
            </Box>
          </Box>

          {/* Timeline Item 3 */}
          <Box className="timeline-item bottom-part" component={motion.div} ref={refs[2]} initial={{ y: 100, opacity: 0 }} animate={inViewChecks[2] ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1 }}>
            <Box className="flexibleItem">
              <Box className="yearbottom">19</Box>
              <Box className="yearbottom-2nd">50</Box>
              <Box className="heading-general">SHIPPING<br />TRANSPORTATION,<br />BUILDING &<br />REPAIR</Box>
              <Box className="descriptionData">
                Boasted Pakistan’s largest shipping fleet for shipping transportation under the name<strong> United Oriental Steamship Co.</strong> in 1959. Later established<strong> Carstairs and Cummings Ltd.</strong>, which was renowned across the world for ship building and repairing yards.
              </Box>
            </Box>
            <Box className="timelineImage bottom-image-setting">
              <img src={timeline2} alt="" loading="lazy" style={{width: '200px', height: '75px'}}/>
            </Box>
          </Box>

          {/* Timeline Item 4 */}
          <Box className="timeline-item top-part item3" component={motion.div} ref={refs[3]} initial={{ y: -100, opacity: 0 }} animate={inViewChecks[3] ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1 }}>
            <Box className="flexibleItem">
              <Box className="heading-general">TEXTILE</Box>
              <Box className="descriptionData">
                In 1960, the group set up the second-largest <strong>Jute Mills</strong> in Pakistan, and further went to pioneer the textile industry with three mills in the city of Gharo.
              </Box>
              <Box className="yeartop">19</Box>
              <Box className="yeartop-2nd">60s</Box>
            </Box>
            <Box className="timelineImage top-image-setting" sx={{ top: '72px' }}>
              <img src={timeline3} alt="" loading="lazy" style={{width: '200px', height: '75px'}}/>
            </Box>
          </Box>

          {/* Timeline Item 5 */}
          <Box className="timeline-item bottom-part item4" component={motion.div} ref={refs[4]} initial={{ y: 100, opacity: 0 }} animate={inViewChecks[4] ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1 }}>
            <Box className="flexibleItem">
              <Box className="yearbottom">19</Box>
              <Box className="yearbottom-2nd">70</Box>
              <Box className="heading-general">PAINT</Box>
              <Box className="descriptionData">
                In 1970, the Baksh group also established a countrywide renowned paint factory in Pakistan, <strong>Paints (Pak) Ltd.</strong>
              </Box>
            </Box>
            <Box className="timelineImage bottom-image-setting" sx={{ top: '45px' }}>
              <img src={timeline4} alt="" loading="lazy" style={{width: '200px', height: '75px'}}/>
            </Box>
          </Box>

          {/* Timeline Item 6 */}
          <Box className="timeline-item top-part item5" component={motion.div} ref={refs[5]} initial={{ y: -100, opacity: 0 }} animate={inViewChecks[5] ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1 }}>
            <Box className="flexibleItem">
              <Box className="heading-general">SUGAR</Box>
              <Box className="descriptionData">
                In 1991, Baksh Group laid the foundation of Sheikhoo Sugar Mills Ltd - a state-of-the-art sugar mills operations in Pakistan. As soon as Sheikhoo Sugar entered the market, it gained the trust of leading MNCs, resulting in getting their patronage.
              </Box>
              <Box className="yeartop">19</Box>
              <Box className="yeartop-2nd">91</Box>
            </Box>
            <Box className="timelineImage top-image-setting" sx={{ top: '72px' }}>
              <img src={timeline5} alt="" loading="lazy" style={{width: '200px', height: '75px'}}/>
            </Box>
          </Box>

          {/* Last Item */}
          <Box className='Sheikhoo-container' component={motion.div} ref={refs[6]} initial={{ x: 100, opacity: 0 }} animate={inViewChecks[6] ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1 }}>
            <Box className='year'>
              <Box className="yearbottom">20</Box>
              <Box className="yearbottom-2nd">20</Box>
            </Box>
            <Box className='headingsAndPara'>
              <Box className="heading-sheikhoo">
                SHEIKHOO <br /> STEEL
              </Box>
              <Box className="descriptionData">
                In 1970, the Baksh group also established a countrywide renowned paint factory in Pakistan, <strong>Paints (Pak) Ltd.</strong>
              </Box>
            </Box>
            <Box className="image_sheikhoo">
              <img src={timeline6} alt="" style={{ maxWidth: '140px' }} loading="lazy"/>
            </Box>
          </Box>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
