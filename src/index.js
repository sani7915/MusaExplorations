import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
 // eslint-disable-next-line 
import {i18nextInit} from './translations/I18next'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
