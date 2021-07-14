export function MobileMenu () {
  const $mobileMenu = document.createElement("nav"),
    $homeMobile = document.createElement("a"),
    $artistMobile = document.createElement("a"),
    $albumMobile = document.createElement("a");

    $homeMobile.href = "#/search.php";
    $homeMobile.textContent = "Home";

    $artistMobile.href = "#/artist.php";
    $artistMobile.textContent = "Artists";

    $albumMobile.href = "#/discography.php";
    $albumMobile.textContent = "Albums";

    $mobileMenu.classList.add("nav-container");

    $mobileMenu.appendChild($homeMobile);
    $mobileMenu.appendChild($artistMobile);
    $mobileMenu.appendChild($albumMobile);
  return $mobileMenu;
}