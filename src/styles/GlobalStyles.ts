import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: "Helvetica", sans-serif;
    color: ${({ theme }) => theme.colors.text};
    -webkit-text-size-adjust: 100%;
  }

  /* RESPONSIVE TYPOGRAPHY */
  h1 { font-size: clamp(22px, 3vw, 40px); }
  h2 { font-size: clamp(20px, 2.6vw, 34px); }
  h3 { font-size: clamp(18px, 2.2vw, 28px); }
  p, body { font-size: clamp(14px, 1.8vw, 22px); }
  small { font-size: clamp(12px, 1.4vw, 18px); }

  .pointer { cursor: pointer; }
  .hidden { display: none; }

  /* Prime React Dropdown Fix */
  .p-dropdown-panel,
  .p-dropdown-items,
  .p-dropdown-item {
    background-color: ${({ theme }) => theme.colors.white} !important;
  }

  .p-dropdown-item {
    color: ${({ theme }) => theme.colors.black} !important;
    padding: 1vh 1vw !important;
  }

  .p-dropdown-item:hover {
    background-color: ${({ theme }) => theme.colors.lightgray} !important;
  }
`;
