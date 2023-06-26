const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".hamburger-navigation");


hamburger.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        hamburger.classList.add("navigation-mode");
    } else {
        nav.setAttribute("data-visible", false);
        hamburger.classList.remove("navigation-mode");
    }
});

const facebook_btn = document.querySelector(".facebook-btn");
const twitter_btn = document.querySelector(".twitter-btn");
const pinterest_btn = document.querySelector(".pinterest-btn");
const linkedin_btn = document.querySelector(".linkedin-btn");
const whatsapp_btn = document.querySelector(".whatsapp-btn");


function init() {
    const pinterest_image = document.querySelector(".logo-img-header");
    let postURL = encodeURI(document.location.href);
    let postTitle = encodeURI("Welcome to WatchTower");
    let postImage = encodeURI(pinterest_image.src);

    facebook_btn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postURL}`
    );

    twitter_btn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postURL}&text=${postTitle}`
    );

    pinterest_btn.setAttribute(
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?media=${postImage}&url=${postURL}&description=${postTitle}`
    );

    linkedin_btn.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postURL}&title=${postTitle}`
    );

    whatsapp_btn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postURL}`
    );
}

init();