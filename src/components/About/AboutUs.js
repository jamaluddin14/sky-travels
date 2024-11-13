import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio
    transition: 'transform 0.5s ease',
    '&:hover': {
        transform: 'scale(1.1)',
    },
    objectFit: 'cover',
}));

const AboutUs = () => {
    return (
        <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={12} md={6}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h4">
                            Who <Typography variant="h4" color="primary" component="span">We Are?</Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            Sky Tours is all about creating unforgettable experiences for our guests. Our journey began with a simple passion for exploring the beauty of the World.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">
                            Our <Typography variant="h4" color="primary" component="span">Mission</Typography>
                        </Typography>
                        <Typography variant="body1">
                            We believe that travel is not just about visiting new places, but about immersing yourself in new cultures, connecting with nature, and making memories that last a lifetime.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <StyledCardMedia
                        image="about-us.png"
                        title="About Us"
                    />
                </Card>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
