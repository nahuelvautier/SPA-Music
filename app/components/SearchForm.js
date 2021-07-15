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

  
    if (location.hash.includes("#/search")) {
      $input.value = localStorage.getItem("artistSearch");
    }

  d.addEventListener("search", e => {
    if (!e.target.matches('input[type="search"]')) return false;
    if (!e.target.value) localStorage.removeItem("artistSearch");
  });

  d.addEventListener("submit", e => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    localStorage.setItem("artistSearch", e.target.query.value);
    location.hash = `#/search.php?s=${e.target.query.value}`;
  });
  return $form;
}