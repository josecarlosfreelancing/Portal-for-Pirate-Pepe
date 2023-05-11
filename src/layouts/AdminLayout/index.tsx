import React, { FC } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const drawerWidth = 280;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    // paddingTop: 100,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  })
);

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
      }}
    >
      <CssBaseline />
      <Header
        open={matchUpMd ? true : open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Box sx={{ display: "flex" }}>
        <Sidebar
          open={matchUpMd ? true : open}
          handleDrawerClose={handleDrawerClose}
        />
        <Main style={{ marginLeft: matchUpMd ? 280 : 0 }}>
          <DrawerHeader />
          <Outlet />
        </Main>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
}
