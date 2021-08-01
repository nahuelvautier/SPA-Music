import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange",  () => {
  scrollTo({
    top: 0
  })
  App();
});