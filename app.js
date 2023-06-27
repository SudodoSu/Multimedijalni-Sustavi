// Hamburger button

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


// Current Navbar

let current_location = window.location.pathname;
current_location = current_location.substring(1);
const current_nav_a_color = document.querySelectorAll(".current-nav-a-color");

current_nav_a_color.forEach((e, index) => {
    let current_location_check = e.getAttribute("href");
    if (current_location === current_location_check) {
        e.classList.add("a-color-nav");
    }
})


// Section cards on hover effect

const card = document.querySelectorAll(".card-js")
const card_image = document.querySelectorAll(".card-img-js")

card.forEach((e, index) => {
    if (screen.width >= 900) {
        e.addEventListener("mouseover", () => {
            card_image[index].style.borderRadius = "10%";
        })
        e.addEventListener("mouseout", () => {
            card_image[index].style.borderRadius = "";
        })
    }
})



// Popup Images

const popup_images = document.querySelectorAll(".popup-images");
const original_images = document.querySelectorAll(".original-images");
const x_popup = document.querySelectorAll(".x-popup")

original_images.forEach((e, index) => {
    console.log(e)
    e.addEventListener("click", () => {
        let pop_visibility = popup_images[index].getAttribute("data-visible");
        let pop_x = x_popup[index].getAttribute("data-visible");
        if (pop_visibility === "false") {
            popup_images[index].style.display = "grid";
            document.body.style.overflowY = "hidden";
            pop_x = "true";
        } else {
            popup_images[index].style.display = "none";
            pop_x = "false";
            document.body.style.overflowY = "auto";
        }
        x_popup.forEach((e, index) => {{
            if (pop_x === "true") {
                e.addEventListener("click", () => {
                    popup_images[index].style.display = "none";
                    document.body.style.overflowY = "auto";
                })
            }
        }})
    })
})



// Share buttons

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