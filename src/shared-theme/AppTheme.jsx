import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = React.createContext({
  mode: "dark",
  toggleColorMode: () => {},
});

function createAppTheme(mode) {
  const baseTheme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#162842",
      },
      background:
        mode === "dark"
          ? {
              default: "#0b1420",
              paper: "#101827",
            }
          : {
              default: "#f5f5f5",
              paper: "#ffffff",
            },
    },
  });

  baseTheme.applyStyles = (styleMode, styles) => {
    if (styleMode === "dark" && baseTheme.palette.mode === "dark") {
      return styles;
    }
    return {};
  };

  return baseTheme;
}

export default function AppTheme({ children, ...props }) {
  const [mode, setMode] = React.useState("dark"); 

  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
      },
    }),
    [mode]
  );

  const theme = React.useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} {...props}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
