import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import "./index.css";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "1110px",
  lg: "1120px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints }, withProse());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
