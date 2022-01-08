/**
 * Create carrousel elements
 */
const slider = document.querySelector(".slider");
const tittleText = document.querySelector(".text-presentation h1");
const descriptionText = document.querySelector(".text-presentation p");

const data = [{
        title: "Discover innovative ways to decorate",
        picture: "./assets/images/desktop-image-hero-1.jpg",
        description: "",
    },
    {
        title: "We are available all across the globe",
        picture: "./assets/images/desktop-image-hero-2.jpg",
        description: "",
    },
    {
        title: "Manufactured with the bes materials",
        picture: "./assets/images/desktop-image-hero-3.jpg",
        description: "",
    },
];

for (let i = 0; i < 3; i++) {
    let imgElement = document.createElement("img");
    imgElement.className = "slider-img";
    imgElement.src = data[i].picture;
    slider.append(imgElement);
}

/**
 * slider actions
 */
const img = document.querySelectorAll(".slider-img");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
img[0].classList.add("current");
let index = 0;

const nextSlider = () => {
    if (index < img.length - 1) {
        img[index].classList.remove("current");
        index++;
        img[index].classList.add("current");
        tittleText.textContent = data[index].title;
    } else {
        img[index].classList.remove("current");
        index = 0;
        img[index].classList.add("current");
        tittleText.textContent = data[index].title;
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