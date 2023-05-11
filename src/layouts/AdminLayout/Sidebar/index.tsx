import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Drawer,
  List,
  Stack,
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
  ListSubheader,
  Typography,
} from "@mui/material";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

import { Link, useLocation } from "react-router-dom";
import { PortalSidebarProps } from "../../../types/portal";

export default function Sidebar({
  open,
  handleDrawerClose,
}: PortalSidebarProps) {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  const list = () => (
    <Box
      role="presentation"
      onClick={() => handleDrawerClose()}
      onKeyDown={() => handleDrawerClose()}
    >
      {/* <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ pl: 0, pb: 2, bgcolor: "transparent" }}
      >
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <AssignmentOutlinedIcon
              sx={{
                color: "text.primary",
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: theme.palette.text.primary, textDecoration: "none" }}
            >
              Dashboard
            </Typography>
          </Stack>
        </Link>
      </ListSubheader> */}
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ pl: 0, pb: 2, bgcolor: "transparent" }}
      >
        <Link to="/admin/upload" style={{ textDecoration: "none" }}>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <AssignmentOutlinedIcon
              sx={{
                color: "text.primary",
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: theme.palette.text.primary, textDecoration: "none" }}
            >
              Upload
            </Typography>
          </Stack>
        </Link>
      </ListSubheader>
      {/* <List
        sx={{ width: "100%", borderRadius: 2 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {tabs.map((tab, index) => (
          <Link
            to={tab.href}
            style={{ textDecoration: "none", color: "inherit" }}
            key={index}
          >
            <ListItemButton
              key={index}
              sx={{
                py: 1.5,
                borderTopLeftRadius: index === 0 ? 8 : 0,
                borderTopRightRadius: index === 0 ? 8 : 0,
              }}
            >
              <ListItemIcon sx={{ minWidth: 48 }}>
                {
                  <tab.icon
                    sx={{
                      color:
                        tab.href === "/"
                          ? pathname === "/"
                            ? "#BB86FC"
                            : "inherit"
                          : pathname.toLowerCase().includes(tab.href)
                          ? "#BB86FC"
                          : "inherit",
                    }}
                  />
                }
              </ListItemIcon>
              <Typography
                variant="h6"
                sx={{
                  color:
                    tab.href === "/"
                      ? pathname === "/"
                        ? "#BB86FC"
                        : "inherit"
                      : pathname.toLowerCase().includes(tab.href)
                      ? "#BB86FC"
                      : "inherit",
                }}
              >
                {tab.title}
              </Typography>
            </ListItemButton>
          </Link>
        ))}
      </List> */}
      {/* <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ pl: 0, pb: 2, bgcolor: "transparent" }}
      >
        <Link to="/vision" style={{ textDecoration: "none" }}>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <LocalSeeIcon sx={{ color: "text.primary" }} />
            <Typography
              variant="h6"
              color="text.primary"
              textTransform="uppercase"
            >
              Real Vision Crypto
            </Typography>
          </Stack>
        </Link>
      </ListSubheader>
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ pl: 0, pb: 2, bgcolor: "transparent" }}
      >
        <Link to="/messari" style={{ textDecoration: "none" }}>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <TextSnippetIcon sx={{ color: "text.primary" }} />
            <Typography
              variant="h6"
              color="text.primary"
              textTransform="uppercase"
            >
              Messari
            </Typography>
          </Stack>
        </Link>
      </ListSubheader>
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ pl: 0, pb: 2, bgcolor: "transparent" }}
      >
        <Link to="/nansen" style={{ textDecoration: "none" }}>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <TextSnippetIcon sx={{ color: "text.primary" }} />
            <Typography
              variant="h6"
              color="text.primary"
              textTransform="uppercase"
            >
              Nansen
            </Typography>
          </Stack>
        </Link>
      </ListSubheader>
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ pl: 0, pb: 6, bgcolor: "transparent" }}
      >
        <Link to="/delphi" style={{ textDecoration: "none" }}>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <TextSnippetIcon sx={{ color: "text.primary" }} />
            <Typography
              variant="h6"
              color="text.primary"
              textTransform="uppercase"
            >
              Delphi Digital
            </Typography>
          </Stack>
        </Link>
      </ListSubheader> */}
    </Box>
  );
  return (
    <div>
      <Drawer
        anchor="left"
        // variant="persistent"
        variant={matchUpMd ? "persistent" : "temporary"}
        open={matchUpMd ? true : open}
        onClose={() => handleDrawerClose()}
        sx={{
          "& .MuiPaper-root": {
            width: 280,
          },
        }}
      >
        <Stack sx={{ pt: 6, pl: 4, pb: 5 }}>
          <Box component="img" src="/images/logo.png" sx={{ maxWidth: 160 }} />
        </Stack>
        <Stack alignItems="center" justifyContent="center"></Stack>
        <Box sx={{ px: 2 }}>{list()}</Box>
      </Drawer>
    </div>
  );
}
const tabs = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardOutlinedIcon,
  },
  {
    title: "Entry List",
    href: "/entry",
    icon: FormatListBulletedIcon,
  },
  {
    title: "Collabs",
    href: "/collab",
    icon: AutoAwesomeIcon,
  },
  {
    title: "Raffle",
    href: "/raffle",
    icon: DashboardOutlinedIcon,
  },
  {
    title: "Settings",
    href: "/setting",
    icon: SettingsOutlinedIcon,
  },
  {
    href: "",
    title: "Public Page",
    icon: OpenInNewIcon,
  },
];
