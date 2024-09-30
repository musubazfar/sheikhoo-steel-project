import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  Typography,
  Collapse,
} from "@mui/material";
import {ExpandMore, ExpandLess} from '@mui/icons-material';
import logo from "../assets/logo.png";
import "../styles/sidebar.css";

export default function Sidebar({ open, toggleDrawer }) {
  const [openSubmenu, setOpenSubmenu] = React.useState(false); // State to manage submenu

  const handleToggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <Box className="logo-sidebar">
        <img src={logo} alt="Sheikhoo-steel-logo" />
      </Box>
      <Divider />
      <List sx={{ marginTop: 5 }}>
        <ListItem disablePadding>
          <ListItemButton className="list-item-button" onClick={handleToggleSubmenu}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {openSubmenu ? <ExpandLess /> : <ExpandMore />}
              <Typography sx={{ fontSize: 20, fontWeight: 600, marginLeft: 1 }} variant="body1">
                Our Technology
              </Typography>
            </Box>
          </ListItemButton>
        </ListItem>
        <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/technology/melting-section" onClick={() => toggleDrawer(false)}>
              <ListItemButton className="list-item-button">
                <Typography sx={{ fontSize: 18, fontWeight: 500, color: 'black', '&:hover': {color:'red'} }} variant="body2">
                  Melting Section
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/technology/rolling-section" onClick={() => toggleDrawer(false)}>
              <ListItemButton className="list-item-button">
                <Typography sx={{ fontSize: 18, fontWeight: 500, color: 'black', '&:hover': {color:'red'} }} variant="body2">
                  Rolling Section
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        {[
  "About Us",
  "Our Testing Philosophy",
  "Products",
  "Sustainability",
  "Contact Us",
].map((text) => (
  <ListItem key={text} disablePadding>
    <ListItemButton
      className="list-item-button"
      component={Link}
      to={`/${text.toLowerCase().replace(/\s+/g, "-")}`} // Replace all spaces with hyphens
      onClick={() => toggleDrawer(false)} // Close drawer for other items
    >
      <Typography sx={{ fontSize: 20, fontWeight: 600 }} variant="body1">
        {text}
      </Typography>
    </ListItemButton>
  </ListItem>
))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
