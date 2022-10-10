const NAME = "theaudiodb",
  DOMAIN = `https://www.${NAME}.com`,
  DEV = `${DOMAIN}/api/v1/json`,
  KEY = `${DEV}/2`,
  CONNECT = `${KEY}/search.php?s=`,
  ARTIST = `${KEY}/search.php?s=`,
  DISCOGRAPHY = `${KEY}/discography.php?s=`,
  ALBUM = `${KEY}/album.php?i=`,
  INDIVIDUAL_ALBUM = `${KEY}/album.php?m=`,
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
  INDIVIDUAL_ALBUM,
  MUSIC_VID,
  TRACK_DATA
}