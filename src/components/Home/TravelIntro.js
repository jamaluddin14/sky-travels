import React from "react";
import { Typography, Box } from "@mui/material";

const TravelIntro = () => (
  <Box sx={{ maxWidth: 500, textAlign: "left" }}>
    <Typography variant="h4" fontWeight="bold">
      Traveling opens the door to creating{" "}
      <Box component="span" sx={{ color: "#3290DE" }}>
        memories
      </Box>
    </Typography>
    <Typography variant="body1" color="textSecondary" mt={2}>
      Explore vibrant cultures, breathtaking landscapes, and hidden gems.
      Discover new experiences, inspire your senses, and repeat the journey in
      your dreams.
    </Typography>
  </Box>
);

export default TravelIntro;
