export function SearchForm () {
  const d = document, 
    $form = d.createElement("form"),
    $input = d.createElement("input"),
    $inputBtn = d.createElement("input");

    $form.classList.add("search-form");

    $input.type = "search";
    $input.name = "query";
    $input.placeholder = "Búsqueda...";

    $inputBtn.type = "submit";
    $inputBtn.value = "Buscar";

    $form.appendChild($input);
    $form.appendChild($inputBtn);

  d.addEventListener("search", e => {
    if (!e.target.matches('input[type="search"]')) return false;
  });

  d.addEventListener("submit", e => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    location.hash = `#artist.php?i=${e.target.query.value}`;
  });

  return $form;
}