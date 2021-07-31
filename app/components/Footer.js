export function Footer () {
  const $footer = document.createElement("footer"),
    $div = document.createElement("div"),
    $a = document.createElement("a"),
    $p = document.createElement("p");

  $footer.classList.add("footer");

  $a.href = "#";
  $a.textContent = " Nahuel Vautier";
  $p.innerHTML= "2021 &copy;";

  $p.appendChild($a);
  $div.appendChild($p);
  $footer.appendChild($div);

  return $footer;
}