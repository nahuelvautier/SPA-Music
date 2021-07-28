export async function connect (props) {
  const { url, cbSuccess } = props;

  await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
      let message = err.statusText || "Hubo un error";

      const $error = document.createElement("div"),
        $pError = document.createElement("p");
      $pError.classList.add("error");
      $pError.textContent = `Error ${err.status}: ${message}`;
      
      $error.appendChild($pError);
      document.getElementById("main").appendChild($error);

      console.error(err);
    });
}