import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Our_testing_philosophy.css";
import bgimg1 from "../assets/philosophy-image-2.jpg";
import bgimg2 from "../assets/philosophy-image-3.jpg";
import bgimg3 from "../assets/philosophy-image-4.jpg";
import coneImage from "../assets/testing-philosophy-rectangle.png";

const Our_testing_philosophy = () => {
  const images = [bgimg1, bgimg2, bgimg3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Box className="container-philosophy">
      <Box className="firstDiv-philosophy">
        <Box className="heading-philosophy">
          <Typography className="heading-page-philosophy" textAlign={"center"}>
            OUR TESTING <br />
            <span
              style={{
                color: "#cf202f",
              }}
            >
              PHILOSOPHY
            </span>
          </Typography>
          <Box className="details-philosophy">
            <Typography className="steel-dilemma">THE STEEL DILEMMA</Typography>
            <Typography className="details-steel-dilemma">
              As commercial buyers, architects, and homeowners, you face a critical decision: which steel should you trust for your construction projects? With numerous
              options and unclear quality standards, finding the right choice can feel like navigating a complex labyrinth. At Sheikhoo Steel, we understand your concerns
              and are committed to guiding you through this maze by providing steel products that have undergone rigorous testing for quality and reliability.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Image slider with smooth transition */}
      <Box className="secondDiv-philosophy">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }} // Start faded and blurred
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }} // Fade in and clear blur
            exit={{
              opacity: 0,
              filter: "blur(10px)",
            }} // Fade out with blur
            transition={{
              duration: 1,
            }} // Transition duration
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
        </AnimatePresence>
        <Box className="internal-testing">
          <Typography variant="h2" className="internal-testing" mb={"2rem"}>
            INTERNAL TESTING
          </Typography>
          <Typography className="chemical-testing">CHEMICAL TESTING</Typography>
          <Typography className="details-steel-dilemma" color="#ffffff" mb={"5rem !important"}>
            All chemical tests within our melt shop are conducted in our German Spectro Laboratory. These are used to make premium-quality chemical compositions of steel
            billets. A runtime testing procedure is implemented during the production process ensuring our billets/rebar meet all international quality benchmarks.
          </Typography>
          <Typography className="chemical-testing">MECHANICAL TESTING</Typography>
          <Typography className="details-steel-dilemma" color="#ffffff">
            We are equipped with Universal Testing Machines (UTM) that are required to run mechanical tests on our rebars. Each rebar goes through a series of tests and
            trials so that our product is delivered to you without any compromise. A comprehensive series of tests are conducted to ensure quality output.
          </Typography>
          <Box display="flex" justifyContent="center">
            {/* First Column */}
            <Box display="flex" justifyContent="center">
              {/* First Column */}
              <Box
                component="ul"
                sx={{
                  marginRight: "2rem",
                }}
              >
                <Typography component="li" variant="body1" className="testing-property">
                  YIELD STRENGTH
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  TENSILE STRENGTH
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  BEND TEST
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  WEIGHT
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  ELONGATION
                </Typography>
              </Box>
              <Box component="ul">
                <Typography component="li" variant="body1" className="testing-property">
                  DIAMETER
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  RIB PROTRUSION
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  CORD GAP
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  CORD HEIGHT
                </Typography>
                <Typography component="li" variant="body1" className="testing-property">
                  RIBS GAP
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "4rem",
          }}
        >
          <Typography className="empowering">EMPOWERING</Typography>
          <Typography
            className="chemical-testing"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            OUR STRENGTH THROUGH
            <br />
            THIRD-PARTY TESTING
          </Typography>
        </Box>
        <Box className="coneContainer">
  <Box sx={{ display: "flex", gap: "0px", flexDirection: "column", minWidth: '200px', maxWidth: '300px' }}>
    <img src={coneImage} alt="Sheikhoo-description" style={{ width: "100%", height: "100%", maxHeight: '150px', aspectRatio: 1 }} />
    <Box className="contentWithImage">
      <Typography className="steel-dilemma lastHeadings" sx={{ textWrap: "wrap !important" }}>
        THE PIONEERING APPROACH
      </Typography>
      <Typography className="details-steel-dilemma">
        In the steel industry, testing is often limited to the commercial sector, leaving architects and homeowners uninformed. At Sheikhoo Steel, we believe in
        providing everyone with knowledge about the quality of steel used in their homes. That's why we prioritize thorough testing. Sheikhoo Steel leads with a
        revolutionary two-step testing process. First, our experts meticulously scrutinize the steel, ensuring it meets the highest safety and reliability
        standards. We go further by involving reputable third-party institutions for additional verification, instilling ultimate confidence in our products.
      </Typography>
    </Box>
  </Box>

  <Box sx={{ display: "flex", gap: "0px", flexDirection: "column", minWidth: '200px', maxWidth: '300px' }}>
    <img src={coneImage} alt="Sheikhoo-description" style={{ width: "100%", height: "100%", maxHeight: '150px', aspectRatio: 1 }} />
    <Box className="contentWithImage">
      <Typography className="steel-dilemma lastHeadings" sx={{ textWrap: "wrap !important" }}>
        A PARTNERSHIP FOR SUCCESS
      </Typography>
      <Typography className="details-steel-dilemma">
        By choosing Sheikhoo Steel, you enter into a partnership founded on trust and quality. Together, we have the potential to revolutionize the steel market,
        offering architects, commercial buyers, and homeowners the assurance required to make informed decisions.
      </Typography>
    </Box>
  </Box>

  <Box sx={{ display: "flex", gap: "0px", flexDirection: "column", minWidth: '200px', maxWidth: '300px' }}>
    <img src={coneImage} alt="Sheikhoo-description" style={{ width: "100%", height: "100%", maxHeight: '150px', aspectRatio: 1 }} />
    <Box className="contentWithImage">
      <Typography className="steel-dilemma lastHeadings" sx={{ textWrap: "wrap !important" }}>
        CHOOSE SHEIKHOO STEEL
      </Typography>
      <Typography className="details-steel-dilemma">
        and forge a partnership built on trust and quality that benefits architects, commercial buyers, and homeowners alike. By joining forces, we can transform
        the steel industry, providing the confidence and assurance you need to make informed decisions for your construction projects.
      </Typography>
    </Box>
  </Box>
</Box>
      </Box>
    </Box>
  );
};

export default Our_testing_philosophy;
