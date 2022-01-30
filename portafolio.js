// DOM Elements
const all = document.querySelector(".all");
const header = document.querySelector("#header");
const headerNav = document.querySelector(".header__nav");
const headerA = document.querySelector(".header__a");
const stateScroll = scrollY;

// DOM Events
// headerA.addEventListener("mouseover", menuResponsive);
addEventListener("scroll", windowScroll);

// Associated Functions
function menuResponsive(){
    alert("hello, i am a button");
}

function windowScroll() {
    let spans = document.querySelectorAll(".nav__span");
    let newSpan = document.querySelector(".span2");

    if(this.scrollY >= 520) {
        newSpan.classList.replace("header__a", "new__a");
        // document.querySelectorAll(".span").forEach(e => e.removeAttribute("hidden"));
        header.classList.add("header__scroll");
        spans.forEach(e => e.style.color = "#1F618D")
    }
    else {
        newSpan.classList.replace("new__a", "header__a");
        header.classList.remove("header__scroll");
        spans.forEach(e => e.style.color = "#fff");
    }
}
// ------------------------------------------------------------ JS code.