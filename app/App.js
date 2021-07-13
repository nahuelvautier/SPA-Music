import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import hamburguerButton from "./helpers/hamburger_btn.js";

export function App () {
  const $root = document.getElementById("root");
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
  setTimeout(() => {
    hamburguerButton("#panel", ("#panel-btn"));
  }, 100);
}