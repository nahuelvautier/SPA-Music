export function MobileMenu () {
  const $mobileMenu = document.createElement("nav"),
    $homeMobile = document.createElement("a"),
    $artistMobile = document.createElement("a"),
    $albumsMobile = document.createElement("a"),
    $mvMobile = document.createElement("a");

  $homeMobile.href = "#/home";
  $homeMobile.textContent = "Home";
  $homeMobile.classList.add("mobile-home-anchor");
  
  $artistMobile.href = "#/search.php?s=";
  $artistMobile.textContent = "Artistas";
  $artistMobile.classList.add("mobile-artist-anchor");
  
  $albumsMobile.href = "#/discography.php?s=";
  $albumsMobile.textContent = "Últimos albums";
  $albumsMobile.classList.add("mobile-albums-anchor");

  $mvMobile.href = "#/mvid.php?i=";
  $mvMobile.textContent = "Videos musicales";
  $mvMobile.classList.add("mobile-vids-anchor");
  
  $mobileMenu.classList.add("nav-container");
  $mobileMenu.appendChild($homeMobile);
  $mobileMenu.appendChild($artistMobile);
  $mobileMenu.appendChild($albumsMobile);
  $mobileMenu.appendChild($mvMobile);

  return $mobileMenu;
}