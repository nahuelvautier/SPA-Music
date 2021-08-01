export function HomePost (props) {
  let { strArtist, strDisbanded, intFormedYear, intDiedYear, strArtistThumb, strBiographyEN } = props,
    urlPoster = (strArtistThumb === null)
      ? "./app/assets/not-found-image.svg"
      : strArtistThumb,

    actually;
    
  if (strDisbanded === "Yes") {
    if (intDiedYear === null) intDiedYear = "Unknown";
    actually = intDiedYear;
  } else {
    actually = "Actualmente";
  }

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
    $pYears = d.createElement("p"),
    $pBio = d.createElement("p"),
    $figure = d.createElement("figure"),
    $img = d.createElement("img"),
    $aside  = d.createElement("aside"),
    $template = d.createElement("template").content,
    $fragment = d.createDocumentFragment();

  $article.id = "home-article";
  $article.classList.add("home-article");

  $h2.textContent = strArtist;

  $pYears.textContent = `De: ${intFormedYear} a ${actually}`;

  $img.classList.add("home-card");
  $img.src = urlPoster;
  $img.alt = strArtist;

  $pBio.textContent = strBiographyEN;

  $template.appendChild($h2);
  $template.appendChild($pYears);

  $figure.appendChild($img);

  $aside.appendChild($pBio);

  $template.appendChild($figure);
  $template.appendChild($aside);

  const $clone = d.importNode($template, true);

  $fragment.appendChild($clone);
  $article.appendChild($fragment)

  return $article;
}