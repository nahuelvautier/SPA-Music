export function ArtistsPost (props) {
  let {
    idArtist, strArtist,
    intFormedYear, intDiedYear, intMembers,
    strDisbanded, strGenre, strCountry,
    strWebsite, strFacebook, strTwitter,
    strBiographyES,
    strArtistThumb, strArtistBanner, strArtistLogo, strArtistClearart, strArtistWideThumb,
    strArtistFanart, strArtistFanart2, strArtistFanart3, strArtistFanart4,
    strLastFMChart
  } = props;

  let urlLogo = strArtistLogo === null
    ? ""
    : strArtistLogo,

    urlBanner = strArtistBanner === null
        ? "./app/assets/cover-not-found.svg"
        : strArtistBanner,

    /* urlArtistThumb = (strArtistThumb === null || strArtistThumb === "")
    ? "./app/assets/not-found-image.svg"
    : strArtistThumb, */

    urlClearart = strArtistClearart || strArtistFanart || strArtistFanart2 || strArtistFanart3 || strArtistFanart4 || strArtistThumb ||"",

    urlWideThumb = strArtistWideThumb || strArtistFanart2 || strArtistFanart3 || strArtistFanart4 || strArtistFanart || "",

    integrants,

    actually;
    
    if (strDisbanded === "Yes") {
      if (intDiedYear === null) intDiedYear = "Unknown";
      actually = intDiedYear;
    } else {
      actually = "Actualmente";
    }


  /* if (strArtistClearart === null)  urlClearart = strArtistFanart;
  if (strArtistFanart === null) urlClearart = strArtistFanart2;
  if (strArtistFanart2 === null) urlClearart = strArtistFanart3;
  if (strArtistFanart3 === null) urlClearart = strArtistFanart4;
  if (strArtistFanart4 === null) false;
  
  if (urlClearart === null || urlClearart === false || urlClearart === undefined) {
    setTimeout(() => {
      document.querySelector(".img-clearart").src = "./app/assets/not-found-image.svg";
      document.querySelector(".img-clearart").style.width = "50%";
      document.querySelector(".img-clearart").style.margin = "0 auto";
    }, 1);
  }
  

  if (strArtistClearart === null && strArtistWideThumb  === null) {
    urlWideThumb = strArtistFanart2 || strArtistFanart3;
  }

  if (strArtistFanart2 === null || strArtistFanart2 === "") {
    urlWideThumb = strArtistFanart3 || strArtistFanart4;
  }

  if (strArtistFanart3 === null || strArtistFanart3 === "") {
    urlWideThumb  = strArtistFanart4 || false;
  }

  if (strArtistFanart4 === null || strArtistFanart4 === "") {
    false;
  }

  if (urlWideThumb === null || urlWideThumb === false || urlWideThumb === undefined) {
    setTimeout(() => {
      document.querySelector(".img-wide").src = "./app/assets/not-found-image.svg";
      document.querySelector(".img-wide").style.width = "50%";
      document.querySelector(".img-wide").style.margin = "0 auto";
    }, 1);
  } */

  if (intFormedYear == null) intFormedYear = 'Unknown';
  if (intMembers === null) intMembers = "";
  if (strBiographyES === null) strBiographyES = "";
  if (intMembers > 1) {
    integrants = "Integrantes en la banda";
  } else {
    integrants = "Miembro solista";
  }
  
  const $artistPost = `
    <section classs="artists-section">
      <article class="artists-article">
        <h2>${strArtist}</h2>
        <figure class="figure-banner">
          <img src="${urlBanner}">
          </figure>
        <hr class="artists-hr">
        <aside>
          <div class="div-btns">
            <input data-id="${idArtist}" class="albums-btn" type="button" value="Ver albums">
            <input data-id="${idArtist}" class="vids-btn" type="button" value="Music videos">
          </div>
        </aside>
      </article>
      <article>
        <figure class="figure-logo">
          <img src="${urlLogo}"">
        </figure>
          <aside class="aside-artists-info">
          <p>Desde: ${strCountry}</p>
          <p>Tocando: ${strGenre}</p>
          <p>${intMembers} ${integrants}</p>
          <p>De: ${intFormedYear} a: ${actually}</p>
        </aside>
      </article>
      <article>
      <figure class="figure-clearart">
        <img class="img-clearart" src="${urlClearart}">
      </figure>
        <aside>
          <ul class="artists-ul">
            <li><a href="https://${strWebsite}" target="_blank" rel="noopener noreferrer">Website</a></li>
            <li><a href="https://${strFacebook}" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://${strTwitter}" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </aside>
      </article>
      <hr class="artists-hr">
      <article>
        <aside class="artists-bio-container">
          <p>${strBiographyES}</p>
        </aside>
        <figure class="figure-wide">
          <img class="img-wide" src="${urlWideThumb}">
          <figcaption class="figure-lastfm">Listen too in: <a href="${strLastFMChart}" target="_blank">Last.fm</a></figcaption>
        </figure>
      </article>
    </section>
  `;

  return $artistPost;
}