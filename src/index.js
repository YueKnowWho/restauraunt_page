import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll(".nav-button");
const tabs = {
  home: loadHome,
  menu: loadMenu,
  about: loadAbout,
};

function showTab(tabName) {
  content.replaceChildren(tabs[tabName]());
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

showTab("home");
