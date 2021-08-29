(function () {
    const carouselContent = document.querySelector('#carouselContent');
    const carouselLeftButton = document.querySelector('#carouselLeftButton');
    const carouselRightButton = document.querySelector('#carouselRightButton');

    let carouselLeftValue = 0;
    let totalWidth = carouselContent.getBoundingClientRect().width;
    let widthToMove = 180 + 16 + 180 + 16; 
    let arrowBtnWidth = 50;
    let noOfSlides = totalWidth / widthToMove;
    let currentSlide = 1;

    carouselLeftButton.addEventListener('click', moveCarouselRight);
    carouselRightButton.addEventListener('click', moveCarouselLeft);

   
   
   
    function moveCarouselLeft() {
        if (currentSlide == 1) { 
            carouselLeftValue -= widthToMove - arrowBtnWidth;
        } else { 
            carouselLeftValue -= widthToMove; 
        }
        currentSlide++;
        
        carouselContent.style.left = `${carouselLeftValue}px`;

    }

    function moveCarouselRight() {
        if (currentSlide == 2) { carouselLeftValue = 8;
        } else { 
            carouselLeftValue += widthToMove; 
        }
        currentSlide--;
        
        carouselContent.style.left = `${carouselLeftValue}px`;

    }

     
})();
