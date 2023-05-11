import React, { FC } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const Subscribe: FC = () => {
  const [count, setCount] = React.useState<number>(979);

  return (
    <Box bgcolor="#E6DAFF" borderRadius={1}>
      <Stack flexDirection={{ md: "row", sm: "column", xs: "column" }}>
        <Box flex={1}>
          <Box
            py={{ md: 11.5, sm: 5, xs: 5 }}
            pl={{ md: 9.5, sm: 2, xs: 2 }}
            pr={{ md: 0, sm: 2, xs: 2 }}
          >
            <Typography variant="h1" color="background.default">
              Get Lifetime Access to the Most Exclusive Research Content in
              Crypto!
            </Typography>
            <Box py={4}>
              <Divider />
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              lineHeight={1.3}
              color="background.default"
            >
              True Value: $65,000 per Year{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              lineHeight={1.3}
              color="success.main"
            >
              Grand Opening Sale : $369 for Lifetime
            </Typography>
            <Typography color="background.default" py={2}>
              Price for lifetime membership will double after first 1,000
              subscribers.
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{ color: "text.primary" }}
            >
              Current subscribers count : {count}
            </Button>
          </Box>
        </Box>
        <Box flex={1}>
          <Box component="img" src="/images/subscribe.png" width="100%" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Subscribe;
