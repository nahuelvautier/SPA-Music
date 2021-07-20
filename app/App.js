import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Hamburger } from "./components/Hamburger.js";
import { Router } from "./components/Router.js";
import { eventListeners } from "./helpers/event_listeners.js";

export function App () {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  $root.appendChild(Hamburger());

  Router();
  eventListeners();
}