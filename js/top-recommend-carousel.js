(function () {
    const slides = [
        `<img src="img/dog-fun-set.png" alt="doggy fun set">`,
        `<img src="img/pillow-bed.png" alt="duna pillow bed">`,
        `<img src="img/retractable-leach.png" alt="aga retractable leach">`,
        `<img src="img/doggy-2-bunch-toy.png" alt="doggy 2 bunch toy">`
    ];

    let currentSlideIdx = 0;

    function showCurrentSlide () {
        const slideContainer = document.querySelector('.carousel-prod .top-slide');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide () {
        currentSlideIdx++;
        if (currentSlideIdx > slides.length) currentSlideIdx = 0;
        showCurrentSlide();
    }

    setInterval(nextSlide, 4000);
    showCurrentSlide();
});