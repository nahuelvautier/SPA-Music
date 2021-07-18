export function HomePost (props) {
  let { idArtist, strArtist, intFormedYear, intDiedYear, strArtistThumb, strBiographyEN } = props,
    urlPoster = (strArtistThumb === null)
      ? "./app/assets/not-found-image.svg"
      : strArtistThumb;

  if (intDiedYear === null) intDiedYear = "Actualmente";

  switch (strArtist) {
    case "V":
      strArtist = "Five";
      break;
    case "L":
      strArtist = "L. Marshall";
      break;
    case "P":
      strArtist = "P";
      break;
    case "X":
      strArtist = "X the Band";
      break;
    default:
      strArtist = "T";
      break;
  }

  const d = document,
    $article = d.createElement("article"),
    $h2 = d.createElement("h2"),
    $p = d.createElement("p"),
    $figure = d.createElement("figure"),
    $img = d.createElement("img"),
    $aside  = d.createElement("aside"),
    $albumsBtn = d.createElement("input"),
    $template = d.createElement("template").content,
    $fragment = d.createDocumentFragment();

  $article.id = "home-article";
  $article.classList.add("home-article");
  $h2.textContent = strArtist;
  $p.textContent = `De: ${intFormedYear} a ${intDiedYear}`;
  $img.classList.add("home-card");
  $img.src = urlPoster;
  $img.alt = strArtist;
  $aside.textContent = strBiographyEN;
  $albumsBtn.dataset.id = idArtist;
  $albumsBtn.classList.add("albums-btn");
  $albumsBtn.type = "button";
  $albumsBtn.value = "Ver albums"


  $template.appendChild($h2);
  $template.appendChild($p);
  $figure.appendChild($img);
  $template.appendChild($figure);
  $template.appendChild($aside);
  $template.appendChild($albumsBtn);

  const $clone = d.importNode($template, true);

  $fragment.appendChild($clone);
  $article.appendChild($fragment)

  d.addEventListener("click", e => {
    if (e.target.matches(".albums-btn")) {
      location.hash = `#/album.php?i=${e.target.dataset.id}`;
      localStorage.setItem("IdArtist", e.target.dataset.id);
    }
  });

  return $article;
}