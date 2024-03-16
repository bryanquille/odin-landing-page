// Menu Mobile 

const navbar = document.querySelector("#navbar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const navItems = document.querySelectorAll(".navitem");

openMenu.addEventListener("click", () => {
    navbar.classList.add("visible");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("visible");
});

const navItemsArray = Array.from(navItems);
navItemsArray.forEach((item) => {
    item.addEventListener("click", () => {
        navbar.classList.remove("visible");
    });
});
