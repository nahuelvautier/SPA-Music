export function clickEvent () {
  const d = document,
    $panel = d.getElementById("panel"),
    $hamburguerBtn = d.getElementById("panel-btn"),
    $ulForm = d.querySelector(".ul-form"),
    $spanForm = d.querySelector(".span-form"),
    $input = d.querySelector(".search-input");
  
  d.addEventListener("click", e => {
    //console.log(e.target);

    // Nav form
    if (e.target.matches(".nav-form") || e.target.matches(".nav-form span")) {
      $ulForm.classList.toggle("is-active");
    }

    if (e.target.matches(".artist-selector")) {
      $spanForm.textContent = "Artista";
      $ulForm.classList.remove("is-active");
      $input.placeholder = "Busca un artista...";
    } else if (e.target.matches(".albums-selector")) {
      $spanForm.textContent = "Albums";
      $ulForm.classList.remove("is-active");
      $input.placeholder = "Albums por artista...";
    }

    // localStorage getters
    if (e.target.matches(".albums-btn")) {
      location.hash = `#/album.php?i=${e.target.dataset.id}`;
      localStorage.setItem("IdArtist", e.target.dataset.id);
    }

    if (e.target.matches(".vids-btn")) {
      location.hash = `#/mvid.php?i=${e.target.dataset.id}`;
      localStorage.setItem("vidArtist", e.target.dataset.id);
    }

    if (e.target.matches(".tracks-btn")) {
      location.hash = `#/track.php?m=${e.target.dataset.id}`;
      localStorage.setItem("idAlbum", e.target.dataset.id);
    }

    if (e.target.matches(".mobile-vids-anchor") && localStorage.getItem("vidArtist") === null) {
      e.preventDefault();
    };

    // Hamburger button
    if (e.target.matches("#panel-btn") || e.target.matches(`#panel-btn *`)) {
      $panel.classList.toggle("is-active");
      $hamburguerBtn.classList.toggle("is-active");
    }
  });
}