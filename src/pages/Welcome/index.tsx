import React, { FC, useContext } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Dashboard from "./Dashboard";
import Section from "./Section";
import Payment from "./Payment";
import { sections } from "./constant";
import { SectionType } from "./type";
import Subscribe from "./Subscribe";
import Pirate from "./Pirate";
import Confirm from "../../components/Confirm";
import { AuthContext } from "../../providers/AuthProvider";

const Welcome: FC = () => {
  const { open, handleOpen, handleClose } = useContext(AuthContext);
  return (
    <Box>
      <Dashboard />
      <Box
        maxWidth={{ md: 1280, lg: '70vw' }}
        position="relative"
        mx="auto"
        px={{ md: 13.5, sm: 2, xs: 2 }}
      >
        <Stack gap={8} py={8}>
          {sections.map((section: any, key: number) => (
            <Section {...section} handleOpen={handleOpen} open={open} key={key} />
          ))}
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="center"
          position="relative"
          px={13.5}
        >
          <Box
            position="absolute"
            top="50%"
            width="100%"
            height={5}
            bgcolor="success.main"
            zIndex={-1}
          />
          {/* <Divider sx={{ color: "success.main", borderWidth: 2 }} /> */}
          <Box component="img" src="/images/logo.png" />
        </Stack>
        <Pirate />
        <Subscribe handleOpen={handleOpen} />
        <Payment handleOpen={handleOpen} />
        <Confirm 
          open={open}
          handleClose={handleClose}
        />
      </Box>
    </Box>
  );
};

export default Welcome;
