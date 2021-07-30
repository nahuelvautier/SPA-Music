const d = document,
  w = window;

export function responsiveMedia(mq) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      // Desktop
      d.querySelector(".desktop-navbar").style.display = "flex";
      d.querySelector(".panel-btn").style.display = "none"
    } else {
      // Mobile
      d.querySelector(".desktop-navbar").style.display = "none";
      d.querySelector(".panel-btn").style.display = "flex";
    }
  }

  responsive(breakpoint);
  breakpoint.addEventListener("change", responsive);
}