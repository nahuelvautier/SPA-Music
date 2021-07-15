export function HomePost (props) {
  let { strArtist, intFormedYear, intDiedYear, strArtistThumb, strBiographyEN } = props,
    urlPoster = (strArtistThumb === null)
      ? "./app/assets/not-found-image.jpg"
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

  let $post = `
    <article id="home-article" class="home-article">
      <h2>${strArtist}</h2>
      <p>De: ${intFormedYear} a: ${intDiedYear}</p>
      <figure>
        <img class="home-card" src="${urlPoster}" alt="${strArtist.toUpperCase()}">
      </figure>
      <aside>${strBiographyEN}</aside>
    </article>
  `;
  return $post;
}