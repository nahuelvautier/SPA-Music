import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";
import { HomePost } from "./HomePost.js";
import { AlbumsPost } from "./AlbumsPost.js";
import { SearchPost } from "./SearchPost.js";
import { TracksPost } from "./TracksPost.js";
import { DiscographyPost } from "./DiscographyPost.js";
import { MusicVideos } from "./MusicVideosPost.js";

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
          htmlCode = `<p class="error">No se encontraron criterios de búsqueda para  el artista "${query}"</p>`;
        } else {
          //console.log(searchArtist);
          searchArtist.artists.forEach(artist => htmlCode += SearchPost(artist));
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
        let htmlCode = "";

        if (albums.album === null) {
          htmlCode = `<p class="error">No se encontraron albums del artista."</p>`;
          $main.innerHTML = htmlCode;
        } else {
          //console.log(albums);
          const $section = d.createElement("section"),
            $h2 = d.createElement("h2"),
            $inputFilter = d.createElement("input");

          $inputFilter.id = "albums-filter"
          $inputFilter.name = "albums";
          $inputFilter.type = "text";
          $inputFilter.placeholder = "Filtro...";

          albums.album.forEach(album => $section.appendChild(AlbumsPost(album)));
          
          $h2.textContent = localStorage.getItem("artistSearch");
          $main.appendChild($h2);
          $main.appendChild($inputFilter);
          $main.appendChild($section);
          $section.classList.add("albums-section");
        }
      }
    });
  } else if (hash.includes("#/discography")) {
    const query = localStorage.getItem("albumSearch");

    if (!query) {
      return false;
    }

    await connect({
      url: `${AUDIODB.DISCOGRAPHY}${query}`,
      cbSuccess: (discography) => {
        console.log(discography);

        const query = localStorage.getItem("albumSearch"),
          $section = d.createElement("section"),
          $h2 = d.createElement("h2");

        if (!query) {
          d.getElementById("loader").style.display = "none";
          return false;
        } 
          
        if (discography.album === null) {
          let htmlCode = `<p class="error">"No se encontró la discografía del artista ${query}"</p>`;
          $main.innerHTML = htmlCode;
        } else {
          discography.album.forEach(album => $section.appendChild(DiscographyPost(album)));
          $h2.textContent = `Some ${query}'s albums`;
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
        let htmlCode = "";

        if (videos.mvids === null) {
          htmlCode = `
          <p class="error">
            No se encontraron videos musicales del último artista seleccionado "${artistName}"
          </p>`;

          $main.innerHTML = htmlCode;
        } else {
          console.log(videos);
          const $section = d.createElement("section"),
            $h2 = d.createElement("h2"),
            $h3 = d.createElement("h3"),
            artistName = localStorage.getItem("artistSearch");
          
          videos.mvids.forEach(vids => $section.appendChild(MusicVideos(vids)));

          $h2.textContent = artistName;
          $h3.textContent = "Puede que algunos videos tengan restricción de edad.";
          $main.appendChild($h2);
          $main.appendChild($h3);
          $main.appendChild($section);
          $section.classList.add("mvids-section");
        }
      }
    })
  } else {
    const tracks = localStorage.getItem("idAlbum");

    await connect({
      url: `${AUDIODB.TRACK_DATA}${tracks}`,
      cbSuccess: (tracks) => {
        //console.log(tracks);
        //let htmlCode = "";

        const $section = d.createElement("section"),
          $h2 = d.createElement("h2");

        tracks.track.forEach(track => $section.appendChild(TracksPost(track)));

        $h2.textContent = `${localStorage.getItem("artistSearch")} - ${localStorage.getItem("albumName")}`;

        $main.appendChild($h2);
        $main.appendChild($section);
        $section.classList.add("tracks-section");
      }
    });
  }

  d.getElementById("loader").style.display = "none";
}