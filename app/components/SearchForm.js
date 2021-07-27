export function SearchForm() {
  const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input"),
    $inputBtn = d.createElement("input"),
    $navForm = d.createElement("nav"),
    $spanForm = d.createElement("span"),
    $ulForm = d.createElement("ul"),
    $liStForm = d.createElement("li"),
    $hr = d.createElement("hr"),
    $liNdForm = d.createElement("li");

  $form.classList.add("search-form");

  $navForm.classList.add("nav-form");
  $spanForm.classList.add("span-form");
  $ulForm.classList.add("ul-form");
  $liStForm.classList.add("artist-selector");
  $liNdForm.classList.add("albums-selector");
  $input.classList.add("search-input");
  $inputBtn.classList.add("search-input-btn");

  $spanForm.textContent = "Artista";
  $liStForm.textContent = "Artista";
  $liNdForm.textContent = "Albums";

  $input.type = "search";
  $input.name = "query";
  $input.placeholder = "Búsqueda...";
  $inputBtn.type = "submit";
  $inputBtn.value = "Go";

  $ulForm.appendChild($liStForm);
  $ulForm.appendChild($hr);
  $ulForm.appendChild($liNdForm);
  $navForm.appendChild($spanForm);
  $navForm.appendChild($ulForm);

  $form.appendChild($navForm);
  $form.appendChild($input);
  $form.appendChild($inputBtn);

  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("artistSearch");
  }

  return $form;
}
