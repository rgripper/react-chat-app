import React from "react";
import { render } from "react-dom";
import { App } from "./App";

const reset = () => fetch("https://serene-basin-84996.herokuapp.com/clear");

render(<App reset={reset} />, document.getElementById("root"));
