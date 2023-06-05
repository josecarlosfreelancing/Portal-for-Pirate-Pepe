import React from 'react';
import { Stack, Typography, Box, Button, Modal } from '@mui/material';
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 576,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
  
const Confirm = ({ open, handleClose }: any) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack alignItems="center" justifyContent="center">
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
            </Box>
        </Modal>
    )
}

export default Confirm;