import { MobileMenu } from "./Mobile_Menu.js";

export function MobilePanel () {
  const $mobilePanel = document.createElement("div");
  $mobilePanel.classList.add("panel");
  $mobilePanel.appendChild(MobileMenu());
  return $mobilePanel;
}