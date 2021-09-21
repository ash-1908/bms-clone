import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import DefaultProvider from "./Context/Default.context"
import MovieProvider from "./Context/Movie.context";
import ScrollToTop from "./ScrollToTop/ScrollToTop";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultProvider>
        <MovieProvider>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </MovieProvider>
      </DefaultProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
