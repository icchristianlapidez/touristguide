// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    const icon = this.querySelector('.menu-icon');
    icon.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-play carousel
let autoPlayInterval = setInterval(nextSlide, 4000);

// Button controls
document.getElementById('prevBtn').addEventListener('click', function() {
    clearInterval(autoPlayInterval);
    prevSlide();
    autoPlayInterval = setInterval(nextSlide, 4000);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    clearInterval(autoPlayInterval);
    nextSlide();
    autoPlayInterval = setInterval(nextSlide, 4000);
});

// Dot controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        clearInterval(autoPlayInterval);
        currentSlide = index;
        showSlide(currentSlide);
        autoPlayInterval = setInterval(nextSlide, 4000);
    });
});