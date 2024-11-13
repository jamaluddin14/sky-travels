import Grid from "@mui/material/Grid";
import TourImageCard from "../Home/TourImageCard";
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
const FeaturedTours = () => {
    const getGridSize = (index) => {
        if (index % 5 === 0 || index % 5 === 1) {
            return { xs: 12, sm: 6, md: 6 };
        } else {
            return { xs: 12, sm: 6, md: 4 };
        }
    };

    return (
        <Grid container spacing={2} sx={{padding:"7.5rem"}}>
            {landmarks.map((landmark, index) => {
                const gridSize = getGridSize(index);
                return (
                    <Grid item key={index} xs={gridSize.xs} sm={gridSize.sm} md={gridSize.md} sx={{maxHeight:"20rem",maxWidth:"5rem"}}>
                        <TourImageCard src={landmark.src} title={landmark.title} width="100%" height="100%" />
                    </Grid>
                );
            })}
        </Grid>
    );
}
export default FeaturedTours;