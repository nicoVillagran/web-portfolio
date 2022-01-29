// DOM Elements
const all = document.querySelector(".all");
const header = document.querySelector("#header");
const headerNav = document.querySelector(".header__nav");
const headerA = document.querySelector(".header__a");
const stateScroll = scrollY;

// DOM Events
headerA.addEventListener("click", menuResponsive);
addEventListener("scroll", windowScroll);

// Associated Functions
function menuResponsive(){
    alert("hello, i am a button");
}

function windowScroll() {
    if(this.scrollY >= 520) {
        document.querySelectorAll(".span").forEach(e => e.removeAttribute("hidden"));
        header.classList.add("header__scroll");
    }
    else {
        header.classList.remove("header__scroll");
    }
}
// ------------------------------------------------------------ JS code.