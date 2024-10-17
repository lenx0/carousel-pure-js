const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;
const slideInterval = 300000;

function activateSlide(index) {
    slides.forEach((s, i) => {
        s.classList.remove('active');
        s.querySelector('.number').classList.remove('active-number');
    });
    slides[index].classList.add('active');
    slides[index].querySelector('.number').classList.add('active-number');
}

function moveSlideToEnd() {
    const firstSlide = slides.shift();
    slides.push(firstSlide);
    const sliderContainer = document.querySelector('.slider');
    sliderContainer.appendChild(firstSlide);
}

function moveClickedSlideToFront(clickedIndex) {
    const clickedSlide = slides[clickedIndex];
    slides.splice(clickedIndex, 1);
    slides.unshift(clickedSlide);
    const sliderContainer = document.querySelector('.slider');
    sliderContainer.insertBefore(clickedSlide, sliderContainer.firstChild);
}

function nextSlide() {
    moveSlideToEnd();
    activateSlide(0);
}

let autoSlide = setInterval(() => {
    nextSlide();
}, slideInterval);

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        clearInterval(autoSlide);

        if (!slide.classList.contains('active')) {
            moveClickedSlideToFront(index);
            activateSlide(0);
        }

        autoSlide = setInterval(() => {
            nextSlide();
        }, slideInterval);
    });
});

activateSlide(currentIndex);
