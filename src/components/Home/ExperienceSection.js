import React from 'react';
import { Grid, Typography, Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const StatisticBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#3290DE',
    color: theme.palette.common.white,
    fontWeight: 'bold',
}));

function ExperienceSection() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid
            container
            spacing={8}
            direction={isSmallScreen ? 'column' : 'row'}
            alignItems="center"
            justifyContent="space-around"
            textAlign={isSmallScreen ? 'center' : 'left'}
        >
            <Grid item xs={12} sm={6}>
                <Typography variant="h4" gutterBottom>
                    With our all experience we will serve you
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Our experts tailor journeys with precision and dedication
                </Typography>
                <Grid container spacing={5} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={4}>
                        <StatisticBox elevation={3}>
                            <Typography variant="h6">12k+</Typography>
                            <Typography variant="body2">Successful trips</Typography>
                        </StatisticBox>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <StatisticBox elevation={3}>
                            <Typography variant="h6">2k+</Typography>
                            <Typography variant="body2">Regular clients</Typography>
                        </StatisticBox>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <StatisticBox elevation={3}>
                            <Typography variant="h6">15</Typography>
                            <Typography variant="body2">Years of experience</Typography>
                        </StatisticBox>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img
                    src="service.png"
                    alt="Traveler Image"
                    style={{
                        maxWidth: '100%',
                        borderRadius: '0',
                        marginTop: isSmallScreen ? '16px' : '0',
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default ExperienceSection;
