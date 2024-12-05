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





const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const imageSlider = document.querySelector(".sliderContainer");

let imageIndex = 0;

const images = document.querySelectorAll(".sliderContainerImage");


function sliderUpdate(){
    const imageWidth = images[0].clientWidth;

    imageSlider.scrollTo({
        left: imageIndex * imageWidth,
        behavior: "smooth",
    });

    

}

leftArrow.addEventListener("click", () => {

    if (imageIndex > 0){
        imageIndex--;
    }
    
    else {
        imageIndex = images.length - 1;
    }

    sliderUpdate()

});

rightArrow.addEventListener("click", () => {

    if (imageIndex < images.length - 1) {
        imageIndex++;
    }
    else {
        imageIndex = 0; 
    }

    sliderUpdate();


});