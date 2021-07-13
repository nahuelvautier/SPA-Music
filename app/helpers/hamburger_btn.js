const d = document;

export default function hamburguerButton(panel, panelBtn) {
  const $panel = d.querySelector(panel),
    $hamburguerBtn = d.querySelector(panelBtn);

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      $panel.classList.toggle("is-active");
      $hamburguerBtn.classList.toggle("is-active");
    }
  });
}