const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;
const slideInterval = 5000;

function activateSlide(index) {
    slides.forEach((s, i) => {
        s.classList.remove('active');
        s.querySelector('.number').classList.remove('active-number');
    });
    slides[index].classList.add('active');
    slides[index].querySelector('.number').classList.add('active-number');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    activateSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, slideInterval);

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        clearInterval(autoSlide);
        currentIndex = index;
        activateSlide(currentIndex);

        autoSlide = setInterval(nextSlide, slideInterval);
    });
});

activateSlide(currentIndex);
