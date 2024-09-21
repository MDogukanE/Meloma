document.addEventListener('DOMContentLoaded', function() {
    function initSlider(sliderId) {
        let currentIndex = 0;
        const slider = document.getElementById(sliderId);
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            const offset = -index * 100;
            slider.querySelector('.slides').style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        slider.querySelector('.next').addEventListener('click', nextSlide);
        slider.querySelector('.prev').addEventListener('click', prevSlide);

        // Sliderı otomatik döndürmek için 8 saniyede bir nextSlide çağırabiliriz.
        setInterval(nextSlide, 8000);
    }

    // Tek bir sliderı başlat
    initSlider('slider1');
});

