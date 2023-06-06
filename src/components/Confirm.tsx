import React from 'react';
import { Chip, Stack, Typography, Box, Button, Modal } from '@mui/material';
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DoneIcon from '@mui/icons-material/Done';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const style = {
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    borderRadius: 1.25,
    boxShadow: 24,
    p: 4,
};
  
const Confirm = ({ open, handleClose }: any) => {
    const walletAddress = "0xFF 0x01 0x04 0x42 0x61 0x73 0x73"
    const [copied, setCopied] = React.useState(false);
    const onCopied = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box 
                sx={{ 
                    width: { sm: 576, xs: '100%' }, 
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Box sx={style}>
                    <Stack alignItems="center" justifyContent="center">
                        <Typography textAlign="center" variant="subtitle1" pb={3}>
                            Send payments to the following wallet:
                        </Typography>
                        <Box component="img" src="/images/QR.png" maxWidth="100%" />
                        <Typography textAlign="center" variant="h4" pb={2} pt={3}>
                            {walletAddress}
                        </Typography>
                        <Stack flexDirection={{ sm: "row", xs: 'column' }} alignItems="center" justifyContent="ceonter" gap={2}>
                            <CopyToClipboard text={walletAddress} onCopy={onCopied}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    endIcon={<ContentCopyRoundedIcon fontSize="small" />}
                                >
                                    Copy Address
                                </Button>
                            </CopyToClipboard>
                            {copied ?
                                <Chip
                                    color="success"
                                    variant='outlined'
                                    label="Copied"
                                    avatar={<DoneIcon color='success' />}
                                />
                            :   <></>
                            }
                        </Stack>
                        <Typography textAlign="center" variant="body2" pt={3}>
                            The wallet you send payment from will be White Listed. <br />
                            Connect Wallet to Access Content Portal for Life.
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    )
}

export default Confirm;