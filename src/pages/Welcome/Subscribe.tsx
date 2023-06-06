import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Subscribe = (props : any) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { 
                    lg: 'repeat(2, 1fr)', 
                    md: 'repeat(2, 1fr)', 
                    sm: 'repeat(1, 1fr)', 
                    xs: 'repeat(1, 1fr)'
                }, 
                gridTemplateRows: "repeat(1, 1fr)",
                gap: 2,
            }}
        >
            <Box 
                sx={{
                    bgcolor: '#222222',
                    borderRadius: 1.25 
                }}
            >
                <Box 
                    sx={{
                        p: { sm: 4, xs: 2 }
                    }}
                >
                    <Typography 
                        variant="h2" 
                        textAlign="center"
                    >Get Lifetime Access to the Most Exclusive Research Content in Crypto!</Typography>
                    <Box 
                        sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: { sm: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)' },
                            py: 4,
                            gap: 1.5
                        }}
                    >
                        <Stack 
                            alignItems="center"
                            justifyContent="center"
                            sx={{ 
                                bgcolor: '#A3A3A3', 
                                borderRadius: 1.25, 
                                py: 1.5,
                                color: '#000000'
                            }}
                        >
                            <Box>
                                <Typography 
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        textDecoration: 'line-through'
                                    }}
                                >True Value</Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 700,
                                        textAlign: 'center',
                                        textDecoration: 'line-through'
                                    }}
                                >$65,000</Typography>
                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                        textDecoration: 'line-through',
                                        fontSize: '12px !important'
                                    }}
                                >per year</Typography>
                            </Box>
                        </Stack>
                        <Stack
                            sx={{ 
                                bgcolor: '#FFFFFF', 
                                borderRadius: 1.25, 
                                py: 1.5,
                                color: '#000000'
                            }}
                        >
                            <Box>
                                <Typography 
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 700,
                                        textAlign: 'center',
                                        textTransform: 'uppercase'
                                    }}
                                >Grand Opening Sale</Typography>
                                <Typography 
                                    variant="h3" 
                                    sx={{ 
                                        fontWeight: 700,
                                        textAlign: 'center'
                                    }}
                                >$369</Typography>
                                <Typography 
                                    sx={{ 
                                        textAlign: 'center',
                                        fontSize: '12px !important'
                                    }}
                                >for lifetime</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Stack 
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            pb: 2.5
                        }}
                    >
                        <Typography 
                            sx={{ 
                                textAlign: 'center'
                            }}
                        >Price for lifetime membership will double after first 1,000 subscribers.</Typography>
                    </Stack>
                    <Stack 
                        flexDirection="row" 
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button
                            variant="contained"
                            color="success"
                            sx={{
                                fontWeight: 400,
                                bgcolor: '#00F283',
                                textTransform: 'uppercase',
                                boxShadow: "0px 2px 6px rgba(228, 33, 33, 0.6)",
                                px: { sm: 10, xs: 0 },
                                width: { xs: '100%', sm: 'unset' }
                            }}
                            onClick={props.handleOpen}
                        >Join Now</Button>
                    </Stack>
                </Box>
            </Box>
            <Stack 
                sx={{
                    position: 'relative',
                    pt: { sm: '80%', xs: '100%', md: 0 },
                    backgroundImage: 'url(/images/present.png)',
                    backgroundSize: '100% 100%',
                    backgroundColor: '#B40400',
                    borderRadius: 1.25
                }}>
                <Stack 
                    alignItems='center'
                    justifyContent='center'
                    sx={{ 
                        top: 0,
                        left: 0,
                        position: 'absolute', 
                        width: '100%', 
                        height: '100%',
                        px: 2,
                    }}
                >
                    <Box />
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            textAlign: 'center',
                            fontWeight: 700
                        }}
                    >Current Subscriber Count</Typography>
                    <Typography 
                        sx={{ 
                            fontWeight: 700,
                            textAlign: 'center',
                            fontSize: { md: 52, sm: 48, xs: 40 },
                        }}
                    >236</Typography>
                    <Typography 
                        sx={{ 
                            textAlign: 'center',
                            fontWeight: 400
                        }}
                    >Price Increases After 764 more subscribers</Typography>
                    <Box />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Subscribe;