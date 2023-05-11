import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const PirateCard: FC = (props: any) => {
  return (
    <Box
      bgcolor={props.color}
      flex={1}
      py={{ md: 5, sm: 3, xs: 3 }}
      px={{ md: 6, sm: 4, xs: 4 }}
      borderRadius={1}
      position="relative"
    >
      <Typography variant="h4" color="background.default">
        {props.content}
      </Typography>
      <Box
        position="absolute"
        bottom={{ md: -38, sm: -19, xs: -19 }}
        right={{ md: 20, sm: 10, xs: 10 }}
        width={{ md: 84, sm: 42, xs: 42 }}
        height={{ md: 84, sm: 42, xs: 42 }}
        bgcolor="background.default"
        borderRadius="50%"
        border={{
          md: `6px solid ${props.color}`,
          sm: `3px solid ${props.color}`,
          xs: `3px solid ${props.color}`,
        }}
        p={2}
      >
        <Box
          component="img"
          src={props.image}
          position="absolute"
          top={{
            md: "calc(50% - 20px)",
            sm: "calc(50% - 10px)",
            xs: "calc(50% - 10px)",
          }}
          left={{
            md: "calc(50% - 20px)",
            sm: "calc(50% - 10px)",
            xs: "calc(50% - 10px)",
          }}
          width={{ md: 40, sm: 20, xs: 20 }}
        />
      </Box>
    </Box>
  );
};

export default PirateCard;
