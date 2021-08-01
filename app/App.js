import { responsiveMedia } from "./helpers/responsive_object.js";
import { Header } from "./components/Header.js";
import { Hamburger } from "./components/Hamburger.js";
import { DesktopMenu } from "./components/DesktopMenu.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Footer } from "./components/Footer.js";
import { Router } from "./components/Router.js";
import { eventListeners } from "./helpers/event_listeners.js";

export function App () {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  
  $root.appendChild(Header());
  $root.appendChild(Hamburger());
  $root.appendChild(DesktopMenu());
  $root.appendChild(Loader());
  $root.appendChild(Main());
  $root.appendChild(Footer());

  responsiveMedia("(min-width: 1024px)");
  Router();
  eventListeners();
}
