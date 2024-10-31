import { Box, Typography } from "@mui/material";
import React from "react";
import "../styles/Armour.css";
import img1 from "../assets/imperial_size_defender.png";
import img2 from "../assets/matric_size_defender.png";
import steel from "../assets/defender.png";
import heading_bg from "../assets/product_heading_background.png";

const Defender = () => {
  return (
    <main className="main-content">
      <Box className="productsContent">
        <Box className="leftDiv">
          <Box className="ribbonProducts defenderProduct">
            <img src={steel} alt="" className="overlayImage" />
            <Box className="textContainer">
              <Typography className="productTitleHeading" variant="h2">
                Sheikhoo <br /> Defender
              </Typography>
              <Typography className="productTitleDetails" variant="h2">
                ASTM 706
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="rightDiv">
          <Typography className="textStylesProducts" variant="body1">
            Sheikhoo Defender rebars are built to withstand and resist pressures
            from earthquakes and shocks. They are made to more flexible, ready
            to be deformed without losing strenght, and demonstrate high
            wielding abilit resulting in lessening construction costs. This
            makes them an ideal choice for construction in earthquake-prone
            areas.
          </Typography>
          <Typography className="textStylesProducts" variant="body1">
            Sheikhoo Defender rebars comply with American Standard for Testing
            Material (ASTM) A_706/A-706M
          </Typography>
          <Typography
            variant="h2"
            className="headingsProducts"
            sx={{ color: "#1245bd" }}
          >
            Specifications
          </Typography>
          <Box component="ul">
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Minimum Yield Strength: 60,000 psi (420 MPa)
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Maximum Yield Strength: 78,000 psi (540 MPa)
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Minimum Tensile Strength: 80,000 psi (550 MPa)
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >{`Tensile to Yield Strength Ratio > 1.25`}</Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >{`W60 = Low Alloy Steel A706`}</Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >{`Minimum Bar Elongation: 10% - 14%`}</Typography>
          </Box>
          <Typography
            variant="h2"
            className="headingsProducts"
            sx={{ color: "#1245bd" }}
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
              Resistant to tremors and shocks, such as earthquakes
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
              Highly flexibility without compromising strength
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Superior bonding with concrete owing to sharp, protruding rib
              structure
            </Typography>
            <Typography
              component="li"
              variant="body2"
              className="textStylesProducts"
            >
              Weldable and fabrication-friendly
            </Typography>
          </Box>
          <Box className="imageSectionProducts">
            <div className="imageContainer">
              <img src={heading_bg} alt="" className="imperial_size" />
              <span className="overlayText" style={{color: '#1245bd'}}>IMPERIAL SIZES</span>
            </div>
            <img src={img1} alt="Product Image 1" />
            <div className="imageContainer">
              <img src={heading_bg} alt="" className="imperial_size" />
              <span className="overlayText" style={{color: '#1245bd'}}>METRIC SIZES</span>
            </div>
            <img src={img2} alt="Product Image 2" />
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Defender;
