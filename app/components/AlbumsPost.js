export function AlbumsPost (props) {
  let {
    idAlbum, 
    strAlbum,
    strStyle, 
    strGenre,
    intYearReleased,
    strAlbumThumb,
    intScore
  } = props;

  let urlAlbumImg = (strAlbumThumb === "")
    ? "./app/assets/not-found-image.svg"
    : strAlbumThumb;

  if (intYearReleased === null) intYearReleased = "N/A";
  if (strGenre === null) strGenre = "N/A";
  if (strStyle === null) strStyle = "N/A";
  if (intScore == null) intScore = "N/A";

  const d = document,
    $article = d.createElement("article"),
    $h3 = d.createElement("h3"),
    $aside = d.createElement("aside"),
    $figure = d.createElement("figure"),
    $img = d.createElement("img"),
    $divBtns = d.createElement("div"),
    $input = d.createElement("input"),
    $figcaption = d.createElement("figcaption"),
    $template = d.createElement("template").content,
    $fragment = d.createDocumentFragment();

  $article.classList.add("albums-article");
  $aside.classList.add("albums-aside");
  $figure.classList.add("albums-figure");
  $input.classList.add("tracks-btn");
  $divBtns.classList.add("album-div-btns");

  $h3.textContent = strAlbum;

  $img.src = urlAlbumImg;
  $img.alt = strAlbum;
  $figcaption.innerHTML = `Lanzado en: ${intYearReleased}<br><br>Género: ${strGenre}<br><br>Estilo: ${strStyle}<br><br>Score: ${intScore}`;

  $input.dataset.id = idAlbum;
  $input.dataset.album = strAlbum;
  $input.classList.add("tracks-btn");
  $input.type = "button";
  $input.value = "Ver tracks"

  $divBtns.appendChild($input);
  
  $aside.appendChild($figure);
  $aside.appendChild($divBtns);
  
  $figure.appendChild($h3);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);

  $template.appendChild($aside);

  const $clone = d.importNode($template, true);
  $fragment.appendChild($clone);
  $article.appendChild($fragment);

  return $article;
}