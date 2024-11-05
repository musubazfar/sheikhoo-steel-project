import { Box, Typography } from "@mui/material";
import React from "react";
import "../styles/Sustainability.css";
import img_1 from "../assets/sustainability-img-1.png";
import img_2 from "../assets/sustainability-img-2.png";

export default function Sustainability() {
  return (
    <Box className="sustainability-container">
      <Box className="sst-production-container">
        <Box className="img-container">
          <Typography className="img-heading">
            Sustainable <br /> Steel Production
          </Typography>
          <img src={img_1} alt="sustainable-steel" style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box className="descriptionText">
          <Typography className="headingTexts">POWER GENERATION</Typography>
          <Typography className="detailedText">
            Making steel is a power-hungry process, with high requirements for power input. Sheikhoo Steel reuses power output from our associated Sheikhoo Sugar
            operations, closing the loop of power circulation, curtailed in an optimum energy system.
          </Typography>
          <Typography className="detailedText">
            As a leading Steel Manufacturer in Pakistan, Sheikhoo Steel Mill is committed to safeguarding the environment and fighting climate change. We use sustainable
            business practices and cutting-edge technologies to increase efficiency and reduce harmful GHG emissions. By using indigenous Bio Mass as an energy source, we
            are saving up to 1,000 tons of bagasse per day, which translates to a reduction of 708.24 tons of CO2 and 162.3 tons of NO2.
          </Typography>
          <Typography className="headingTexts" sx={{ mt: "2rem" }}>
            DEDICATED POWER CAPACITY
          </Typography>
          <Typography className="detailedText">22.5 Mega Watt Power Plant installed for feeding dedicated power to Shiekhoo Steel.</Typography>
          <Typography className="detailedText">Plans for installing an additional 35 Mega Watt Power Plant is underway to meet growing industry demands.</Typography>
        </Box>
      </Box>
      <Box className="sst-production-container">
        <Box className="img-container">
          <Typography className="img-heading">Transforming<br/>Steel Industry<br/>for a Better Future</Typography>
          <img src={img_2} alt="sustainable-steel" style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box className="descriptionText">
          <Typography className="headingTexts">Leading the Charge Towards Greener Steelmaking</Typography>
          <Typography className="detailedText">
            Sheikhoo Steel is taking necessary step forward in the steel industry by striving to become the first company in the region to reduce toxic emissions and
            prioritize the health and well-being of the community. As a responsible corporate company, we recognize the urgent need for action to preserve the environment
            and ensure the sustainability of our planet.
          </Typography>
          <Typography className="headingTexts" sx={{ mt: "2rem" }}>
            Eco-Friendly Machines:
            <br />
            Protecting Our Community
          </Typography>
          <Typography className="detailedText">
            To achieve this goal, Sheikhoo Steel has invested in cutting-edge, eco-friendly machines that minimize our environmental impact and safeguard the health of
            our community. Our state-of-the-art Air Pollution Control System (APC) is a prime example of this. By effectively capturing and cleaning polluted air, our APC
            technology releases less than 50 micron smoke, adhering to strict international standards.
          </Typography>
          <Typography className="headingTexts" sx={{ mt: "2rem" }}>
          Water Conservation:
          <br/>
          Keeping Our Planet Green
          </Typography>
          <Typography className="detailedText">
          Our water conservation machine is designed to conserve the water used in the creation of steel by reusing and recirculating it within the system. By doing so, we’re not only supporting conservation efforts but also ensuring sustainable production practices for the future.
          </Typography>
          <Typography className="detailedText">
          At Sheikhoo Steel, we believe that the future is what we make it. That’s why we’re dedicated to creating a better world for ourselves and future generations through our commitment to sustainable steelmaking practices.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
