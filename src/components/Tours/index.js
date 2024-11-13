import Grid from "@mui/material/Grid";
import ImageCard from "../PageIntroCard";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import FeaturedTours from "./FeaturedTours";
import Footer from "../Footer";
import Navigation from "../Navigation";

const Tours=()=>{
    return(
        <Grid container direction="column">
            <Grid item>
                <Navbar>
                <Navigation/>
                </Navbar>
            </Grid>
            <Grid item>
                <ImageCard src="tours.jpg" text="All Tours"/>
            </Grid>
            <Grid item sx={{display:"flex", alignItems:"center",padding:"2rem"}}>
                <Grid container spacing={2} justifyContent="center">
                <SearchBar/>
                </Grid>
            </Grid>
            <Grid item>
                <FeaturedTours/>
            </Grid>
            <Grid item>
                <Footer/>
            </Grid>
        </Grid>
    )
}

export default Tours;