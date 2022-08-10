const slidesCarousel = document.querySelector('.slides-carousel');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let index = 0;
const slideWidth = slides[0].clientWidth;

nextBtn.addEventListener('click', () => {
    index++;
    slidesCarousel.style.transform = `translateX(${-slideWidth * index}px)`;
})

prevBtn.addEventListener('click', () => {
    index--;
    slidesCarousel.style.transform = `translateX(${-slideWidth * index}px)`;
})