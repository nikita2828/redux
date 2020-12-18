import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./components/store/store";
import { Provider } from "react-redux";
import MyComponent from "./components/MyComponent";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <MyComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
