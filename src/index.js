"use strict";

const content = document.querySelector(".main-content");
const btnMenu = document.querySelector(".header-menu");

import homeView from "../views/Home";
import aboutView from "../views/About";
import contactView from "../views/Contact";
import "../src/style.css";

// Load home screen on page load
window.addEventListener("load", (e) => {
  homeView(content);
  document.querySelector(".home").style.display = "flex";
});

// Show different pages based on menu input
btnMenu.addEventListener("click", (e) => {
  switch (e.target.textContent) {
    case "Home":
      homeView(content);
      document.querySelector(".home").style.display = "flex";
      break;
    case "About":
      aboutView(content);
      document.querySelector(".about").style.display = "flex";
      break;
    case "Contact":
      contactView(content);
      document.querySelector(".contact").style.display = "flex";
      break;
    default:
      break;
  }
});
