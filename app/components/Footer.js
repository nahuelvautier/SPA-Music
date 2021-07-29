export function Footer () {
  const $footer = document.createElement("footer"),
    $div = document.createElement("div"),
    $p = document.createElement("p");

  $footer.classList.add("footer");

  $p.innerHTML= "2021 &copy; Nahuel Vautier";

  $div.appendChild($p);
  $footer.appendChild($div);

  return $footer;
}