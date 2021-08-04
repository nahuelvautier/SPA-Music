export function Title () {
  const $title = document.createElement("h1"),
    $a = document.createElement("a");

  $a.href = "#/home";
  $title.textContent = "SPA Music";

  $a.appendChild($title);

  return $a;
}