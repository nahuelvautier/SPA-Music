/* export function FormQueries () {
  const d = document,
  $form = d.createElement("form"),
  $query = d.createElement("input"),
  $albumsBtn = d.createElement("input");

  $form.classList.add("albums-query");

  $query.id = "album-query"
  $query.type = "search";
  $query.name = "album-query";

  $query.style.dsplay = "none";

  $albumsBtn.classList.add("albums-btn");
  $albumsBtn.type = "submit";
  $albumsBtn.value = "Ver albums"

  $form.appendChild($query);
  $form.appendChild($albumsBtn);

  d.addEventListener("submit", e => {
    if (e.target.matches(".albums-query")) return false
    e.preventDefault();
    localStorage.setItem("artists", e.target.dataset.id);
    //location.hash = `#/album.php?i=${e.target.dataset.id}`;
  });

  return $form;
} */