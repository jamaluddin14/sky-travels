import React from "react";
import Masonry from "@mui/lab/Masonry";
import ImageCard from "./TourImageCard";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const landmarks = [
  {
    src: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Snacks",
  },
  {
    src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    title: "Tower",
  },
  {
    src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    src: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    title: "Tree",
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    src: "https://www.muralunique.com/wp-content/uploads/2020/09/1816r_V_big-ben-in-london.jpg",
    title: "Camera",
  },
  {
    src: "https://www.muralunique.com/wp-content/uploads/2020/09/1816r_V_big-ben-in-london.jpg",
    title: "Coffee",
  },
  {
    src: "https://www.muralunique.com/wp-content/uploads/2020/09/1816r_V_big-ben-in-london.jpg",
    title: "Camping Car",
  },
  {
    src: "https://www.muralunique.com/wp-content/uploads/2020/09/1816r_V_big-ben-in-london.jpg",
    title: "Hats",
  },
  {
    src: "https://www.muralunique.com/wp-content/uploads/2020/09/1816r_V_big-ben-in-london.jpg",
    title: "Tomato basil",
  },
  {
    src: "https://www.muralunique.com/wp-content/uploads/2020/09/1816r_V_big-ben-in-london.jpg",
    title: "Mountain",
  },
  {
    src: "https://www.muralunique.com/wp-content/uploads/2020/09/1816r_V_big-ben-in-london.jpg",
    title: "Bike",
  },
];

function GridLayout() {
  return (
    <Box sx={{ width: "100%"}}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ marginBottom: 2, fontWeight: "bold" }}
      >
        Explore
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        Our Featured tours
      </Typography>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {landmarks.map((landmark, index) => (
          <ImageCard
            key={index}
            src={landmark.src}
            title={landmark.title}
            subtitle={landmark.subtitle}
          />
        ))}
      </Masonry>
    </Box>
  );
}

export default GridLayout;
