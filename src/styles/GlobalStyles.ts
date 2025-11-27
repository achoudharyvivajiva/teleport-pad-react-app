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

 
  .pointer{
cursor: pointer;
}
.hidden{
  display: none;
}
  
  /* PRIME REACT DROPDOWN PANEL FIX */
  .p-dropdown-panel {
    background-color: ${({ theme }) => theme.colors.white} !important;
    border-radius: 6px !important;
    border: 1px solid #ddd !important;
  }

  .p-dropdown-items-wrapper {
    background-color: ${({ theme }) => theme.colors.white} !important;
  }

  .p-dropdown-items {
    background-color: ${({ theme }) => theme.colors.white} !important;
    margin: 20px;
  }

  .p-dropdown-item {
    color: ${({ theme }) => theme.colors.black} !important;
    margin: 20px 0px;

  }

  .p-dropdown-item:hover {
    background-color: ${({ theme }) => theme.colors.lightgray} !important;
  }
`;
