import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: purple;
  }

  html, body, div, button {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  .App {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const temaUm = {
  colors: {
    primary: "#42a5f5",
    secondary: "#ba68c8",
  },
};

export const temaDois = {
  colors: {
    primary: "#ba68c8",
    secondary: "#42a5f5",
  },
};
