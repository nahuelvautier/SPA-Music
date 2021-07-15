import AUDIODB from "../helpers/audio_db_api.js";
import { connect } from "../helpers/fetch.js";
import { HomePost } from "./HomePost.js";

export async function Router () {
  const d = document,
    $main = d.getElementById("main"),
    { hash } = location;

  //$main.innerHTML = null;
  console.log(hash);

  if (!hash || hash === "#/") {
    await connect({
      
      url: AUDIODB.CONNECT,
      cbSuccess: (posts) => {
        let htmlCode = "";
        console.log(posts);
        posts.artists.forEach(post => console.log(post));
        posts.artists.forEach(post => htmlCode += HomePost(post));
        $main.innerHTML = htmlCode;
      },
    });
  } else if (hash.includes("#/search")) {
    const query = localStorage.getItem("artistSearch");
    //console.log(query);

    if (!query) {
      d.getElementById("loader").style.display = "none";
      return false;
    }

    console.log(`${AUDIODB.ARTIST}${query}`);
    await connect({
      url: `${AUDIODB.ARTIST}${query}`,
      cbSuccess: (search) => {
        console.log(search);
      },
    });
  } else if (hash.includes("#/discography")) {

  } else {

  }

  d.getElementById("loader").style.display = "none";
}