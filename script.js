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

slidesCarousel.style.transform = `translateX(${-slideWidth}px)`;

nextBtn.addEventListener('click', () => {
    slidesCarousel.style.transition = 'all 0.3s ease-in-out';

    index++;
    slidesCarousel.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;

    items.forEach((item) => item.classList.remove('active'));

    if (index > slides.length - 1) {
        setTimeout(() => {
            index = 0;
            slidesCarousel.style.transform = `translateX(${-slideWidth}px)`;
            items[index].classList.add('active');
            slidesCarousel.style.transition = 'none';
        }, 300)
    } else {
        items[index].classList.add('active');
    }
});

prevBtn.addEventListener('click', () => {
    slidesCarousel.style.transition = 'all 0.3s ease-in-out';

    index--;
    slidesCarousel.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;

    items.forEach((item) => item.classList.remove('active'));

    if (index < 0) {
        setTimeout(() => {
            index = slides.length - 1;
            slidesCarousel.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;
            items[index].classList.add('active');
            slidesCarousel.style.transition = 'none';
        }, 300);
    } else {
        items[index].classList.add('active');
    }
});

items.forEach((item, i) => {
    slidesCarousel.style.transition = 'all 0.3s ease-in-out';

    item.addEventListener('click', () => {
        items.forEach((item) => item.classList.remove('active'));
        index = i;
        item.classList.add('active');
            slidesCarousel.style.transition = 'all 0.3s ease-in-out';

        slidesCarousel.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;
    });
});