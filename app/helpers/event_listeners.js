export function eventListeners () {
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

  d.addEventListener("search", e => {
    if (!e.target.matches('input[type="search"]')) return false;
    if (!e.target.value) localStorage.removeItem("artistSearch");
  });

  d.addEventListener("submit", e => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();

    if ($spanForm.textContent === "Artista") {
      localStorage.setItem("artistSearch", e.target.query.value);
      location.hash = `#/search.php?s=${e.target.query.value}`;
    } else if ($spanForm.textContent === "Albums") {
      localStorage.setItem("albumSearch", e.target.query.value);
      location.hash = `#/discography.php?s=${e.target.query.value}`;
    }
  });

  d.addEventListener("keyup", e =>{
    const regex = new RegExp(e.target.value, "ig");

    if (e.target.matches("#albums-filter")) {

      d.querySelectorAll(".albums-article").forEach((article) => {
        article.textContent.match(regex)
          ? article.classList.remove("filter")
          : article.classList.add("filter");
      });
    }
  });
}