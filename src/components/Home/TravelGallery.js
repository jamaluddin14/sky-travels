import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TravelIntro from "./TravelIntro";
import TravelImageCard from "./IntroImageCard";

/**
 * TravelGallery component renders a gallery of travel images and videos.
 * It includes an introductory section and a series of image cards.
 *
 * @component
 * @example
 * return (
 *   <TravelGallery />
 * )
 */
const TravelGallery = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        gap: 3,
      }}
    >
      <TravelIntro />
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: 3,
          paddingLeft: isSmallScreen ? 0 : "5rem",
        }}
      >
        <TravelImageCard
          src="gallery.jpeg"
          isVideo={false}
          sx={{
            width: isSmallScreen ? "100%" : "10rem",
            height: "20rem",
            borderRadius: 3,
            position: "relative",
          }}
        />
        <TravelImageCard
          src="gallery.jpeg"
          isVideo={true}
          sx={{
            width: isSmallScreen ? "100%" : "10rem",
            height: "20rem",
            borderRadius: 3,
            position: "relative",
            top: isSmallScreen ? 0 : "1.25rem",
          }}
        />
        <TravelImageCard
          src="gallery.jpeg"
          isVideo={false}
          sx={{
            width: isSmallScreen ? "100%" : "10rem",
            height: "20rem",
            borderRadius: 3,
            position: "relative",
            top: isSmallScreen ? 0 : "2.5rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default TravelGallery;
