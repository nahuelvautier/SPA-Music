import { Title } from "./Title.js";
import { SearchForm } from "./SearchForm.js";
import { MobilePanel } from "./Mobile_Panel.js";

export function Header () {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Title());
  $header.appendChild(SearchForm());
  $header.appendChild(MobilePanel());
  
  return $header;
}