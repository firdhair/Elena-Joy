const nav = document.querySelector(".nav-links")
const burger = document.querySelector('.burger')
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => { // when clicked the code below will be run
    nav.classList.toggle("nav-open");     
    burger.classList.toggle("toggle");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    })
});