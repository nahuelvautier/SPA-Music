export function TracksPost (props) {
  let { strTrack, intDuration, strGenre, intTrackNumber } = props;

  const d = document,
    $h4 = d.createElement("h4"),
    $article = d.createElement("article"),
    $aside = d.createElement("aside"),
    $pDuration = d.createElement("p"),
    $pGenreTrack = d.createElement("p"),
    $template = d.createElement("template").content,
    $fragment = d.createDocumentFragment();

    ((ms) => {
      let minutes = Math.floor(ms / 60000),
        seconds = ((ms % 60000) / 1000).toFixed(0);

      let date = `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
      $pDuration.textContent = `Duración: ${date}`;
    })(intDuration);

  $article.classList.add("tracks-article");
  $aside.classList.add("tracks-aside");
  
  $h4.textContent = strTrack;
  $pGenreTrack.textContent = `Track ${intTrackNumber} / ${strGenre}`;

  $aside.appendChild($h4);
  $aside.appendChild($pDuration);
  $aside.appendChild($pGenreTrack);
  $template.appendChild($aside);

  const $clone = d.importNode($template, true);
  $fragment.appendChild($clone);

  $article.appendChild($fragment);

  return $article;
}