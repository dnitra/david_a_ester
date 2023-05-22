// JavaScript to toggle the menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.querySelector(".header-nav").style.top = "0";
  } else {
    // Scrolling down
    document.querySelector(".header-nav").style.top = "-50px";
  }

  prevScrollPos = currentScrollPos;
});

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.toggle("menu-open");
    });

     document.querySelector(".header-nav").style.top = "-50px";
}
);

