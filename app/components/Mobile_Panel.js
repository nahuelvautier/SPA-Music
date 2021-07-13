import { MobileMenu } from "./Mobile_Menu.js";

export function MobilePanel () {
  const $mobilePanel = document.createElement("div");
  $mobilePanel.id = "panel";
  $mobilePanel.classList.add("panel");
  $mobilePanel.appendChild(MobileMenu());
  return $mobilePanel;
}