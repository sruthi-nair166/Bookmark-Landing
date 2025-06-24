const menu = document.querySelector("header");
const menuBtn = document.querySelector("#top-logo-nav button");
const logo = document.querySelector("#top-logo-nav img");
const icon = document.querySelector("#top-logo-nav button img");
const navBtns = document.querySelectorAll("header nav a");

let isToggleBtnOn = false;

function add() {
    menu.setAttribute("id", "header");
    logo.setAttribute("src", "./images/logo-bookmark-dark.svg");
    icon.setAttribute("src", "./images/icon-close.svg");
    isToggleBtnOn = true;
    document.body.style.overflow = "hidden";
}

function remove() {
    menu.removeAttribute("id");
    logo.setAttribute("src", "./images/logo-bookmark.svg");
    icon.setAttribute("src", "./images/icon-hamburger.svg");
    isToggleBtnOn = false;
    document.body.style.overflow = "";
}

menuBtn.addEventListener("click", () => isToggleBtnOn ? remove() : add());

window.addEventListener("resize", () => 
                               window.innerWidth >= 971 ? remove() : "");

navBtns.forEach(btn => btn.addEventListener("click", () => remove()));
