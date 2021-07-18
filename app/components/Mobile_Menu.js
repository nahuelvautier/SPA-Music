export function MobileMenu () {
  const $mobileMenu = document.createElement("nav"),
    $homeMobile = document.createElement("a"),
    $artistMobile = document.createElement("a"),
    $albumsMobile = document.createElement("a");

    $homeMobile.href = "#/Home";
    $homeMobile.textContent = "Home";

    $artistMobile.href = "#/search.php?s=";
    $artistMobile.textContent = "Artistas";

    $albumsMobile.href = "#/discography.php?s=";
    $albumsMobile.textContent = "Discografía";

    $mobileMenu.classList.add("nav-container");

    $mobileMenu.appendChild($homeMobile);
    $mobileMenu.appendChild($artistMobile);
    $mobileMenu.appendChild($albumsMobile);
  return $mobileMenu;
}