import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const Logo = styled("img")({
  height: "3.5rem", // Adjust the height as needed
  marginRight: "3.5rem",
});

const Navbar = ({ children }) => {
  return (
    <AppBar
      position="relative" // Changed from "static" to "relative"
      sx={{ bgcolor: "background.paper", color: "text.primary" }}
      elevation={0} // Remove the shadow
    >
      <Toolbar>
        <Logo src="logo.png" alt="Logo" />
        <Box sx={{ flexGrow: 1 }} />
        <Box>{children}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
