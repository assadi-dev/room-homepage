const img = document.querySelectorAll(".slider-img");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let index = 0;

console.log(img.length);

const nextSlider = () => {
    if (index < img.length - 1) {
        img[index].classList.remove("current");
        index++;
        img[index].classList.add("current");
    } else {
        img[index].classList.remove("current");
        index = 0;
        img[index].classList.add("current");
    }
};

const prevSlider = () => {
    if (index > 0) {
        img[index].classList.remove("current");
        index--;
        img[index].classList.add("current");
    } else if (index === 0) {
        img[index].classList.remove("current");
        index = img.length - 1;
        img[index].classList.add("current");
    }
};

next.addEventListener("click", nextSlider);
prev.addEventListener("click", prevSlider);