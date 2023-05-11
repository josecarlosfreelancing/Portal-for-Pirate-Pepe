import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
// import Web3Context from '../../contexts/Web3Context';
import MuiAppBar from "@mui/material/AppBar";
import {
  Button,
  IconButton,
  Toolbar,
  Stack,
  useMediaQuery,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
import { PortalHeaderProps } from "../../../types/portal";

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  backgroundImage: "none",
  boxShadow: "none",
  borderBottom: `1px ${theme.palette.divider} solid`,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
}));

export default function Header({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}: PortalHeaderProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = () => {
    if (open) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{ width: matchUpMd ? `calc(100% - ${drawerWidth}px)` : "100%" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack flexDirection="row" gap={matchUpMd ? 7 : 3} alignItems="center">
          <IconButton
            color="inherit"
            size="small"
            // variant="outlined"
            aria-label="open drawer"
            onClick={handleClick}
            edge="start"
            sx={{
              display: { md: "none", sm: "flex" },
              mr: 2,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            {open ? (
              <KeyboardDoubleArrowLeftIcon
                fontSize="small"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              />
            ) : (
              <KeyboardDoubleArrowRightIcon
                fontSize="small"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              />
            )}
          </IconButton>
        </Stack>
        <Stack alignItems="flex-end" flexDirection="row" gap={4}>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/home")}
            sx={{
              color: "text.primary",
            }}
          >
            Portal Page
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
