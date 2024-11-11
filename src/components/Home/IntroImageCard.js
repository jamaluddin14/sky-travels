import React from "react";
import { Card, CardMedia, Box } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const IntroImageCard = ({ src, isVideo, ...props }) => (
  <Card {...props}>
    <CardMedia
      component="img"
      image={src}
      alt="Travel Destination"
      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    {isVideo && (
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          opacity: 0.7,
        }}
      >
        <PlayCircleIcon fontSize="large" />
      </Box>
    )}
  </Card>
);

export default IntroImageCard;
