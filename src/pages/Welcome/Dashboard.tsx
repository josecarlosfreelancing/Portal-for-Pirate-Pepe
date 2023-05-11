import React, { FC, useContext } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard: FC = () => {
  const { login } = useContext(AuthContext);
  return (
    <Box
      sx={{
        position: "relative",
        background: "url(/images/background.svg)",
        backgroundSize: { md: "100% auto", sm: "auto 100%", xs: "auto 100%" },
        backgroundRepeat: "none",
        pt: 12,
        pb: 24,
      }}
    >
      <Box
        maxWidth={1280}
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
              <Button variant="contained" onClick={login}>
                Login
              </Button>
            </Box>
          </Stack>
          <Typography
            variant="h1"
            maxWidth={360}
            sx={{
              textTransform: "uppercase",
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              pb: 2,
            }}
          >
            Sail the High Seas of Crypto with Pirate Pepe
          </Typography>
          <Typography color="warning.main" maxWidth={435}>
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
  );
};

export default Dashboard;
