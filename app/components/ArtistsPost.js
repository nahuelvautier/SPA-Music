export function ArtistsPost (props) {
  let {
    idArtist,
    strArtist,
    intFormedYear,
    intDiedYear,
    strGenre,
    strWebsite,
    strFacebook,
    strTwitter,
    strBiographyES,
    intMembers,
    strCountry,
    strArtistLogo,
    strArtistClearart,
    strArtistWideThumb,
    strArtistBanner,
    strLastFMChart
  } = props;

  let urlLogo = (strArtistLogo === null)
    ? ""
    : strArtistLogo,
    
      urlBanner = (strArtistBanner === null)
      ? "./app/assets/cover-not-found.svg"
      : strArtistBanner,
    
      urlClearart = (strArtistClearart === null)
      ? "./app/assets/not-found-image.svg"
      : strArtistClearart,
    
      urlWideThumb = (strArtistWideThumb === null)
      ? "./app/assets/not-found-image.svg"
      : strArtistWideThumb;

  if (intFormedYear == null) intFormedYear = '???????"';
  if (intDiedYear === null) intDiedYear = "Actualmente";
  if (intMembers === null) intMembers = "";
  if (strBiographyES === null) strBiographyES = "";
  
  const $searchPost = `
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
          <p>De: ${intFormedYear} a: ${intDiedYear}</p>
          <p>Desde: ${strCountry}</p>
          <p>Género: ${strGenre}</p>
        </aside>
      </article>
      <article>
      <figure class="figure-clearart">
        <img src="${urlClearart}" alt="${strArtist}">
        <figcaption></figcaption>
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
          <img src="${urlWideThumb}" alt="${strArtist}">
          <figcaption>Listen too in: <a href="${strLastFMChart}">Last.fm</a></figcaption>
        </figure>
      </article>
    </section>
  `;

  return $searchPost;
}