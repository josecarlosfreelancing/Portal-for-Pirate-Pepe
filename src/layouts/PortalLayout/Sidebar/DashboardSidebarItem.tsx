import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Collapse, ListItem } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import { ChevronDown as ChevronDownIcon } from 'icons/chevron-down';
// import { ChevronRight as ChevronRightIcon } from 'icons/chevron-right';

export const DashboardSidebarItem = (props: any) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    active,
    children,
    chip,
    depth,
    icon,
    info,
    open: openProp,
    path,
    title,
    link,
    ...other
  } = props;

  const [open, setOpen] = useState(!!openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    navigate(path);
  };

  let paddingLeft = 24;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  useEffect(() => {
    setOpen(!!openProp)
  }, [pathname])

  // Branch
  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: "block",
          pb: 0.5,
          py: 0,
          px: 1,
        }}
        {...other}
      >
        <Button
          endIcon={
            !open ? (
              <KeyboardArrowRight fontSize="small" />
            ) : (
              <KeyboardArrowDown fontSize="small" />
            )
          }
          // disableRipple
          onClick={handleToggle}
          startIcon={<DehazeIcon />}
          sx={{
            color: active ? "text.primary" : "text.secondary",
            justifyContent: "flex-start",
            pl: `${paddingLeft}px`,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "&:hover": {
              backgroundColor: "action.selected",
            },
            "& .MuiButton-startIcon": {
              color: active ? "primary" : "sidebar.400",
            },
            "& .MuiButton-endIcon": {
              color: "sidebar.400",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {info}
        </Button>
        <Collapse in={open} sx={{ mt: 0.5 }}>
          {children}
        </Collapse>
      </ListItem>
    );
  }

  // Leaf
  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
    >
      <Button
        // component={Link}
        onClick={() => navigate(path)}
        startIcon={<FolderOpenIcon />}
        endIcon={chip}
        // disableRipple
        sx={{
          borderRadius: 1,
          color: "text.secondary",
          justifyContent: "flex-start",
          pl: `${paddingLeft}px`,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          ...(active && {
            backgroundColor: "action.selected",
            color: "warning.main",
            fontWeight: "fontWeightBold",
          }),
          "& .MuiButton-startIcon": {
            color: active ? "warning.main" : "sidebar.400",
          },
          "&:hover": {
            backgroundColor: "action.selected",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
        {info}
      </Button>
    </ListItem>
  );
};
