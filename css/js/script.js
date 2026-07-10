// ===============================
// Aventra Digital JavaScript
// ===============================

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "#06101d";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(7,17,31,.95)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });
});

// Reveal Animation
const revealElements = document.querySelectorAll(
".service-card,.team-card,.result-card,.box"
);

const reveal = () => {

    const trigger = window.innerHeight - 100;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

};

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();
