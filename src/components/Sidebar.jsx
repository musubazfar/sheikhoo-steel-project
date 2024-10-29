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
import { ExpandMore, ExpandLess, Close } from "@mui/icons-material";
import logo from "../assets/logo.png";
import "../styles/sidebar.css";

export default function Sidebar({ open, toggleDrawer }) {
  const [openTechSubmenu, setOpenTechSubmenu] = React.useState(false); // State to manage technology submenu
  const [openProductsSubmenu, setOpenProductsSubmenu] = React.useState(false); // State to manage products submenu

  const handleToggleTechSubmenu = () => {
    setOpenTechSubmenu(!openTechSubmenu);
  };

  const handleToggleProductsSubmenu = () => {
    setOpenProductsSubmenu(!openProductsSubmenu);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <Box className="logo-sidebar">
        <Link
          to="/"
          onClick={() => toggleDrawer(false)}
          style={{ display: "inline-block" }}
        >
          <img
            src={logo}
            alt="Sheikhoo-steel-logo"
            style={{ cursor: "pointer" }} // Add pointer to indicate it's clickable
          />
        </Link>
        <Close
          sx={{cursor: "pointer" }}
          onClick={() => toggleDrawer(false)}
        />
      </Box>
      <Divider />
      <List sx={{ marginTop: 5 }}>
        {/* Our Technology */}
        <ListItem disablePadding>
          <ListItemButton
            className="list-item-button"
            onClick={handleToggleTechSubmenu}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {openTechSubmenu ? <ExpandLess /> : <ExpandMore />}
              <Typography
                sx={{ fontSize: 20, fontWeight: 600, marginLeft: 1 }}
                variant="body1"
              >
                Our Technology
              </Typography>
            </Box>
          </ListItemButton>
        </ListItem>
        <Collapse in={openTechSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              component={Link}
              to="/technology/melting-section"
              onClick={() => toggleDrawer(false)}
            >
              <ListItemButton className="list-item-button">
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "black",
                    "&:hover": { color: "red" },
                  }}
                  variant="body2"
                >
                  Melting Section
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              component={Link}
              to="/technology/rolling-section"
              onClick={() => toggleDrawer(false)}
            >
              <ListItemButton className="list-item-button">
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "black",
                    "&:hover": { color: "red" },
                  }}
                  variant="body2"
                >
                  Rolling Section
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        {/* Products with Subcategories */}
        <ListItem disablePadding>
          <ListItemButton
            className="list-item-button"
            onClick={handleToggleProductsSubmenu}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {openProductsSubmenu ? <ExpandLess /> : <ExpandMore />}
              <Typography
                sx={{ fontSize: 20, fontWeight: 600, marginLeft: 1 }}
                variant="body1"
              >
                Products
              </Typography>
            </Box>
          </ListItemButton>
        </ListItem>
        <Collapse in={openProductsSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              component={Link}
              to="/products/amour"
              onClick={() => toggleDrawer(false)}
            >
              <ListItemButton className="list-item-button">
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "black",
                    "&:hover": { color: "red" },
                  }}
                  variant="body2"
                >
                  Amour
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              component={Link}
              to="/products/defender"
              onClick={() => toggleDrawer(false)}
            >
              <ListItemButton className="list-item-button">
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "black",
                    "&:hover": { color: "red" },
                  }}
                  variant="body2"
                >
                  Defender
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              component={Link}
              to="/products/commander"
              onClick={() => toggleDrawer(false)}
            >
              <ListItemButton className="list-item-button">
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "black",
                    "&:hover": { color: "red" },
                  }}
                  variant="body2"
                >
                  Commander
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        {/* Other Menu Items */}
        {[
          "About Us",
          "Our Testing Philosophy",
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
              <Typography
                sx={{ fontSize: 20, fontWeight: 600 }}
                variant="body1"
              >
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
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        ModalProps={{
          keepMounted: false, // Keep the drawer mounted to manage inert properly
        }}
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          inert={!open ? "true" : undefined} // Apply 'inert' when closed
        >
          {DrawerList}
        </Box>
      </Drawer>
    </div>
  );
}
