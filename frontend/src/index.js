import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "react-quill/dist/quill.snow.css";
import AuthLogic from "./service/authLogic";
import firebaseApp from "./service/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authLogic = new AuthLogic(firebaseApp);

root.render(
  <>
    <CookiesProvider>
      <BrowserRouter>
        <App authLogic={authLogic}/>
      </BrowserRouter>
    </CookiesProvider>
  </>
);
