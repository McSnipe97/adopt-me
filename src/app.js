import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./details";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Router>
        <SearchParams />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
render(<App />, document.getElementById("root"));
