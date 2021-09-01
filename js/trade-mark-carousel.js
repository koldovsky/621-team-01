(function() {
    const slides = [
        '<img src="img/tigerino.webp" alt="tigerino-trade-mark">',
        '<img src="img/purizon.webp" alt="purizon-trade-mark">',
        '<img src="img/gourmet.webp" alt="gourmet-trade-mark">',
        '<img src="img/felix.webp" alt="felix-trade-mark">',
        '<img src="img/applaws.webp" alt="applaws-trade-mark">',
        '<img src="img/rocco.webp" alt="rocco-trade-mark">',
        '<img src="img/dokas.webp" alt="dokas-trade-mark">'
    ];
    let currentSlideIdx = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carousel-trade-mark .slide');
        slideContainer.innerHTML = slides[currentSlideIdx] + slides[currentSlideIdx+1] + slides[currentSlideIdx+2] + slides[currentSlideIdx+3];
    }
    function nextSlide() {
        currentSlideIdx++;
        if(currentSlideIdx >= slides.length - 3) currentSlideIdx = 0;
        showCurrentSlide();
    }
    function prevSlide() {
        currentSlideIdx--;
        if(currentSlideIdx < 0)
        currentSlideIdx = slides.length - 1;
        showCurrentSlide();
    }
    //setInterval(nextSlide, 3000);
    showCurrentSlide();
    document.querySelector('.carousel-trade-mark .btn-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-trade-mark .btn-prev').addEventListener('click', prevSlide);
})();