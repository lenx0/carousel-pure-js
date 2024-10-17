const slides = document.querySelectorAll('.slide');

slides[0].querySelector('.number').classList.add('active-number');

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        slides.forEach(s => {
            s.classList.remove('active');
            const number = s.querySelector('.number');
            number.classList.remove('active-number');
        });
        
        slide.classList.add('active');
        const activeNumber = slide.querySelector('.number');
        activeNumber.classList.add('active-number');
    });
});


