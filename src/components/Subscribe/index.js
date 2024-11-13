import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const SubscriptionContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#E0F2FE', // Light blue background
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
}));

const SubscribeText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
}));

const SubscribeDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginTop:theme.spacing(2),
}));

function SubscriptionSection() {
    return (
        <SubscriptionContainer>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <SubscribeText variant="h4">
                        Subscribe now to get useful traveling information
                    </SubscribeText>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                placeholder="Enter your email"
                                fullWidth
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: '4px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: '4px' }}>
                                Subscribe
                            </Button>
                        </Grid>
                    </Grid>
                    <SubscribeDescription>
                        Get the latest updates on travel destinations, tips, and tricks.
                    </SubscribeDescription>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="male-tourist.png" // Replace with the actual image path
                        alt="Traveler Image"
                        sx={{
                            maxHeight: '200px',
                            marginLeft: 'auto',
                            display: { xs: 'none', md: 'block' },
                        }}
                    />
                </Grid>
            </Grid>
        </SubscriptionContainer>
    );
}

export default SubscriptionSection;
