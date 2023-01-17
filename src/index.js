import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers";
import { MantineProvider } from "@mantine/core";

import "./styles/global.css";
import "@fontsource/inter";

const configTheme = {
  colorScheme: "dark",
  fontFamily: "Inter",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider theme={configTheme} withGlobalStyles withNormalizeCSS>
      <Routers />
    </MantineProvider>
  </React.StrictMode>
);
