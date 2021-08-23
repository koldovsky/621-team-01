(function() {
  
    const slides = [
        '<img src="img/cat.png" alt="Cat">',
        '<img src="img/dog.png" alt="Dog">',
        '<img src="img/parrot.png" alt="Parrot">'
    ];

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carousel-product .slide');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        showCurrentSlide();
    }

    setInterval(nextSlide, 3000);
    showCurrentSlide();

    document.querySelector('.carousel-product .next-slide')
     .addEventListener('click', nextSlide);

})();