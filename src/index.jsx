import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { MargaretProvider } from "@tymate/margaret";
import App from "./App";
import "sanitize.css";
import "sanitize.css/typography.css";
import "sanitize.css/forms.css";

const GlobalStyles = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  nav li::before {
    content: initial;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <MargaretProvider>
      <GlobalStyles />
      <App />
    </MargaretProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
