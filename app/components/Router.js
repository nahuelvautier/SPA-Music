import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";

export async function Router () {
  const d = document,
    $main = d.getElementById("main"),
    { hash } = location.hash;

    //console.log(hash);
    //$main.innerHTML = null;

  if (!hash || hash.includes("#/search.php")) {
    await connect({
      url: AUDIODB.CONNECT,
      cbSuccess:  (json) => {
        console.log(json);
      }
    });
  } else if (hash.includes("/artist.php")) {

  } else if (hash.includes("/discography.php")) {

  } else {

  }
}