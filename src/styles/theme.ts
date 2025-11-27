export const theme = {
  colors: {
    background: "#0E4B71",
    text: "#1a1a1a",
    primary: "#0E4B71",
    secondary: "#05324E",
    white: "#FFFFFF",
    gray: "#FCFCFC",
    lightgray: "#E4DAD7",
    medgray: "#D9D9D9",
    darkgray: "#898989",
    border: "#E5E7EB",
    green: "#027564",
    red: "#D42A2A",
    black: "#000000",
  },

  spacing: {
    xs: "clamp(4px, 0.6vw, 8px)",
    sm: "clamp(8px, 1.2vw, 12px)",
    md: "clamp(12px, 1.8vw, 18px)",
    lg: "clamp(18px, 2.4vw, 28px)",
    xl: "clamp(28px, 3vw, 40px)",
  },

  typography: {
    h1: "clamp(24px, 3vw, 28px)",
    h2: "clamp(20px, 2.5vw, 24px)",
    h3: "clamp(16px, 2vw, 20px)",
    body: "clamp(10px, 1.7vw, 14px)",
    small: "clamp(8px, 1.3vw, 16px)",
  },

  radius: {
    sm: "8px",
    md: "14px",
    lg: "20px",
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
