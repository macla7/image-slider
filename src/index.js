import "./style.scss";

import img1 from "./flicks/img1.jpg";
import img2 from "./flicks/img2.jpg";
import img3 from "./flicks/img3.jpg";
import img4 from "./flicks/img4.jpg";
import img5 from "./flicks/img5.jpg";

const imgSli = document.querySelectorAll(".slideshow-container");

function addImg(img) {
  const ele = document.createElement("div");
  const myIcon = new Image();

  ele.classList.add("mySlides", "fade", "hide");

  myIcon.src = img;

  ele.appendChild(myIcon);

  return ele;
}

imgSli[0].appendChild(addImg(img1));
imgSli[0].appendChild(addImg(img2));
imgSli[0].appendChild(addImg(img3));
imgSli[0].appendChild(addImg(img4));
imgSli[0].appendChild(addImg(img5));

const nextArrow = document.querySelectorAll(".next");
const prevArrow = document.querySelectorAll(".prev");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].classList.add("hide");
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.remove("hide");
  dots[slideIndex - 1].classList.add("active");
}

function autoSlide() {
  slideIndex += 1;
  showSlides(slideIndex);
  setTimeout(autoSlide, 5000);
}

autoSlide();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

nextArrow[0].addEventListener("click", () => {
  plusSlides(1);
});

prevArrow[0].addEventListener("click", () => {
  plusSlides(-1);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide(i + 1);
  });
});
