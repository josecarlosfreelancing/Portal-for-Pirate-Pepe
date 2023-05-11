import { CssBaseline, PaletteMode } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import { FC } from "react";

// type ThemeConfigProps = {
//   children: ReactElement;
// };

const ThemeConfig: FC<any> = ({ children }) => {
  const themeOptions = {
    palette: { ...palette.dark, mode: "dark" as PaletteMode },
    typography,
    breakpoints,
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
