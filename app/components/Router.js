import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";
import { HomePost } from "./HomePost.js";
import { AlbumsPost } from "./AlbumsPost.js";
import { ArtistsPost } from "./ArtistsPost.js";
import { TracksPost } from "./TracksPost.js";
import { DiscographyPost } from "./DiscographyPost.js";
import { MusicVideos } from "./MusicVideosPost.js";

export async function Router() {
  const d = document,
    $main = d.getElementById("main"),
    { hash } = location;

  $main.innerHTML = null;

  //console.log(hash);

  if (!hash || hash === "#/home") {
    //HOME
    await connect({
      url: AUDIODB.CONNECT,
      cbSuccess: (posts) => {
        //console.log(posts);
        const $section = d.createElement("section"),
          $h2 = d.createElement("h2");
        posts.artists.forEach((post) => $section.appendChild(HomePost(post)));

        $h2.textContent = "Artistas, música, videos y más!";
        $main.appendChild($h2);
        $main.appendChild($section);
      }
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
          htmlCode = `<p class="error">No se encontraron criterios de búsqueda para  el artista "${query}"</p>`;
        } else {
          //console.log(searchArtist);
          searchArtist.artists.forEach(
            (artist) => (htmlCode += ArtistsPost(artist))
          );
        }
        $main.innerHTML = htmlCode;
      }
    });
  } else if (hash.includes("#/album")) {
    //ALBUMS
    const albums = localStorage.getItem("IdArtist");
    //console.log(albums);

    await connect({
      url: `${AUDIODB.ALBUM}${albums}`,
      cbSuccess: (albums) => {
        if (albums.album === null) {
          let htmlCode = `<p class="error">No se encontraron albums del artista.</p>`;
          $main.innerHTML = htmlCode;
        } else {
          //console.log(albums);
          const $section = d.createElement("section"),
            $h2 = d.createElement("h2"),
            $inputFilter = d.createElement("input");

          $section.classList.add("albums-section");

          $h2.textContent = localStorage.getItem("artistSearch").toUpperCase();

          $inputFilter.id = "albums-filter";
          $inputFilter.name = "albums";
          $inputFilter.type = "text";
          $inputFilter.placeholder = "Filtro...";
          $inputFilter.autocomplete = "off";

          albums.album.forEach((album) =>$section.appendChild(AlbumsPost(album)));

          $main.appendChild($h2);
          $main.appendChild($inputFilter);
          $main.appendChild($section);
        }
      }
    });
  } else if (hash.includes("#/discography")) {
    const query = localStorage.getItem("albumSearch");

    if (!query) {
      d.getElementById("loader").style.display = "none";
      return false;
    }

    await connect({
      url: `${AUDIODB.DISCOGRAPHY}${query}`,
      cbSuccess: (discography) => {
        //console.log(discography);

        const query = localStorage.getItem("albumSearch"),
          $section = d.createElement("section"),
          $h2 = d.createElement("h2");

        if (discography.album === null) {
          let htmlCode = `<p class="error">"No se encontró la discografía del artista ${query}"</p>`;
          $main.innerHTML = htmlCode;
        } else {
          discography.album.forEach((album) => $section.appendChild(DiscographyPost(album)));

          $h2.textContent = `Últimos albums de ${query}`;

          $main.appendChild($h2);
          $main.appendChild($section);
        }
      }
    });
  } else if (hash.includes("#/mvid")) {
    const vids = localStorage.getItem("vidArtist"),
      artistName = localStorage.getItem("artistSearch");

    await connect({
      url: `${AUDIODB.MUSIC_VID}${vids}`,
      cbSuccess: (videos) => {
        if (videos.mvids === null) {
          let htmlCode = `<p class="error">No se encontraron videos musicales del artista "${artistName}"</p>`;
          $main.innerHTML = htmlCode;
        } else {
          //console.log(videos);
          const $section = d.createElement("section"),
            $h2 = d.createElement("h2"),
            $h3 = d.createElement("h3");

          $section.classList.add("mvids-section");

          $h2.textContent = "Videos musicales";
          $h3.innerHTML = "Puede que algunos videos tengan restricción,<br>y por ello no puedas reproducirlos.";

          videos.mvids.forEach((vids) => $section.appendChild(MusicVideos(vids)));

          $main.appendChild($h2);
          $main.appendChild($h3);
          $main.appendChild($section);
        }
      }
    });
  } else {
    const tracks = localStorage.getItem("idAlbum");

    await connect({
      url: `${AUDIODB.TRACK_DATA}${tracks}`,
      cbSuccess: (tracks) => {
        //console.log(tracks);
        const $section = d.createElement("section"),
          $h2 = d.createElement("h2");

        $section.classList.add("tracks-section");

        $h2.textContent = `${localStorage.getItem("artistSearch").toUpperCase()} - ${localStorage.getItem("albumName")}`;

        tracks.track.forEach((track) => $section.appendChild(TracksPost(track)));

        $main.appendChild($h2);
        $main.appendChild($section);
      }
    });
  }
  d.getElementById("loader").style.display = "none";
}
