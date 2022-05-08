// nav scroll
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.backgroundColor = "#ff8700";
    document.querySelector(".logo").style.color = "#f8f8f8";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
    document.querySelector(".logo").style.color = "#eb7e02";
  }
}

// nav toggle
const toggleMenu = () => {
  const toggleIcon = document.querySelector(".toggle-icon");
  const navbarLinks = document.querySelector(".navbar-links");

  toggleIcon.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbarLinks-active");
  });
};
toggleMenu();

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
});
