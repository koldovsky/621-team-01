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
  
    let productsHtmlAdd = [];
      for (const product of products) {
          productsHtmlAdd.push(`
               <div class="slide-items">
                  <img class="img-carousel" src="${product.imgUrl}" alt="${product.name}">
                  <h4 class="carousel-name">${product.name} <span class="arrow-color">→</span></h4>
                  <p class="carousel-description">${product.description}</p>
               </div>  
            `);
      };

    (function() {
        const slides = productsHtmlAdd;
        let currentSlideIdx = 0;

        function showCurrentSlide() {
            if (window.innerWidth < 767) {
              const slideContainer = document.querySelector(".slide");
              slideContainer.innerHTML = slides[currentSlideIdx];
            } else {
              let slideContainer = document.querySelector(".slide");
              slideContainer.innerHTML =
                slides[currentSlideIdx] +
                slides[currentSlideIdx + 1] +
                slides[currentSlideIdx + 2] +
                slides[currentSlideIdx + 3];
            }
          }

        function nextSlide() {
          currentSlideIdx++;
          if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
          showCurrentSlide();
        }

        function previousSlide() {
          currentSlideIdx--;
          if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
          showCurrentSlide();
        }

        setInterval(nextSlide, 5000);
        showCurrentSlide ();

      document.querySelector(".left-arrow")
      .addEventListener("click", previousSlide);
      document.querySelector(".right-arrow")
      .addEventListener("click", nextSlide);
    })();
})();
