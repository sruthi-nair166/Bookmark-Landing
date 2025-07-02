const menu = document.querySelector("header");
const menuBtn = document.querySelector("#top-logo-nav button");
const logo = document.querySelector("#top-logo-nav img");
const icon = document.querySelector("#top-logo-nav button img");
const navBtns = document.querySelectorAll("header nav a");
const tabBtns = document.querySelectorAll("#tabs button");
const tabPanel = document.getElementById("section-two-flex");
const img = document.querySelector("#section-two-flex .image-wrapper img");
const heading = document.querySelector("#section-two-flex .para h3");
const paragraph = document.querySelector("#section-two-flex .para p");
const faqs = document.querySelectorAll("#faq-container button");
const inputWrapper = document.querySelector(".wrapper");
const input = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const error = document.querySelector(".wrapper img");

/* fucntionality top nav menu in mobile layout */

let isToggleBtnOn = false;

function add() {
    menu.setAttribute("id", "header");
    logo.setAttribute("src", "./images/logo-bookmark-dark.svg");
    icon.setAttribute("src", "./images/icon-close.svg");
    menuBtn.setAttribute("aria-label", "close menu");
    menuBtn.setAttribute("aria-expanded", "true");
    isToggleBtnOn = true;
    document.body.style.overflow = "hidden";
}

function remove() {
    menu.removeAttribute("id");
    logo.setAttribute("src", "./images/logo-bookmark.svg");
    icon.setAttribute("src", "./images/icon-hamburger.svg");
    menuBtn.setAttribute("aria-label", "open menu");
    menuBtn.setAttribute("aria-expanded", "false");
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
    tabBtns.forEach(btn => {
        btn.classList.remove("selected");
        btn.setAttribute("aria-selected", "false");
    });

    event.currentTarget.classList.add("selected");
    event.currentTarget.setAttribute("aria-selected", "true");

    switch(event.currentTarget.id) {
        case "tab-1":             
                                  tabPanel.setAttribute("aria-labelled-by", "tab-1");
                                  img.setAttribute("src", "./images/illustration-features-tab-1.svg");

                                  heading.textContent = "Bookmark in one click";

                                  paragraph.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
                                  break;

        case "tab-2":             
                                  tabPanel.setAttribute("aria-labelled-by", "tab-2");
                                  img.setAttribute("src", "./images/illustration-features-tab-2.svg");
                                  
                                  heading.textContent = "Intelligent search";

                                  paragraph.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
                                  break;
                       
        case "tab-3": 
                                  tabPanel.setAttribute("aria-labelled-by", "tab-3");
                                  img.setAttribute("src", "./images/illustration-features-tab-3.svg");
                                  
                                  heading.textContent = "Share your bookmarks";

                                  paragraph.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
                                  break;
                       
    }
}));

/* faq section */

faqs.forEach(btn => {
    btn.addEventListener("click", event => {
        const currentBtn = event.currentTarget;
        const answer = currentBtn.nextElementSibling;
        const isExpanded = currentBtn.getAttribute("aria-expanded") === "true";

        currentBtn.setAttribute("aria-expanded", String(!isExpanded));
        answer.hidden = isExpanded; 
        answer.classList.toggle("open", !isExpanded);
    });
});

/* input check */

submitBtn.addEventListener("click", () => {

    if(!input.checkValidity()) {
        error.style.display = "block";

        if(!inputWrapper.querySelector(".error-msg")) {
            const msg = document.createElement("div");
            msg.classList.add("error-msg");
            msg.setAttribute("id", "email-error");
            msg.setAttribute("role", "alert");
            msg.textContent = "Whoops, make sure it's an email";
            inputWrapper.appendChild(msg);
        }

        input.classList.add("error");
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", "email-error");

    } else {
        error.style.display = "none";
        input.classList.remove("error");
        
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");

        const existingMsg = inputWrapper.querySelector(".error-msg");
        if(existingMsg) existingMsg.remove();
    }

    input.value = "";
});