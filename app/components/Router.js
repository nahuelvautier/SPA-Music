import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";

export async function Router () {
  const d = document,
    $main = d.getElementById("main"),
    { hash } = location;

    $main.innerHTML = null;
    console.log(hash);

  if (!hash || hash.includes("#/search.php")) {
    await connect({
      url: AUDIODB.CONNECT,
      cbSuccess: (json) => {
        console.log(json);
      },
    });
  } else if (hash.includes("#/artist.php")) {
    /* await connect({
      url: AUDIODB.ARTIST,
      cbSuccess: (json) => {
        console.log(json);
      },
    }); */
  } else if (hash.includes("#/discography.php")) {

  } else {

  }

  d.getElementById("loader").style.display = "none";
}