export function AlbumsPost (props) {
  let {
    idAlbum, 
    strArtist,
    strAlbum,
    strStyle, 
    strGenre,
    intYearReleased,
    strAlbumThumb,
    intScore
  } = props;

  let urlAlbumImg = (strAlbumThumb=== null)
    ? "./app/assets/not-found-image.svg"
    : strAlbumThumb;

  if (intYearReleased === null) intYearReleased = "N/A";
  if (strGenre === null) strGenre = "N/A";
  if (strStyle === null) strStyle = "N/A";
  if (intScore == null) intScore = "0";

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
  $h3.classList.add("albums-h3");
  $figure.classList.add("albums-figure");
  $input.classList.add("tracks-btn");
  $divBtns.classList.add("div-btns");

  $h3.textContent = strAlbum;

  $img.src = urlAlbumImg;
  $img.alt = strAlbum;
  $figcaption.innerHTML = `Lanzado en: ${intYearReleased}<br>Género: ${strGenre}<br>Estilo: ${strStyle}<br>Score: ${intScore} / 10`;

  $input.dataset.id = idAlbum;
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