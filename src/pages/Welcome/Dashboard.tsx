import React, { FC, useContext } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { AuthContext } from "../../providers/AuthProvider";
import { useWeb3React } from "@web3-react/core";

const Dashboard: FC = () => {
  const { login } = useContext(AuthContext);
  const { account } = useWeb3React();

  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Box
        component="img"
        src="/images/background-update.svg"
        sx={{
          width: '100%',
          visibility: 'hidden',
          display: { md: 'block', xs: 'none' }
        }}
      ></Box>
      <Box
        sx={{
          position: { md: "absolute", xs: 'relative' },
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: "url(/images/background-update.svg)",
          backgroundPosition: 'top right',
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          pt: { xs: 8, lg: '6vw' },
          pb: 24,
        }}
      >
        <Box
          maxWidth={{ md: 1280, lg: '70vw' }}
          position="relative"
          mx="auto"
          px={{ md: 13.5, sm: 2, xs: 2 }}
          zIndex={1}
        >
          <Box>
            <Stack
              flexDirection={{ sm: "row", xs: "column" }}
              justifyContent="space-between"
            >
              <Box>
                <Box
                  src="/images/logo.png"
                  component="img"
                  sx={{ position: "relative", left: -20 }}
                />
              </Box>
              <Box py={{ sm: 3, xs: 2 }}>
                <Button
                  variant="contained"
                  color='warning'
                  sx={{
                    bgcolor: '#FFD53E',
                    py: 2,
                    px: { sm: 7, xs: 0 },
                    width: { xs: '100%', sm: 'unset' },
                    border: '1px solid #000'
                  }}
                  onClick={login}
                >
                  <Typography 
                    variant="subtitle1"
                    sx={{ 
                      textTransform: 'uppercase' 
                    }}
                  >{ account ? "Login" : "Connect Wallet" }</Typography>
                </Button>
                {/* <Button variant="contained" color="success">
                  Connect Wallet
                </Button> */}
              </Box>
            </Stack>
            <Typography
              maxWidth={540}
              sx={{
                fontSize: { md: 52, sm: 48, xs: 40 },
                fontFamily: 'Nugie Romantic',
                fontWeight: 400,
                textTransform: 'capitalize',
                lineHeight: { md: '52px', sm: '48px', xs: '40px' },
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                pb: 2,
              }}
            >
              Sail the High Seas of Crypto with Pirate Pepe
            </Typography>
            <Typography 
              variant="subtitle1" 
              fontWeight={400} 
              lineHeight={1.15} 
              maxWidth={576}
            >
              Enjoy lifetime access to all the premium content published by the
              industry’s top research products including:
            </Typography>
          </Box>
        </Box>
        <Box
          height={331}
          position="absolute"
          bottom={0}
          width="100%"
          sx={{
            background:
              "linear-gradient(180deg, rgba(0, 9, 0, 0) 0%, #000900 100%)",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
