const closeBtn = document.querySelector(".fa-xmark");
const openBtn = document.querySelector(".fa-bars");
const mobileNav = document.querySelector(".navMobile");


openBtn.addEventListener("click", () => {

    closeBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    openBtn.classList.toggle("active");

});



closeBtn.addEventListener("click", () => {

    closeBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    openBtn.classList.toggle("active");

});