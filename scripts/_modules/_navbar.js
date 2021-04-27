const navbarToggle = (nav_toggler, nav_target) => {
  nav_toggler.addEventListener("click", (e) => {
    nav_target.classList.toggle("ch-navbar-menu-slide-active");
  });
};

const nav_toggler = document.querySelector(".ch-navbar-menu-toggler");
const nav_target = document.getElementById(nav_toggler.dataset.target);

navbarToggle(nav_toggler, nav_target);
