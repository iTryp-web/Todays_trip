import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datetime/css/react-datetime.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "react-quill/dist/quill.snow.css";
import AuthLogic from "./service/authLogic";
import firebaseApp from "./service/firebase";
import { legacy_createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { setAuth } from "./redux/userAuth/action";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authLogic = new AuthLogic(firebaseApp);
const store = legacy_createStore(rootReducer);

store.dispatch(setAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider()))

root.render(
  <>
    <CookiesProvider>
      <Provider store={store}>
      <BrowserRouter>
        <App authLogic={authLogic} />
      </BrowserRouter>
      </Provider>
    </CookiesProvider>
  </>
);
