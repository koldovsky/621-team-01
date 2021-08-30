(function () {
  const productsJson = `[
      {
        "id": "1",
        "name": "For Cats",
        "description": "Dry Food • Wet Food • Treats •&ensp;Catnip &amp; Grass • Litter Boxes •&ensp;Bowls &amp; Feeders • Toys • Beds •&nbsp",
        "imgUrl": "img/cat.png"
      },
      {
          "id": "2",
          "name": "For Dogs",
          "description": "Dry &amp; Canned Food • Jerky •&ensp;Chewy Treats • Bowls • Toys •&ensp;Collars and Leashes • Clothes •",
          "imgUrl": "img/dog.png"
      },
      {
          "id": "3",
          "name": "For Parrots",
          "description": "Food • Treats • Cages &amp; Stands •&ensp;Vitamins • Bowls &amp; Feeders •&ensp;Litter &amp; Nesting • Odor Control •",
          "imgUrl": "img/parrot.png"
      },
      {
          "id": "4",
          "name": "For Rabbits",
          "description": "Food • Treats • Hay • Cages •&ensp;Litter &amp; Bedding • Harnesses •&ensp;Toys • Odor Removers•&nbsp",
          "imgUrl": "img/rabbit.png"
      },
      {
          "id": "5",
          "name": "For Fish",
          "description": "Food • Feeders • Aquariums •&ensp;Filters &amp; Pumps • Cleaning •&ensp;Water Care • Decor •",
          "imgUrl": "img/fish.png"
      },
      {
          "id": "6",
          "name": "For Hamsters",
          "description": "Food • Soft &amp; Chewy Treats •&ensp;Litter • Furniture • Collars and Leashes • Bowls • Toys • Beds •&nbsp",
          "imgUrl": "img/hamster.png"
      }
  ]`;

  const products = JSON.parse(productsJson);

  let productsHtmlArray = [];
    for (const product of products) {
      productsHtmlArray.push (`
             <div class="slide-items">
                <img class="img-carousel" src="${product.imgUrl}" alt="${product.name}">
                <h4 class="carousel-name">${product.name} <span class="arrow-color">→</span></h4>
                <p class="carousel-description">${product.description}</p>
             </div>  
          `);
    };

  const slides = productsHtmlArray;
  let currentSlideIdx = 0;
  let twoSlideIndex = 1;
  let threeSlideIndex = 2;
  let fourSlideIndex = 3;

  function showCurrentSlide() {
    if (window.innerWidth < 767) {
     const slideContainer = document.querySelector(".slide");
      slideContainer.innerHTML = slides[currentSlideIdx];
    } else {
      const slideContainer = document.querySelector(".slide");
      slideContainer.innerHTML =
      slides[currentSlideIdx] + slides[twoSlideIndex] + slides[threeSlideIndex] + slides[fourSlideIndex];
   }
  }

  function nextSlide() {
    currentSlideIdx++;
   if (window.innerWidth < 767) {
      if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
      showCurrentSlide();
    } else
      if (currentSlideIdx === slides.length) {
        currentSlideIdx = 0;
        twoSlideIndex = currentSlideIdx + 1;
        threeSlideIndex = currentSlideIdx + 2;
        fourSlideIndex = currentSlideIdx + 3;
    } else
      if (currentSlideIdx === slides.length - 3) {
        twoSlideIndex = currentSlideIdx + 1;
        threeSlideIndex = currentSlideIdx + 2;
        fourSlideIndex = 0;
    } else
      if (currentSlideIdx === slides.length - 2) {
        twoSlideIndex = currentSlideIdx + 1;
        threeSlideIndex = 0;
        fourSlideIndex = 1;
    } else
     if(currentSlideIdx === slides.length - 1) {
        twoSlideIndex = 0;
        threeSlideIndex = 1;
        fourSlideIndex = 2;
    } else {
        twoSlideIndex = currentSlideIdx + 1;
        threeSlideIndex = currentSlideIdx + 2;
        fourSlideIndex = currentSlideIdx + 3;
    } 
    showCurrentSlide();
  }

  function previousSlide() {
    currentSlideIdx--;
    if (window.innerWidth < 767) {
       if (currentSlideIdx < 0) 
          currentSlideIdx = slides.length - 1;
       showCurrentSlide();
    } else 
      if (currentSlideIdx === - 1) {
        currentSlideIdx = slides.length - 1;
        twoSlideIndex = 0;
        threeSlideIndex = 1;
        fourSlideIndex = 2;
    } else
    if (currentSlideIdx === slides.length - 2) {
        currentSlideIdx = slides.length - 2;
        twoSlideIndex = slides.length - 1;
        threeSlideIndex = 0;
        fourSlideIndex = 1;
    } else
    if (currentSlideIdx === slides.length - 3) {
        twoSlideIndex = slides.length - 2;
        threeSlideIndex = slides.length - 1;
        fourSlideIndex = 0;
    } else 
      if (currentSlideIdx === slides.length - 4) {
        twoSlideIndex = slides.length - 3;
        threeSlideIndex = slides.length - 2;
        fourSlideIndex = slides.length - 1;
    } else 
    if (currentSlideIdx === slides.length - 5) {
      twoSlideIndex = slides.length - 4;
      threeSlideIndex = slides.length - 3;
      fourSlideIndex = slides.length - 2;
    } else{
      twoSlideIndex = slides.length - 5;
      threeSlideIndex = slides.length - 4;
      fourSlideIndex = slides.length - 3;
    }
    showCurrentSlide();
  }
  
  showCurrentSlide();

  document.querySelector(".left-arrow")
  .addEventListener("click", previousSlide);
        
  document.querySelector(".right-arrow")
  .addEventListener("click", nextSlide);

})();
