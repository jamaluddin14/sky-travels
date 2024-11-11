import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function ImageCard({ src, title, subtitle }) {
  // Inline styles for dynamic changes
  const cardStyle = {
    position: "relative",
    width: "auto",
    height: "auto",
    overflow: "hidden",
    transition: "transform 0.3s ease", // Adding transition for the card
    "&:hover": {
      // Hover effect for the Card
      transform: "scale(1.05)", // Adjust scale to your preference
    },
  };

  const mediaStyle = {
    height: "100%", // Ensure it covers full card height
    width: "100%", // Ensure it covers full card width
    objectFit: "cover", // Cover the area without distortion
    transition: "filter 0.3s ease", // Transition for filter only
    filter: "brightness(50%)",
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
    opacity: 1,
  };

  return (
    <Card
      sx={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.querySelector(".media").style.filter =
          "brightness(100%)";
        e.currentTarget.querySelector(".overlay").style.opacity = 0;
      }}
      onMouseOut={(e) => {
        e.currentTarget.querySelector(".media").style.filter =
          "brightness(50%)";
        e.currentTarget.querySelector(".overlay").style.opacity = 1;
      }}
    >
      <CardMedia
        component="img"
        image={src} // Replace with your image path
        alt={title}
        className="media"
        sx={mediaStyle}
      />
      <Box className="overlay" sx={overlayStyle}>
        <Typography
          component="h1"
          sx={{ fontFamily: "Island Moments", fontSize: "3rem" }}
        >
          {title}
        </Typography>
        <Typography
          component="h2"
          sx={{ fontFamily: "Montserat", fontSize: "1.5rem" }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Card>
  );
}

export default ImageCard;
