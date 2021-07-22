export function MusicVideos (props) {
  const d = document,
    $h6 = d.createElement("h6"),
    $article = d.createElement("article"),
    $aside = d.createElement("aside"),
    $pDesc = d.createElement("p"),
    $iframe = d.createElement("iframe"),
    $template = d.createElement("template").content,
    $fragment = d.createDocumentFragment();

  let { strTrack, strMusicVid, strDescriptionEn } = props;

  const DOMAIN = strMusicVid,
    EMBED = DOMAIN.replace("/watch?v=", "/embed/");

  $h6.textContent = strTrack;

  $iframe.src = EMBED;
  $iframe.title = strTrack;

  $pDesc.textContent = strDescriptionEn;

  $aside.appendChild($h6);
  $aside.appendChild($iframe);

  $article.appendChild($aside);
  $article.appendChild($pDesc);

  const $clone = d.importNode($template, true);
  $fragment.appendChild($clone);
  $article.appendChild($fragment);

  return $article;
}