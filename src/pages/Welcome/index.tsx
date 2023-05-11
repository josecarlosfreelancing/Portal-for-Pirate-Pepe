import React, { FC } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Dashboard from "./Dashboard";
import Section from "./Section";
import Payment from "./Payment";
import { sections } from "./constant";
import { SectionType } from "./type";
import Subscribe from "./Subscribe";
import Pirate from "./Pirate";

const Welcome: FC = () => {
  return (
    <Box>
      <Dashboard />
      <Box
        maxWidth={1280}
        position="relative"
        mx="auto"
        px={{ md: 13.5, sm: 2, xs: 2 }}
      >
        <Stack gap={8} py={8}>
          {sections.map((section: SectionType, key: number) => (
            <Section {...section} key={key} />
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
        <Subscribe />
        <Payment />
      </Box>
    </Box>
  );
};

export default Welcome;
