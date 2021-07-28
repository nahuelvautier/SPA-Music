export function Hamburger () {
  const $hamburgerBtn = document.createElement("button"),
    $hamburgerBox = document.createElement("span"),
    $hamburgerInner= document.createElement("span");

  $hamburgerBtn.id = "panel-btn";
  $hamburgerBtn.classList.add("panel-btn","hamburger", "hamburger--elastic");
  $hamburgerBtn.setAttribute("type", "button");

  $hamburgerBox.classList.add("hamburger-box");
  $hamburgerInner.classList.add("hamburger-inner");

  $hamburgerBox.appendChild($hamburgerInner);
  $hamburgerBtn.appendChild($hamburgerBox);

  return $hamburgerBtn;
}