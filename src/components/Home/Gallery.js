import Masonry from "@mui/lab/Masonry";
import { CardMedia, Grid, Typography } from "@mui/material";
const travelImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // Santorini, Greece
    'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',     // Kyoto, Japan
    'https://images.unsplash.com/photo-1546530967-1f7aa1b6f8e0',     // Machu Picchu, Peru
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',  // Banff National Park, Canada
    'https://images.unsplash.com/photo-1506807803488-8eafc15316c9',  // Venice, Italy
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d',  // Great Wall of China
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',  // Sydney Opera House, Australia
    'https://images.unsplash.com/photo-1523978591478-c753949ff840',  // Pyramids of Giza, Egypt
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',  // Grand Canyon, USA
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'   // Bali, Indonesia
  ];

const Gallery=()=>{
    return(
        <Grid container direction={"column"}> 
        <Grid item>
        <Typography
        variant="h4"
        color="primary"
        sx={{ marginBottom: 2, fontWeight: "bold" }}
      >
        Gallery
      </Typography>
        </Grid>
        <Grid item>
        <Typography>
            Visit our customers tour gallery
        </Typography>
        </Grid>
        <Grid item sx={{mt:"1rem"}}>
            <Masonry columns={4} spacing={2}>
                {travelImages.map((image, index) => (
                    <CardMedia key={index} component="img" image={image} alt="travel" />
                ))}
            </Masonry>
        </Grid>
        </Grid>
    )
}
export default Gallery