import React from 'react';
import { Box, Grid, Typography, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/system';

const FeedbackContainer = styled(Box)(({ theme }) => ({
    textAlign: 'left',
}));

const FeedbackText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
    height: '7rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}));

const FeedbackCard = styled(Paper)(({ theme }) => ({

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
}));

const CustomerName = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
}));

function CustomerFeedbackSection() {
    const feedbacks = [
        {
            text: "Sky Tours demonstrated genuine care through personalized service! Mark, our travel expert, crafted an itinerary aligning perfectly with our interests. Every detail was meticulously considered.",
            name: "John Deep",
            role: "Customer",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            text: "Discovering Southeast Asia's hidden gems with Sky Tours was incredible! Amanda, our guide, shared local secrets and made us feel immersed.",
            name: "Ally Gomez",
            role: "Customer",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            text: "Last-minute changes to our itinerary were handled flawlessly by Sky Tours' customer support! Rachel's prompt responses saved our trip. We're grateful for her expertise and dedication.",
            name: "Alex Bugg",
            role: "Customer",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        }
    ];

    return (
        <FeedbackContainer>
             <Typography
        variant="h4"
        color="primary"
        sx={{ marginBottom: 2, fontWeight: "bold" }}
      >
        Customer Feedback
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        What our customers say about us
      </Typography>
            
            <Grid container spacing={3} justifyContent="center">
                {feedbacks.map((feedback, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <FeedbackCard>
                        <FeedbackText variant="subtitle1">
                {feedback.text}
            </FeedbackText>
                            <Avatar src={feedback.avatar} alt={feedback.name} sx={{ width: 60, height: 60 }} />
                            <CustomerName variant="h6" >{feedback.name}</CustomerName>
                            <Typography variant="body2" color="textSecondary">
                                {feedback.role}
                            </Typography>
                        </FeedbackCard>
                    </Grid>
                ))}
            </Grid>
        </FeedbackContainer>
    );
}

export default CustomerFeedbackSection;
