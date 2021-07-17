import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";
import { HomePost } from "./HomePost.js";
import { SearchPost } from "./SearchPost.js";

export async function Router () {
  const d = document,
    $main = d.getElementById("main"),
    { hash } = location;

  $main.innerHTML = null;

  //$main.innerHTML = null;
  console.log(hash);

  if (!hash || hash === "#/") {
    //HOME
    await connect({
      
      url: AUDIODB.CONNECT,
      cbSuccess: (posts) => {
        console.log(posts);
        posts.artists.forEach(post => $main.appendChild(HomePost(post)));
      },
    });
  } else if (hash.includes("#/search")) {
    //SEARCH
    const query = localStorage.getItem("artistSearch");
    //console.log(query);
    //console.log(`${AUDIODB.ARTIST}${query}`);

    if (!query) {
      d.getElementById("loader").style.display = "none";
      return false;
    }

    await connect({
      url: `${AUDIODB.ARTIST}${query}`,
      cbSuccess: (searchArtist) => {
        let htmlCode = "";

        if (searchArtist.artists === null) {
          htmlCode = `<p class="error">No se encontraron criterios de búsqueda para "${query}"</p>`;
        } else {
          console.log(searchArtist);
          htmlCode += SearchPost(searchArtist);
        }
        $main.innerHTML = htmlCode;
      },
    });
  } else if (hash.includes("#/album")) {
    //ALBUMS
    const albums = localStorage.getItem("artists");
    console.log(albums);

    await connect({
      url: `${AUDIODB.ALBUM}${albums}`,
      cbSuccess: (json) => {
        let htmlCode = "";

        if (json.album === null) {
          htmlCode = `<p class="error">No se encontraron albums del artista"</p>`;
          $main.innerHTML = htmlCode;
        } else {
          console.log(json);
        }
      },
    })
  } else {

  }

  d.getElementById("loader").style.display = "none";
}