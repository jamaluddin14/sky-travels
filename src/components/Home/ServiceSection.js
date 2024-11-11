import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import WeatherIcon from "@mui/icons-material/WbSunny";
import TourIcon from "@mui/icons-material/TravelExplore";
import CustomizationIcon from "@mui/icons-material/Build";

const ServicesSection = () => {
  const services = [
    {
      icon: <WeatherIcon style={{ color: "#fff" }} />,
      title: "Calculate Weather",
      description:
        "Get 7-day forecasts, real-time updates, and travel advisories.",
    },
    {
      icon: <TourIcon style={{ color: "#fff" }} />,
      title: "Best Tour Guide",
      description:
        "Knowledgeable guides, personalized tours, unforgettable experiences.",
    },
    {
      icon: <CustomizationIcon style={{ color: "#fff" }} />,
      title: "Customization",
      description: "From budget to luxury, we customize to your travel style.",
    },
  ];

  return (
    <Box sx={{ paddingTop: "4rem" }}>
      <Grid container spacing={0.5} alignItems="center">
        {/* Text Section */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "#3290DE", fontWeight: "bold", mb: 1 }}
          >
            What we serve
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 2 }}>
            We offer our best services
          </Typography>
        </Grid>

        {/* Cards Section */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={0.5} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesSection;
