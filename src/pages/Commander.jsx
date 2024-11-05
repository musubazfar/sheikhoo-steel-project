import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import "../styles/Armour.css";
import img1 from "../assets/commander_imperial.png";
import steel from "../assets/commander.png";
import heading_bg from "../assets/product_heading_background.png";

const Commander = () => {
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
      <Box
        className="productsContent"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box className="leftDiv">
          <Box className="ribbonProducts commanderProduct">
            <img src={steel} alt="Commander Steel" className="overlayImage" />
            <Box className="textContainer">
              <Typography className="productTitleHeading" variant="h2">
                Sheikhoo <br /> Commander
              </Typography>
              <Typography
                className="productTitleDetails"
                variant="h2"
                sx={{ fontSize: '40px !important' }}
              >
                BS 4449
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="rightDiv">
          <motion.div variants={itemVariants} custom={1}>
            <Typography className="textStylesProducts" variant="body1">
              Sheikhoo Commander rebars are purpose-built for ultimate strength and durability, essential for high-rise construction and mega structures. Sheikhoo Commander boasts the characteristics specific to Sheikhoo Steel rebars, tested at multiple stages of preparation, ensuring quality and strength.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants} custom={2}>
            <Typography variant="h2" className="headingsProducts" sx={{ color: '#423175' }}>
              Specifications
            </Typography>
            <Box component="ul">
              <motion.li variants={itemVariants} custom={3}>
                <Typography variant="body2" className="textStylesProducts">
                  Minimum Yield Strength: 72,500 psi (500 MPa)
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={4}>
                <Typography variant="body2" className="textStylesProducts">
                  Minimum Tensile Strength: 88,000 psi (607 MPa)
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={5}>
                <Typography variant="body2" className="textStylesProducts">
                  Revised British Standard 2016
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={6}>
                <Typography variant="body2" className="textStylesProducts">
                  Steel Category: G500 = British Standard
                </Typography>
              </motion.li>
            </Box>
          </motion.div>
          <motion.div variants={itemVariants} custom={7}>
            <Typography variant="h2" className="headingsProducts" sx={{ color: "#423175" }}>
              Features
            </Typography>
            <Box component="ul">
              <motion.li variants={itemVariants} custom={8}>
                <Typography variant="body2" className="textStylesProducts">
                  Homogenized and Pure
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={9}>
                <Typography variant="body2" className="textStylesProducts">
                  Even weight distribution
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={10}>
                <Typography variant="body2" className="textStylesProducts">
                  High welding ability, translating into saving on construction costs
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={11}>
                <Typography variant="body2" className="textStylesProducts">
                  Resistant to all weather conditions
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={12}>
                <Typography variant="body2" className="textStylesProducts">
                  Superior bonding with concrete owing to sharp, protruding rib structure
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={13}>
                <Typography variant="body2" className="textStylesProducts">
                  Highly flexible without compromising strength
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={14}>
                <Typography variant="body2" className="textStylesProducts">
                  Fabrication-friendly
                </Typography>
              </motion.li>
              <motion.li variants={itemVariants} custom={15}>
                <Typography variant="body2" className="textStylesProducts">
                  Better ton per foot ratio for maximum economy
                </Typography>
              </motion.li>
            </Box>
          </motion.div>
          <Box className="imageSectionProducts">
            <div className="imageContainer">
              <motion.img src={heading_bg} alt="Heading Background" className="imperial_size" whileHover={{ scale: 1.05 }} />
              <span className="overlayText" style={{ color: '#423175' }}>IMPERIAL SIZES</span>
            </div>
            <motion.img src={img1} alt="Product Image 1" whileHover={{ scale: 1.05 }} />
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Commander;
