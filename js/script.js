// Menu Mobile 
const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const navItems = document.querySelectorAll(".navitem");

openMenu.addEventListener("click", () => {
    navbar.classList.add("visible");
    body.setAttribute("style", "overflow: hidden;");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("visible");
    body.removeAttribute("style");
});

const navItemsArray = Array.from(navItems);
navItemsArray.forEach((item) => {
    item.addEventListener("click", () => {
        navbar.classList.remove("visible");
        body.removeAttribute("style");
    });
});
