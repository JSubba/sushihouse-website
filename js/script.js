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

// menu data
const displayMenuItems = document.querySelector(".menu");

fetch("menu.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let menuItems = data.menu;

    showItems = "";
    menuItems = menuItems.map((item) => {
      const { name, price, description, image } = item;

      showItems += ` 
      <div class="menu-content">
      <img src="${image}" alt="menu-image"/>
        <h4>${name}</h4>
        <p>&yen;${price}</p>
        <p><small>${description}</small></p>
      </div>
      `;

      displayMenuItems.innerHTML = showItems;
    });
  })
  .catch((error) => console.log("Error: " + error));
