export function Main() {
  const $main = document.createElement("main"),
    $div = document.createElement("div");

  $div.id = "main-container";
  $main.id = "main";

  $div.appendChild($main);

  return $div;
}
