import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CategoryProps, Field } from "../types/portal";
import { useLocation } from 'react-router-dom';

const Category: FC<CategoryProps> = (props) => {
  return (
    <Box>
      <Stack gap={{ md: 4, sm: 2, xs: 2 }}>
        <Box
          sx={{
            border: "1px solid",
            borderColor: "#3b423b",
            borderRadius: 2,
            p: { md: 4, sm: 2, xs: 2 },
          }}
        >
          <Typography textTransform="uppercase" textAlign="center" variant="h1">
            Top Pirate Pepe Banner
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid",
            borderColor: "#3b423b",
            borderRadius: 2,
            p: { md: 2, sm: 1, xs: 1 },
          }}
        >
          <Typography textTransform="uppercase" textAlign="center" variant="h3">
            {props.content}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
              xs: "repeat(1, 1fr)",
            },
            gap: 2,
          }}
        >
          {props.fields.map((ele: Field, key: number) => (
            <Link to={ele.href} style={{ textDecoration: "none" }}>
              <Stack
                alignItems="center"
                justifyContent="center"
                key={key}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "#3b423b",
                  borderRadius: 2,
                  p: { md: 2, sm: 1, xs: 1 },
                }}
              >
                <Typography
                  textTransform="uppercase"
                  textAlign="center"
                  variant="h3"
                  color="text.primary"
                >
                  {ele.title}
                </Typography>
              </Stack>
            </Link>
          ))}
        </Box>
      </Stack>
      <Stack></Stack>
    </Box>
  );
};

export default Category;
