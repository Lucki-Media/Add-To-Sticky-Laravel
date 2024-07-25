import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { config } from "../config";

const createReactApp = () => {
  const appContainer = document.createElement("div");
  appContainer.id = "app-container-q78er";
  document.body.append(appContainer);
  const appElement = document.querySelector("#app-container-q78er");
  if (appElement) {
    ReactDOM.render(<App />, appElement);
  }
};

const createWidgetContainers = () => {
  Object.entries(config).forEach(([key, val]) => {
    const widgetContainer = document.createElement("div");
    widgetContainer.className = val.className;
    Object.entries(val.styles).forEach(([prop, style]) => {
      widgetContainer.style[prop] = style;
    });
    const target = document.querySelector(val.target);
    if (target) {
      if (val.className === "lm-quote-add-to-cart-q78er") {
        target.classList.add("lm-quote-add-to-cart-q78er");
      } else {
        target.after(widgetContainer);
      }
    }
  });
};

export async function init() {
  createWidgetContainers();
  createReactApp();
}
