import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Payment = () => {
    return (
        <Box 
            sx={{
                py: 5,
                pb: 9
            }}
        >
            <Stack 
                justifyContent="center" 
                alignItems="center"
            >
                <Box src="/images/logo-bottom.svg" component="img" />
                <Typography 
                    variant="h1" 
                    sx={{ 
                        pt: 2,
                        fontWeight: 500, 
                        textAlign: 'center' 
                    }}
                >Pirate Pepe Will Launch After First</Typography>
                <Typography 
                    sx={{ 
                        pt: 3,
                        fontSize: '58px !important',
                        fontWeight: 700,
                        textAlign: 'center', 
                        color: "#FFD53E"
                    }}
                >1,000</Typography>
                <Typography 
                    variant="subtitle1"
                    sx={{ 
                        pt: 2,
                        pb: 3,
                        textAlign: 'center' 
                    }}
                >Subscribers</Typography>
                <Button
                    variant="contained"
                    color='warning'
                    sx={{
                        bgcolor: '#FFD53E',
                        px: 10,
                        py: 3
                    }}
                >
                    <Typography 
                        variant="subtitle1"
                        sx={{ 
                            textTransform: 'uppercase' 
                        }}
                    >Join Now</Typography>
                </Button>
            </Stack>
        </Box>
    )
}

export default Payment;
