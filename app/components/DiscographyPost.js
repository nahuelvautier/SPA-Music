export function DiscographyPost (props) {
  const d = document,
    $aside = d.createElement("article"),
    $h3 = d.createElement("h3"),
    $template = d.createElement("template").content,
    $fragment = d.createDocumentFragment();

  let { strAlbum, intYearReleased } = props;

  $aside.classList.add("discography-article")

  $h3.innerHTML = `${strAlbum}<br>${intYearReleased}`;

  $aside.appendChild($h3);

  const $clone = d.importNode($template, true);
  $fragment.append($clone);

  $aside.appendChild($fragment);

  return $aside;
}