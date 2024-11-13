import Grid from '@mui/material/Grid';
import ImageCard from '../PageIntroCard';
import AboutUs from './AboutUs';
import ServiceCard from '../Home/ServiceCard';
import ServicesSection from '../Home/ServiceSection';
import SubscriptionSection from '../Subscribe';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Navigation from '../Navigation';
const About=()=>{
    return(
        <Grid container direction="column">
            <Grid item>
                <Navbar>
                    <Navigation/>
                </Navbar>
            </Grid>
            <Grid item>
                <ImageCard src="about.jpg" text="About Us"/>
            </Grid>
            <Grid item sx={{padding:"1.5rem"}} >
            <AboutUs/>
            </Grid>
            <Grid item sx={{padding:"1.5rem"}}>
                <ServicesSection/>
            </Grid>
            <Grid item>
                <SubscriptionSection/>
            </Grid>
            <Grid item>
                <Footer/>
            </Grid>
        </Grid>
    )
}
export default About;