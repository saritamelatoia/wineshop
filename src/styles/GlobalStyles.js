// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
    font-size: 1rem;
  }

  button {
    font-family: inherit;
    color: inherit;
    text-decoration: inherit;
  }

  .btn {
    display: inline-block;
    white-space: nowrap;
    padding: 0.75rem 1.5rem;
    font-size: 1.15rem;
    font-weight: 600;
    color: #2e2e48;
    background: #fafafc;
    border-radius: 0.66rem;
    transition: all 0.2s;
    box-shadow: 0 0.5rem 1.5rem -0.5rem currentColor;
  }

  .btn:hover,
  .btn:focus {
    box-shadow: 0 0 0 2px #2e2e48, 0 0 0 4px #fafafc;
  }

  .btn:active {
    transform: scale(0.95);
  }
`;

export default GlobalStyle;
