const sliders = Array.from(document.querySelectorAll("div .slider__item"));
let sliderArrowPrev = document.querySelectorAll(".slider__arrow_prev");
let sliderArrowNext = document.querySelectorAll(".slider__arrow_next");

let activeItemIndex;
let activeItem = () => { 
    activeItemIndex = sliders.indexOf(document.querySelector(".slider__item_active"));
return activeItemIndex;
} 

activeItem();

let removeSliderItemActive = () => {
    sliders[activeItemIndex].classList.remove("slider__item_active")
}

function nextSlide() {
    removeSliderItemActive();
    if(activeItemIndex === (sliders.length - 1)){
        sliders[0].classList.add("slider__item_active");
        activeItem()
    } else {
    sliders[activeItemIndex = activeItemIndex +1].classList.add("slider__item_active")
    }
}

function nextSlideRemove() {
    removeSliderItemActive();
    if (activeItemIndex === 0) {
        sliders[sliders.length - 1].classList.add("slider__item_active");
        activeItem()
    } else{
    
    sliders[activeItemIndex -= 1].classList.add("slider__item_active")
    }
}

sliderArrowNext[0].addEventListener("click", nextSlide);
sliderArrowPrev[0].addEventListener("click", nextSlideRemove);