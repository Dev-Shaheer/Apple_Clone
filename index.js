// JavaScript for slider functionality
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
