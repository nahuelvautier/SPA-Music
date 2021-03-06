export function eventListeners () {
  const d = document,
    $panel = d.getElementById("panel"),
    $hamburguerBtn = d.getElementById("panel-btn"),
    $navForm = d.querySelector(".nav-form"),
    $ulForm = d.querySelector(".ul-form"),
    $spanForm = d.querySelector(".span-form"),
    $input = d.querySelector(".search-input");
  
  d.addEventListener("click", e => {
    //console.log(e.target);

    // Nav form filter
    if (e.target.matches(".nav-form") || e.target.matches(".nav-form span")) {
      $navForm.classList.toggle("is-active");
      $ulForm.classList.toggle("is-active");
      if (!($navForm.classList === "is-active")) {
        $ulForm.classList.remove("mouseover-active");
      }
    }

    if (e.target.matches(".artist-selector")) {
      $spanForm.textContent = "Artista";
      $ulForm.classList.remove("is-active");
      $input.placeholder = "Busca un artista...";
      $navForm.classList.remove("is-active");
      $ulForm.classList.remove("mouseover-active");
    } else if (e.target.matches(".albums-selector")) {
      $spanForm.textContent = "Albums";
      $ulForm.classList.remove("is-active");
      $input.placeholder = "Albums por artista...";
      $navForm.classList.remove("is-active");
      $ulForm.classList.remove("mouseover-active");
    }

    // localStorage getters
    if (e.target.matches(".albums-btn")) {
      location.hash = `#/album.php?i=${e.target.dataset.id}`;
      localStorage.setItem("IdArtist", e.target.dataset.id); // to get albums from artist
    }

    if (e.target.matches(".vids-btn")) {
      location.hash = `#/mvid.php?i=${e.target.dataset.id}`;
      localStorage.setItem("vidArtist", e.target.dataset.id); // to get videos from artist
    }

    if (e.target.matches(".tracks-btn")) {
      location.hash = `#/track.php?m=${e.target.dataset.id}`;
      localStorage.setItem("idAlbum", e.target.dataset.id);
      localStorage.setItem("albumName", e.target.dataset.album);
    }

    if (e.target.matches(".mobile-vids-anchor") && localStorage.getItem("vidArtist") === null) {
      e.preventDefault(); // to avoid visit the path without an id artist or "vid artist" in this case
    };

    if (e.target.matches(".desktop-vids-anchor") || e.target.matches(".desktop-vids-anchor *") && localStorage.getItem("vidArtist") === null) {
      e.preventDefault(); // to avoid visit the path without an id artist or "vid artist" in this case in desktop version
    }

    // Hamburger button
    if (e.target.matches("#panel-btn") || e.target.matches(`#panel-btn *`)) {
      $panel.classList.toggle("is-active");
      $hamburguerBtn.classList.toggle("is-active");
    }
  });

  // Search input
  d.addEventListener("search", e => {
    if (!e.target.matches('input[type="search"]')) return false;
    if (!e.target.value) localStorage.removeItem("artistSearch");
    if (!e.target.value) localStorage.removeItem("albumSearch");
  });

  // Form submitter
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

  // Albums filter
  d.addEventListener("keyup", e =>{
    const regex = new RegExp(e.target.value, "ig");

    if (e.target.matches("#albums-filter")) {
      d.querySelectorAll(".albums-article").forEach((article) => {
        article.textContent.match(regex)
          ? article.classList.remove("filtered")
          : article.classList.add("filtered");
      });
    }
  });

  // Mouseover
  d.addEventListener("mouseover", e => {
    if (e.target.matches(".nav-form") || e.target.matches(".nav-form > *") || e.target.matches(".nav-form li")) {
      $ulForm.classList.add("mouseover-active");
    } else {
      $ulForm.classList.remove("mouseover-active");
    }

    if (e.target.matches(".desktop-navbar") || e.target.matches(".desktop-navbar *")) {
      d.querySelector(".fa-angle-double-right").style.transform = "rotate(-540deg)";
      d.querySelector(".fa-angle-double-right").style.left = "0";
      d.querySelector(".fa-angle-double-right").style.transition = "all .5s ease";
    } else {
      d.querySelector(".fa-angle-double-right").style.transform = "rotate(0deg)";
      d.querySelector(".fa-angle-double-right").style.position = "relative";
      d.querySelector(".fa-angle-double-right").style.left = "5rem";
      d.querySelector(".fa-angle-double-right").style.transition = "all .35s ease";
    }

    if (
      !(e.target.matches("#main") || e.target.matches("#main *"))
      &&
      e.target.matches(".desktop-navbar") || e.target.matches(".desktop-navbar *")
    ) {  
      d.getElementById("main").style.opacity = ".1";
    } else {
      d.getElementById("main").style.opacity = "1";
    }
  });
}