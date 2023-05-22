// hide nav on scroll down
const headerNav = document.querySelector(".header-nav");
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    headerNav.style.top = "0";
  } else {
    headerNav.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
