import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const theme = {
  semanticTokens: {
    colors: {
      "background.pressed.base": { default: "blue.800", _dark: "blue.300" },
      "background.pressed.subtle": { default: "blue.300", _dark: "blue.700" },
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
