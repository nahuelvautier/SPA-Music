import { Hamburger } from "./Hamburger.js";

export function MobileMenu () {
  const $mobileMenu = document.createElement("nav");
  $mobileMenu.classList.add("nav-container");
  return $mobileMenu;
}