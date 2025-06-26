const menu = document.querySelector("header");
const menuBtn = document.querySelector("#top-logo-nav button");
const logo = document.querySelector("#top-logo-nav img");
const icon = document.querySelector("#top-logo-nav button img");
const navBtns = document.querySelectorAll("header nav a");
const tabBtns = document.querySelectorAll("#tabs button");
const img = document.querySelector("#section-two-flex .image-wrapper img");
const heading = document.querySelector("#section-two-flex .para h3");
const paragraph = document.querySelector("#section-two-flex .para p");

/* fucntionality top nav menu in mobile layout */

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


/* functionality of tabs under features section */

tabBtns.forEach(tab => 
  tab.addEventListener("click", event => {
    tabBtns.forEach(btn => btn.classList.remove("selected"));

    event.currentTarget.classList.add("selected");

    switch(event.currentTarget.dataset.tab) {
        case "simple-bookmarking":
                                  img.setAttribute("src", "./images/illustration-features-tab-1.svg");

                                  heading.textContent = "Bookmark in one click";

                                  paragraph.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
                                  break;

        case "speedy-searching":  img.setAttribute("src", "./images/illustration-features-tab-2.svg");
                                  
                                  heading.textContent = "Intelligent search";

                                  paragraph.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
                                  break;
                       
        case "easy-sharing": img.setAttribute("src", "./images/illustration-features-tab-3.svg");
                                  
                                  heading.textContent = "Share your bookmarks";

                                  paragraph.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
                                  break;
                       
    }
}));
