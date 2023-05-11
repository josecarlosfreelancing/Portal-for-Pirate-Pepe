import React, { FC } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const Payment: FC = () => {
  return (
    <Stack alignItems="center" justifyContent="center" pt={8} pb={22}>
      <Typography textAlign="center" variant="subtitle1" pb={3}>
        Send payments to the following wallet:
      </Typography>
      <Box component="img" src="/images/QR.png" maxWidth="100%" />
      <Typography textAlign="center" variant="h4" pb={2} pt={3}>
        0xFF 0x01 0x04 0x42 0x61 0x73 0x73
      </Typography>
      <Button
        variant="contained"
        color="success"
        endIcon={<ContentCopyRoundedIcon fontSize="small" />}
      >
        Copy Address
      </Button>
      <Typography textAlign="center" variant="body2" pt={3}>
        The wallet you send payment from will be White Listed. <br />
        Connect Wallet to Access Content Portal for Life.
      </Typography>
    </Stack>
  );
};

export default Payment;
