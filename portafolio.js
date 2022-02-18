// DOM Elements
const all = document.querySelector(".all");
const header = document.querySelector("#header");
const headerNav = document.querySelector(".header__nav");
const headerA = document.querySelector(".header__a");
const button = document.querySelector(".menuButton");
const form = document.querySelector(".form");
let spans;
let newSpan;

// DOM Events
button.addEventListener("click", menuResponsive);
addEventListener("scroll", windowScroll);
form.addEventListener("submit", handleSubmit);

// Associated Functions
function menuResponsive(){
    let num = 300;
    if(this.name == "false") {
        document.querySelectorAll(".menuButton__nav-a").forEach(e => e.style.right = 0)
        this.name = true;
    }
    else {
        document.querySelectorAll(".menuButton__nav-a").forEach((e) => {
            num += 40
            e.style.right = `-${num}%`;
        })
        this.name = false;
    }
}

function windowScroll() {
    spans = document.querySelectorAll(".header__li-a");
    newSpan = document.querySelector(".span2");

    if(this.scrollY >= 520) {
        newSpan.classList.replace("header__a", "new__a");
        header.classList.add("header__scroll");
        // spans.forEach(e => e.style.color = "#1F618D")
        spans.forEach((e) => {
            if (e.getAttribute("name")) e.classList.replace("header__li-a", "header__scroll-a");
        })
    }
    else {
        newSpan.classList.replace("new__a", "header__a");
        header.classList.remove("header__scroll");
        document.querySelectorAll(".header__scroll-a").forEach(e => e.classList.replace("header__scroll-a", "header__li-a"));
        // spans.forEach(e => e.style.color = "#fff");
    }
}

async function handleSubmit(e) {
    e.preventDefault();
    const formDate = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formDate,
        headers: {
            'Accept': 'application/json'
        } 
    })
    if (response.ok) {
        this.reset();
        alert("Thank you for contact me, i will write you");
    } else {
        alert("Oops! There was a problem submitting your form")
    }
}
// ------------------------------------------------------------ JS code.