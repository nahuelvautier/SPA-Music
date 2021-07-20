export function SearchPost (props) {
  let {
    idArtist,
    strArtist,
    intFormedYear,
    intDiedYear,
    intDisbanded,
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

  if (intDiedYear === null) intDiedYear = "Actualmente";
  if (intMembers === null) intMembers = "";
  if (strBiographyES === null) strBiographyES = "";
  
  const $searchPost = `
    <section>
      <article>
        <h2 class="search-post-title">${strArtist}</h2>
        <figure>
          <img src="${urlLogo}"">
        </figure>
        <hr>
        <aside>
          <div class="div-btns">
            <input data-id="${idArtist}" class="albums-btn" type="button" value="Ver albums">
            <input data-id="${idArtist}" class="vids-btn" type="button" value="Music videos">
          </div>
        </aside>
      </article>
      <article>
        <figure>
          <img src="${urlBanner}">
          <figcaption>${strArtist}</figcaption>
          </figure>
          <aside>
          <p>De: ${intFormedYear} a: ${intDiedYear}</p>
          <p>Desde: ${strCountry}</p>
          <p>Género: ${strGenre}</p>
        </aside>
      </article>
      <article>
      <figure>
        <img src="${urlClearart}" alt="${strArtist}">
        <figcaption></figcaption>
      </figure>
        <aside>
          <ul>
            <li><a href="https://${strWebsite}" target="_blank" rel="noopener noreferrer">Website</a></li>
            <li><a href="https://${strFacebook}" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://${strTwitter}" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </aside>
      </article>
      <hr>
      <article>
        <aside>
          <p>${strBiographyES}</p>
        </aside>
        <figure>
          <img src="${urlWideThumb}" alt="${strArtist}">
          <figcaption>Listen too in: <a href="${strLastFMChart}">Last.fm</a></figcaption>
        </figure>
      </article>
    </section>`;

  return $searchPost;
}