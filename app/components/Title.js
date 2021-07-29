export function Title () {
  const $title = document.createElement("h1"),
    $a = document.createElement("a");

  $a.href = "#/home";
  $title.textContent = "Musicapp";

  $a.appendChild($title);

  return $a;
}