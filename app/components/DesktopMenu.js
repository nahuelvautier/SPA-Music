export function DesktopMenu () {
  const d = document,
    $nav = d.createElement("nav"),
    $spanArrow = d.createElement("span"),
    $aHome = d.createElement("a"),
    $aArtists = d.createElement("a"),
    $aDiscography = d.createElement("a"),
    $aMusicVids = d.createElement("a"),
    $hrSt = d.createElement("hr"),
    $hrNd = d.createElement("hr"),
    $hrRd = d.createElement("hr");

  $nav.classList.add("desktop-navbar");
  $spanArrow.classList.add("desktop-menu");

  $aHome.textContent = "Home";
  $aArtists.textContent = "Artistas";
  $aDiscography.textContent = "Últimos Albums";
  $aMusicVids.textContent = "Videos Musicales";

  $nav.appendChild($spanArrow);
  $nav.appendChild($aHome);
  $nav.appendChild($hrSt);
  $nav.appendChild($aArtists);
  $nav.appendChild($hrNd);
  $nav.appendChild($aDiscography);
  $nav.appendChild($hrRd);
  $nav.appendChild($aMusicVids);

    return $nav;
}