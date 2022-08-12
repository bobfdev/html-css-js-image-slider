const slidesCarousel = document.querySelector('.slides-carousel');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const items = document.querySelectorAll('.item');

let index = 0;
const slideWidth = slides[0].clientWidth;

slidesCarousel.insertAdjacentHTML(
    'afterbegin',
    slides[slides.length - 1].outerHTML
);

slidesCarousel.insertAdjacentHTML('beforehand', slides[0].outerHTML);

nextBtn.addEventListener('click', () => {
    slidesCarousel.style.transition = 'all 0.3s ease-in-out';

    index++;
    slidesCarousel.style.transform = `translateX(${-slideWidth * index}px)`;

    items.forEach((item) => item.classList.remove('active'));

    if (index > slides.length - 1) {
        index = 0;
        slidesCarousel.style.transform = `translateX(0px)`;
        items[index].classList.add('active');
    } else {
        items[index].classList.add('active');
    }
})

prevBtn.addEventListener('click', () => {
    slidesCarousel.style.transition = 'all 0.3s ease-in-out';

    index--;
    slidesCarousel.style.transform = `translateX(${-slideWidth * index}px)`;

    items.forEach((item) => item.classList.remove('active'));

    if (index < 0) {
        index = slides.length - 1;
        slidesCarousel.style.transform = `translateX(${-slideWidth * index}px)`;
        items[index].classList.add('active');
    } else {
        items[index].classList.add('active');
    }
})

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        items.forEach((item) => item.classList.remove('active'));
        item.classList.add('active');
        slidesCarousel.style.transform = `translateX(${-slideWidth * index}px)`;
    });
});