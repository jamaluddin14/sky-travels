import React from "react";
import { Button, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define each route with a title and path
  const routes = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Tours", path: "/tours" },
    { label: "Auth", path: "/auth" },
  ];

  return (
    <Grid container spacing={2}>
      {routes.map((route) => (
        <Grid item key={route.path}>
          <Button
            variant={location.pathname === route.path ? "contained" : "text"}
            color="primary"
            onClick={() => navigate(route.path)}
            sx={{
              "&:hover": {
                backgroundColor:
                  location.pathname === route.path
                    ? "primary.main"
                    : "secondary.main",
              },
              borderRadius: "1.5rem",
            }}
          >
            {route.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Navigation;
