import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import DefaultProvider from "./Context/Default.context"
import MovieProvider from "./Context/Movie.context";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </DefaultProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
