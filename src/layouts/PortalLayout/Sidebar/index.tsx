import { Box, Divider, Stack, Drawer, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { DashboardSidebarSection } from "./DashboardSidebarSection";
import { categories } from "../../../constants";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = (props: any) => {
  const { handleDrawerClose, open } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  const handlePathChange = () => {
    if (open) {
      handleDrawerClose?.();
    }
  };
  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <Divider
        sx={{
          borderColor: "success.main",
          borderBottomWidth: 1,
          py: 2,
        }}
      />
      <Box>
        {[{ router: pathname, children: categories, title: "" }].map(
          (section: any) => {
            if (section) {
              return (
                <DashboardSidebarSection
                  key={section.title}
                  path={""}
                  sx={{
                    mt: 2,
                    "& + &": {
                      mt: 2,
                    },
                  }}
                  {...section}
                />
              );
            }
            return true;
          }
        )}
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      variant={lgUp ? "persistent" : "temporary"}
      open={lgUp ? true : open}
      onClose={() => handleDrawerClose()}
      sx={{
        "& .MuiPaper-root": {
          width: 280,
        },
      }}
    >
      <Stack sx={{ pt: 6, pl: 4, pb: 3 }}>
        <Box
          component="img"
          src="/images/logo.png"
          onClick={() => navigate("/home")}
          sx={{ maxWidth: 160 }}
        />
      </Stack>
      <Stack alignItems="center" justifyContent="center"></Stack>
      <Box sx={{ px: 2 }}>{content}</Box>
    </Drawer>
  );
};

export default Sidebar;
