import React from "react";
import MovieLayout from "../Layouts/Movie.layout";
import { Route } from "react-router-dom";

export const MovieHOC = ({ component: Component, ...props }) => {
  return (
    <>
      <Route
        {...props}
        component={(rest) => (
          <MovieLayout>
            <Component {...rest} />
          </MovieLayout>
        )}
      />
    </>
  );
};
