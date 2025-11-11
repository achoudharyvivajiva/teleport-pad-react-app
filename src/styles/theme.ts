export const theme = {
  colors: {
    background: "#0E4B71",
    text: "#1a1a1a",
    primary: "#0E4B71",
    secondary: "#05324E",
    white: "#FFFFFF",
    gray: "#FCFCFC",
    lightgray: "#E4DAD7",
    darkgray: "#898989",
    border: "#E5E7EB",
    green: "#027564",
    red: "#D42A2A",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  typography: {
    h1: "28px",
    h2: "24px",
    h3: "20px",
    body: "16px",
    small: "14px",
  },
  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },
  weight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

export type ThemeType = typeof theme;
