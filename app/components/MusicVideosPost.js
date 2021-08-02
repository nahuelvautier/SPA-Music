export function MusicVideos (props) {
  const d = document,
    $h6 = d.createElement("h6"),
    $article = d.createElement("article"),
    $aside = d.createElement("aside"),
    $iframe = d.createElement("iframe"),
    $template = d.createElement("template").content,
    $fragment = d.createDocumentFragment();

  let { strTrack, strMusicVid } = props;

  const  NOCOOKIE = strMusicVid.replace("youtube", "youtube-nocookie"),
    ENDPOINT = NOCOOKIE,
    ENDPOINT_EMBED = ENDPOINT.replace("/watch?v=", "/embed/");

  $article.classList.add("mvids-article");
  $aside.classList.add("mvids-aside");
  $iframe.classList.add("mvids-iframe");

  //console.log(ENDPOINT_EMBED);

  $h6.textContent = strTrack;

  $iframe.width = "640";
  $iframe.height = "360";
  $iframe.src = `${ENDPOINT_EMBED}/?iv_load_policy=3&amp;enablejsapi=1&amp;origin=https://nahuelvautier.github.io/`;
  $iframe.title = "YouTube video player";
  $iframe.frameborder = "1";
  $iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  $iframe.setAttribute("allowfullscreen", "");

  $aside.appendChild($h6);
  $aside.appendChild($iframe);

  $template.appendChild($aside);

  const $clone = d.importNode($template, true);
  $fragment.appendChild($clone);
  $article.appendChild($fragment);

  return $article;
}