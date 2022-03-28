import { createContext, useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export const ThemeContext = createContext("default value");

const themeMUI = {
  dark: createTheme({
    palette: {
      primary: {
        // main: "#17212b",
        main: "#ff0000",
      },
    },
    breakpoints: {
      keys: ["lg", "sm"],
      values: {
        lg: 1200,
        sm: 320,
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#17212b",
      },
    },
    breakpoints: {
      keys: ["lg", "sm"],
      values: {
        lg: 1200,
        sm: 320,
      },
    },
  }),
};

const themes = {
  dark: {
    color: "#000",
  },
  light: {
    color: "blue",
  },
};

export const CustomThemeProvider = ({ children, initialName = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialName],
    name: initialName,
  });

  const themeSetter = useCallback((name) => {
    if (!!themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeSetter, theme }}>
      <ThemeProvider theme={themeMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
