const slidesData = [
    {
        title: "SUSTENTABILIDADE",
        description: "Racionalizando o<br>trabalho, protegendo<br> o meio ambiente",
        imageUrl: "./images/forest0.png",
        number: "01"
    },
    {
        title: "QUALIDADE",
        description: "Garantir a<br>excelência em cada<br> etapa",
        imageUrl: "./images/forest1.jpg",
        number: "02"
    },
    {
        title: "INOVAÇÃO",
        description: "Criar soluções<br>eficientes, sempre em busca<br> de melhorias contínuas",
        imageUrl: "./images/forest2.jpg",
        number: "03"
    }
];

function generateSlides() {
    const slider = document.getElementById('slider');
    slidesData.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        if (index === 0) slideElement.classList.add('active');
        slideElement.setAttribute('style', `background-image: url('${slide.imageUrl}');`);
        slideElement.setAttribute('data-index', index);

        slideElement.innerHTML = `
            <span class="number">${slide.number}</span>
            <div class="text-container">
                <span class="title">${slide.title}</span>
                <br>
                <span class="description">${slide.description}</span>
                <div class="button-container">
                    <button class="btn" aria-label="Ver produtos de ${slide.title.toLowerCase()}">Produtos</button>
                    <button class="btn" aria-label="Saiba mais sobre ${slide.title.toLowerCase()}">Saiba mais</button>
                </div>
            </div>
        `;

        slider.appendChild(slideElement);
    });
}

function initCarousel() {
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
}

generateSlides();
initCarousel();
