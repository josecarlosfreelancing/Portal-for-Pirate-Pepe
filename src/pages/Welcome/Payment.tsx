import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Payment = (props: any) => {
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
                <Box src="/images/logo-bottom.svg" sx={{ maxWidth: '100%' }} component="img" />
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
                        fontSize: { md: 52, sm: 48, xs: 40 },
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
                        py: 3,
                        px: { sm: 10, xs: 0 },
                        width: { xs: '100%', sm: 'unset' }
                    }}
                    onClick={props.handleOpen}
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
