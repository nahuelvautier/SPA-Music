export function DesktopMenu () {
  const d = document,
    $nav = d.createElement("nav"),

    $spanArrow = d.createElement("span"),
    $spanHome = d.createElement("span"),
    $spanArtist = d.createElement("span"),
    $spanDiscography = d.createElement("span"),
    $spanVids = d.createElement("span"),

    $aHome = d.createElement("a"),
    $aArtist = d.createElement("a"),
    $aDiscography = d.createElement("a"),
    $aVids = d.createElement("a"),

    $pHome = d.createElement("p"),
    $pArtist = d.createElement("p"),
    $pDiscography = d.createElement("p"),
    $pVids = d.createElement("p"),

    $hrSt = d.createElement("hr"),
    $hrNd = d.createElement("hr"),
    $hrRd = d.createElement("hr");

  $nav.classList.add("desktop-navbar");
  $spanArrow.classList.add("desktop-arrow-menu");

  $spanHome.classList.add("span-icon");
  $spanArtist.classList.add("span-icon");
  $spanDiscography.classList.add("span-icon");
  $spanVids.classList.add("span-icon");
  
  
  $aHome.href = "#/home";
  $aArtist.href = "#/search.php?s=";
  $aDiscography.href = "#/discography.php?s=";
  $aVids.href = "#/mvid.php?i=";

  $pHome.textContent = "Home";
  $pArtist.textContent = "Artistas";
  $pDiscography.textContent = "Albums";
  $pVids.textContent = "Videos";

  $spanArrow.innerHTML = '<i class="fas fa-angle-double-right"></i>';
  $nav.appendChild($spanArrow);

  $spanHome.innerHTML = '<i class="fas fa-home"></i>';
  $spanHome.appendChild($pHome);

  $aHome.appendChild($spanHome);
  $nav.appendChild($aHome);

  $nav.appendChild($hrSt);

  $spanArtist.innerHTML = '<i class="fab fa-artstation"></i>';
  $spanArtist.appendChild($pArtist);
  
  $aArtist.appendChild($spanArtist);
  $nav.appendChild($aArtist);

  $nav.appendChild($hrNd);

  $spanDiscography.innerHTML = '<i class="fas fa-folder"></i>';
  $spanDiscography.appendChild($pDiscography);

  $aDiscography.appendChild($spanDiscography);
  $nav.appendChild($aDiscography);

  $nav.appendChild($hrRd);

  $spanVids.innerHTML = '<i class="fab fa-youtube"></i>';
  $spanVids.appendChild($pVids);

  $aVids.appendChild($spanVids);
  $nav.appendChild($aVids);

  return $nav;
}