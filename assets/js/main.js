/**
 * Create carrousel elements
 */
const slider = document.querySelector(".slider");
const tittleText = document.querySelector(".text-presentation h1");
const descriptionText = document.querySelector(".text-presentation p");

const data = [{
        title: "Discover innovative ways to decorate",
        picture: "./assets/images/desktop-image-hero-1.jpg",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
        title: "We are available all across the globe",
        picture: "./assets/images/desktop-image-hero-2.jpg",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        title: "Manufactured with the best materials",
        picture: "./assets/images/desktop-image-hero-3.jpg",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
];

data.forEach((element) => {
    let imgElement = document.createElement("img");
    imgElement.className = "slider-img";
    imgElement.src = element.picture;
    imgElement.alt = element.title;
    slider.append(imgElement);
});

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
        descriptionText.textContent = data[index].description;
    } else {
        img[index].classList.remove("current");
        index = 0;
        img[index].classList.add("current");
        tittleText.textContent = data[index].title;
        descriptionText.textContent = data[index].description;
    }
};

const prevSlider = () => {
    if (index > 0) {
        img[index].classList.remove("current");
        index--;
        img[index].classList.add("current");
        tittleText.textContent = data[index].title;
        descriptionText.textContent = data[index].description;
    } else if (index === 0) {
        img[index].classList.remove("current");
        index = img.length - 1;
        img[index].classList.add("current");
        tittleText.textContent = data[index].title;
        descriptionText.textContent = data[index].description;
    }
};

next.addEventListener("click", nextSlider);
prev.addEventListener("click", prevSlider);

/** Menu toogle action */
const hamburgerBtn = document.querySelector("#hamburger_menu");
const hamburgerIcon = document.querySelector("#hamburger_menu img");
const closeBtn = document.querySelector(".close");

let isOpen = false;

const removeMenu = () => {
    document.querySelector(".backdrop").remove();
    document.querySelector(".navbar").classList.remove("open");
    document.querySelector(".close").remove();
    hamburgerBtn.style.display = "block";
};
const showMenu = () => {
    let open = !isOpen;
    const wrapper = document.querySelector("body");
    const nav = document.querySelector(".navbar");
    const span = document.createElement("span");
    let img = document.createElement("img");
    span.className = "close";
    img.setAttribute("src", "./assets/images/icons/icon-close.svg");
    span.append(img);
    nav.prepend(span);
    let backdrop = document.createElement("div");
    hamburgerBtn.style.display = "none";

    backdrop.className = "backdrop";
    wrapper.append(backdrop);
    nav.classList.add("open");
    if (open) {
        let btn = document.querySelector(".close");
        btn.addEventListener("click", removeMenu);
        backdrop.addEventListener("click", removeMenu);
    }
};

hamburgerBtn.addEventListener("click", showMenu);