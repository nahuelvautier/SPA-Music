import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";

export async function Router () {
  const d = document,
    $main = d.getElementById("main"),
    { hash } = location.hash;

    //console.log(hash);
    //$main.innerHTML = null;

    await connect({
      url: AUDIODB.CONNECT,
      cbSuccess:  (json) => {
        console.log(json);
      }
    });
}