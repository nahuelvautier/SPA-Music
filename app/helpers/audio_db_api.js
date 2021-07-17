const NAME = "theaudiodb",
  DOMAIN = `https://${NAME}.com`,
  DEV = `${DOMAIN}/api/v1/json`,
  KEY = `${DEV}/1`,
  CONNECT = `${KEY}/search.php?s=`,
  ARTIST = `${KEY}/search.php?s=`,
  ALBUM = `${KEY}/album.php?i=`;
  //MUSIC_VID = `${KEY}/mvid.php?i=${ARTST_ID}`,
  //TRACK_DATA = `${KEY}/track.php?m=${ALBUM_ID}`,}

export default {
  NAME,
  DOMAIN,
  DEV,
  KEY,
  CONNECT,
  ARTIST,
  ALBUM
}