import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* font-family: "Helvetica", "Arial", sans-serif; */
    font-family: "Helvetica";
    color: ${({ theme }) => theme.colors.text};
  }
  h1 { font-size: ${({ theme }) => theme.typography.h1}; }
  h2 { font-size: ${({ theme }) => theme.typography.h2}; }
  h3 { font-size: ${({ theme }) => theme.typography.h3}; }
  body, p { font-size: ${({ theme }) => theme.typography.body}; }
  small { font-size: ${({ theme }) => theme.typography.small}; }

  @media screen and (max-width: 1024px) {
    h1 { font-size: 24px; }
    h2 { font-size: 20px; }
    h3 { font-size: 18px; }
    body, p { font-size: 14px; }
    small { font-size: 13px; }
  }
  
`;
