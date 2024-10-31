import { Box, Typography } from "@mui/material";
import React from "react";
import "../styles/Armour.css";
import img1 from "../assets/commander_imperial.png";
import steel from "../assets/commander.png";
import heading_bg from "../assets/product_heading_background.png";

const Commander = () => {
  return (
    <main>
      <Box className="productsContent">
        <Box className="leftDiv">
          <Box className="ribbonProducts commanderProduct">
            <img src={steel} alt="" className="overlayImage" />
            <Box className="textContainer">
              <Typography className="productTitleHeading" variant="h2">
                Sheikhoo <br /> Commander
              </Typography>
              <Typography className="productTitleDetails" variant="h2" sx={{fontSize: '40px !important'}}>
                BS 4449
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="rightDiv">
          <Typography className="textStylesProducts" variant="body1">
          Sheikhoo Commander rebars are purpose-built for ultimate strength and durability, an essential for high-rise construction and mega structures. Sheikhoo Commander boasts the characteristics specific to Sheikhoo Steel rebars, which are tested at runtime at multiple stages of preparation, ensuring quality and strength you can only expect from the best.
          </Typography>
          <Typography
            variant="h2"
            className="headingsProducts"
            sx={{color: '#423175'}}
          >
            Specifications
          </Typography>
          <Box component="ul">
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Minimum Yield Strength: 72,500 psi (500 MPa)
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Minimum Tensile Strength: 88,000 psi (607 MPa)
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Revised British Standard 2016
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >{`Steel Category: G500 = British Standard`}</Typography>
          </Box>
          <Typography
            variant="h2"
            className="headingsProducts"
            sx={{ color: "#423175" }}
          >
            Features
          </Typography>
          <Box component="ul">
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Homogenized and Pure
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Even weight distribution
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              High wielding ability, translating into saving on construction costs
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Resistant to all weather conditions
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Superior bonding with concrete owing to sharp, protruding ribstructure
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Highly flexibility without compromising strength
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Fabrication-friendly
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Better ton per foot ratio for maximum economy
            </Typography>
          </Box>
          <Box className="imageSectionProducts">
            <div className="imageContainer">
              <img src={heading_bg} alt="" className="imperial_size" />
              <span className="overlayText" style={{color: '#423175'}}>IMPERIAL SIZES</span>
            </div>
            <img src={img1} alt="Product Image 1" />
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Commander;
