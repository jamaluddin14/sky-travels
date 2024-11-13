import React from 'react';
import { Box, Typography, Grid, IconButton, Link, useMediaQuery, useTheme } from '@mui/material';
import { YouTube, Twitter, Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
    const textColor = '#85B3D2';
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                backgroundColor: '#fff', // White background
                color: '#000', // Black text
                p: 0, // Padding
                mt: 5,
            }}
        >
            <Grid container spacing={isSmallScreen ? 4 : 2} justifyContent="center">
                <Grid item xs={12} sm={4} textAlign="center">
                    <Box component="img" src="logo.png" alt="Sky Tours Logo" sx={{ height: 40 }} />

                    <Box sx={{ mt: 1 }}>
                        <IconButton color="primary" href="#">
                            <YouTube />
                        </IconButton>
                        <IconButton color="primary" href="#">
                            <Twitter />
                        </IconButton>
                        <IconButton color="primary" href="#">
                            <Facebook />
                        </IconButton>
                        <IconButton color="primary" href="#">
                            <Instagram />
                        </IconButton>
                    </Box>
                </Grid>

                {/* Discover Links Section */}
                <Grid item xs={12} sm={2} textAlign={isSmallScreen ? 'center' : 'left'}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: textColor }}>
                        Discover
                    </Typography>
                    <Link href="/" color="#85B3D2" underline="hover">
                        Home
                    </Link>
                    <br />
                    <Link href="/about" color="#85B3D2" underline="hover">
                        About
                    </Link>
                    <br />
                    <Link href="/tours" color="#85B3D2" underline="hover">
                        Tours
                    </Link>
                </Grid>

                {/* Quick Links Section */}
                <Grid item xs={12} sm={2} textAlign={isSmallScreen ? 'center' : 'left'}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: textColor }}>
                        Quick Links
                    </Typography>
                    <Link href="#" color={textColor} underline="hover">
                        Gallery
                    </Link>
                    <br />
                    <Link href="#" color={textColor} underline="hover">
                        Login
                    </Link>
                    <br />
                    <Link href="#" color={textColor} underline="hover">
                        Register
                    </Link>
                </Grid>

                {/* Contact Section */}
                <Grid item xs={12} sm={2} textAlign={isSmallScreen ? 'center' : 'left'}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: textColor }}>
                        Contact
                    </Typography>
                    <Typography variant="body2" color={textColor}>123 Street, US</Typography>
                    <Typography variant="body2" color={textColor}>info@skytours.com</Typography>
                    <Typography variant="body2" color={textColor}>00022200222</Typography>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="caption" color="textSecondary">
                    © 2024 <strong style={{ color: '#3290DE' }}>Sky Tours</strong>. All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
