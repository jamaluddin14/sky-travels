import React from 'react';
import { Typography, Box } from '@mui/material';

const ImageCard = ({ src, text }) => {
    return (
        <div style={{ position: 'relative', width: '105%', height: '25rem' }}>
            <img
                src={src}
                alt="Card Image"
                style={{ width: '100%', height: '25rem', objectFit: 'cover' }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                }}
            >
                <Typography variant="h4" color="inherit"  sx={{fontWeight:"bold"}}>
                    {text}
                </Typography>
            </Box>
        </div>
    );
};

export default ImageCard;
