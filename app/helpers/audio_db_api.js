const NAME = "theaudiodb",
  DOMAIN = `https://${NAME}.com`,
  DEV = `${DOMAIN}/api/v1/json`,
  KEY = `${DEV}/1`,
  CONNECT = `${KEY}/search.php?s=`,
  ARTIST = `${KEY}/search.php?s=`,
  DISCOGRAPHY = `${KEY}/discography.php?s=`,
  ALBUM = `${KEY}/album.php?i=`,
  MUSIC_VID = `${KEY}/mvid.php?i=`,
  TRACK_DATA = `${KEY}/track.php?m=`;

export default {
  NAME,
  DOMAIN,
  DEV,
  KEY,
  CONNECT,
  ARTIST,
  DISCOGRAPHY,
  ALBUM,
  MUSIC_VID,
  TRACK_DATA
}