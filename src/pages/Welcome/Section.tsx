import React, { FC } from "react";
import { Stack, Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { SectionType } from "./type";

const Section: FC<SectionType> = (props) => {

  return (
    <Stack
      flexDirection={{
        md: props.reverse ? "row" : "row-reverse",
        sm: "column",
        xs: "column",
      }}
      alignItems={{ md: "center", sm: "flex-start", xs: "flex-start" }}
      gap={9}
    >
      <Stack gap={3} flex={1} width="100%">
        <Stack flexDirection="row">
          <Box component="img" src={props.logo} />
        </Stack>
        <Typography variant="h2">
          <Typography variant="h2" component="span" color={props.color}>
            {props.highlight}
          </Typography>
          {props.header}
        </Typography>
        <Typography variant="subtitle1" lineHeight={1.6}>
          {props.content}
        </Typography>
        <Stack 
          alignItems="center" 
          flexDirection="row" 
          gap={1.5} 
          sx={{ 
            cursor: 'pointer',
            pt: 5
          }} 
          onClick={props.handleOpen}>
          <Typography
            sx={{ "& a": { textDecoration: "none", color: props.color } }}
          >
            {/* <Link to={props.href}>Subscribe Now</Link> */}
            <Box component="a">Subscribe Now</Box>
          </Typography>
          <ArrowForwardIcon fontSize="small" sx={{ color: props.color }} />
        </Stack>
      </Stack>
      <Box flex={2} width="100%">
        <Box component="img" src={props.group} width="100%" />
      </Box>
    </Stack>
  );
};

export default Section;
