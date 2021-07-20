import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";
import { AlbumsPost } from "./AlbumsPost.js";
import { HomePost } from "./HomePost.js";
import { SearchPost } from "./SearchPost.js";

export async function Router () {
  const d = document,
    $main = d.getElementById("main"),
    { hash } = location;

  $main.innerHTML = null;

  console.log(hash);

  if (!hash || hash === "#/home") {
    //HOME
    await connect({
      
      url: AUDIODB.CONNECT,
      cbSuccess: (posts) => {
        //console.log(posts);
        const $section = d.createElement("section"),
          $h2 = d.createElement("h2");
        posts.artists.forEach(post => $section.appendChild(HomePost(post)));

        $h2.textContent = "Artistas, música, videos y más!";
        $main.appendChild($h2);
        $main.appendChild($section);
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
          searchArtist.artists.forEach(artist => htmlCode += SearchPost(artist));
        }
        $main.innerHTML = htmlCode;
      },
    });
  } else if (hash.includes("#/album")) {
    //ALBUMS
    const albums = localStorage.getItem("IdArtist");
    //console.log(albums);

    await connect({
      url: `${AUDIODB.ALBUM}${albums}`,
      cbSuccess: (albums) => {
        let htmlCode = "";

        if (albums.album === null) {
          htmlCode = `<p class="error">No se encontraron albums del artista."</p>`;
          $main.innerHTML = htmlCode;
        } else {
          //console.log(albums);
          const $section = d.createElement("section"),
            $h2 = d.createElement("h2");
          albums.album.forEach(album => $section.appendChild(AlbumsPost(album)));
          
          $h2.textContent = "Albums";
          $main.appendChild($h2);
          $main.appendChild($section);
          $section.classList.add("albums-section");
        }
      },
    })
  } else if (hash.includes("#/discography")) {
    const query = localStorage.getItem("albumSearch");
    //console.log(query);

    if (!query) {
      return false;
    }

    await connect({
      url: `${AUDIODB.DISCOGRAPHY}${query}`,
      cbSuccess: (json) => {
        console.log(json);
      }
    })
  } else if (hash.includes("#/mvid")) {
    const vids = localStorage.getItem("vidArtist"),
      artistName = localStorage.getItem("artistSearch");

    await connect({
      url: `${AUDIODB.MUSIC_VID}${vids}`,
      cbSuccess: (json) => {
        let htmlCode = "";
        if (json.mvids === null) {
          htmlCode = `
          <p class="error">
            No se encontraron videos musicales del último artista seleccionado "${artistName}"
          </p>`;
          $main.innerHTML = htmlCode;
        } else {
          console.log(json);
        }
      }
    })
  } else {
    const tracks = localStorage.getItem("idAlbum");

    await connect({
      url: `${AUDIODB.TRACK_DATA}${tracks}`,
      cbSuccess: (json) => {
        console.log(json);
        let htmlCode = "";
        // json.track.forEach(json => console.log(json));
      }
    })
  }

  d.getElementById("loader").style.display = "none";
}