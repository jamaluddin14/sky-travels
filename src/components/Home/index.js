import { Grid, useMediaQuery, useTheme } from "@mui/material";
import TravelGallery from "./TravelGallery";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import ServicesSection from "./ServiceSection";
import GridLayout from "./Explore";
import ExperienceSection from "./ExperienceSection";
import Gallery from "./Gallery";
import CustomerFeedbackSection from "./FeedbackSection";
import SubscriptionSection from "../Subscribe";
import Footer from "../Footer";
import Navigation from "../Navigation";
const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item>
        <Navbar >
          <Navigation/>
        </Navbar>
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "1.5rem" }}>
        <TravelGallery />
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "1.5rem" }}>
        <SearchBar />
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "1.5rem" }}>
        <ServicesSection />
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "1.5rem" }}>
        <GridLayout />
      </Grid>
      <Grid item sx={{padding:isSmallScreen?"2rem":"1.5rem"}}>
        <ExperienceSection/>
      </Grid>
      <Grid item sx={{padding:isSmallScreen?"2rem":"1.5rem"}}>
        <Gallery/>
      </Grid>
      <Grid item sx={{ padding: isSmallScreen ? "2rem" : "1.5rem" }}>
        < CustomerFeedbackSection/>
      </Grid>
      <Grid item >
        <SubscriptionSection/>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
