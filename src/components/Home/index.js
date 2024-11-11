import { Grid, useMediaQuery, useTheme } from "@mui/material";
import TravelGallery from "./TravelGallery";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import ServicesSection from "./ServiceSection";
import GridLayout from "./Explore";
const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "7.5rem" }}>
        <TravelGallery />
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "7.5rem" }}>
        <SearchBar />
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "7.5rem" }}>
        <ServicesSection />
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "7.5rem" }}>
        <GridLayout />
      </Grid>
    </Grid>
  );
};

export default Home;
