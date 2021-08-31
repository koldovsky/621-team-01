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
      if (window.innerWidth < 767) {
        const slideContainer = document.querySelector(".logo-block");
        slideContainer.innerHTML = slides[currentSlideIdx];
    } else {
      const slideContainer = document.querySelector(".logo-block");
      slideContainer.innerHTML =
      slides[currentSlideIdx] + slides[currentSlideIdx+1] + slides[currentSlideIdx+2] + slides[currentSlideIdx+3] + slides[currentSlideIdx+4] + slides[currentSlideIdx+5];
   }
  }

    //function nextSlide() {
        //currentSlideIdx++;
        //if (window.innerWidth < 767) {
            //if(currentSlideIdx >= slides.length) currentSlideIdx = 0;
        //showCurrentSlide();
        //}else{
            //(currentSlideIdx <= 1);
            //currentSlideIdx = slides.length - 1;
        //}
        //showCurrentSlide();

        //currentSlideIdx++;
        //if(currentSlideIdx >= slides.length) currentSlideIdx = 0 ;
        //currentSlideIdx = slides.length + 1;
       // showCurrentSlide();
        
    //}

   /*function prevSlide() {
        currentSlideIdx--;
        if(currentSlideIdx < 0)
        currentSlideIdx = slides.length - 1;
        showCurrentSlide();
    }*/
    function nextSlide() {
          currentSlideIdx++;
          if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
          showCurrentSlide();
      }
  
      function prevSlide() {
        currentSlideIdx--;
          if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
          showCurrentSlide();
      }
      /*function nextReviewSlide() {
        currentReviewSlideIdx++;
        if (currentReviewSlideIdx >= slidesReviews.length)
          currentReviewSlideIdx = 0;
        showCurrentReviewSlide();
      }
      function previousReviewSlide() {
        currentReviewSlideIdx--;
        if (currentReviewSlideIdx < 0)
          currentReviewSlideIdx = slidesReviews.length - 1;
        showCurrentReviewSlide();
      }*/

    showCurrentSlide();
    
    document.querySelector('.btn-next-footer').addEventListener('click', nextSlide);
    document.querySelector('.btn-prev-footer').addEventListener('click', prevSlide);
})();