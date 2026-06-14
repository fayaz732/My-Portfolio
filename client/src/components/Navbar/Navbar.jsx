import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Certificates", "Contact"];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        top: section.offsetTop - 80,
        behavior: "auto",
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <div className="navbar-container">
          <Toolbar>
            <Typography variant="h5" className="logo" sx={{ flexGrow: 1 }}>
              Fayaz
            </Typography>

            <div className="desktop-menu">
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  className="nav-btn"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </div>

            <IconButton
              color="inherit"
              className="mobile-menu-btn"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </div>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "drawer-paper",
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection(item.toLowerCase());

                  setOpen(false);
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
