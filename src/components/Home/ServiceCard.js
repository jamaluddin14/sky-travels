import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const GradientBorderCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  borderRadius: 8,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "2px", // Minimal width for bottom border
    width: "100%",
    background: "linear-gradient(to right, transparent, #3290DE)", // Gradient for the bottom border
  },
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "2px", // Minimal width for right border
    height: "100%",
    background: "linear-gradient(to bottom, transparent, #3290DE)", // Gradient for the right border
  },
});

const IconWrapper = styled(Box)({
  width: 60,
  height: 60,
  borderRadius: "50%",
  backgroundColor: "#3290DE",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 16,
});

const ServiceCard = ({ icon, title, description }) => {
  return (
    <GradientBorderCard
      variant="outlined"
      sx={{
        maxWidth: "16rem", // Smaller max width
        maxHeight: "13rem", // Smaller max height
        padding: "1rem", // Reduced padding
        textAlign: "center",
        borderRadius:"5rem",
        margin: "auto", // Ensures card is centered within its Grid item
      }}
    >
      <CardContent>
        <IconWrapper>{icon}</IconWrapper>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{padding:"0.3rem"}}>
          {description}
        </Typography>
      </CardContent>
    </GradientBorderCard>
  );
};

export default ServiceCard;
