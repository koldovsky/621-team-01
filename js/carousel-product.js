(function () {
    const productsJson = `[
        {
            "id": "1",
            "name": "For Cats →",
            "description": "Dry Food • Wet Food • Treats •&ensp;Catnip &amp; Grass • Litter Boxes •&ensp;Bowls &amp; Feeders
            • Toys • Beds •&nbsp",
            "imgUrl": "img/cat.png"
        },
        {
            "id": "2",
            "name": "For Dogs →",
            "description": "Dry &amp; Canned Food • Jerky •&ensp;Chewy Treats • Bowls • Toys •&ensp;Collars and Leashes •
            Clothes •",
            "imgUrl": "img/dog.png"
        },
        {
            "id": "3",
            "name": "For Parrots →",
            "description": "Food • Treats • Cages &amp; Stands •&ensp;Vitamins • Bowls &amp; Feeders •&ensp;Litter &amp;
            Nesting • Odor Control •",
            "imgUrl": "img/parrot.png"
        },
        {
            "id": "4",
            "name": "For Rabbits →",
            "description": "Food • Treats • Hay • Cages •&ensp;Litter &amp; Bedding • Harnesses •&ensp;Toys • Odor Removers
            •&nbsp",
            "imgUrl": "img/rabbit.png"
        },
        {
            "id": "5",
            "name": "For Fish →",
            "description": "Food • Feeders • Aquariums •&ensp;Filters &amp; Pumps • Cleaning •&ensp;Water Care • Decor •",
            "imgUrl": "img/fish.png"
        },
        {
            "id": "6",
            "name": "For Hamsters →",
            "description": "Food • Soft &amp; Chewy Treats •&ensp;Litter • Furniture • Collars and Leashes • Bowls • Toys •
            Beds •&nbsp",
            "imgUrl": "img/hamster.png"
        }
    ]`;
  
    const products = JSON.parse(productsJson);
  
    let productsHtml = [];
    function showProducts(products) {
      const allProducts = [...products];
      for (const product of allProducts) {
          productsHtml.push(`
               <div class="slide">
                  <img src="${product.imgUrl}" alt="${product.name}">
                  <h4>"${product.name}"</h4>
                  <p>"${product.description}"</p>
               </div>  
            `);
        }
      return productsHtml;
    }
    showProducts(products);
  
    const slidesProducts = [...productsHtml];
    let currentSlideIdx = 0;
    function showCurrentProductSlide() {
      console.log(window.innerWidth);
      if (window.innerWidth < 700) {
        let slideContainer = document.querySelector(".carousel-product");
        slideContainer.innerHTML = slidesProducts[currentSlideIdx];
      } else {
        let slideContainer = document.querySelector(".carousel-product");
        slideContainer.innerHTML =
          slidesProducts[currentSlideIdx] +
          slidesProducts[currentSlideIdx + 1] +
          slidesProducts[currentSlideIdx + 2];
      }
    }
  
    function nextProductSlide() {
      if (window.innerWidth < 700) {
        currentSlideIdx++;
        if (currentSlideIdx >= slidesProducts.length) currentSlideIdx = 0;
        showCurrentProductSlide();
      } else {
        currentSlideIdx += 3;
        if (currentSlideIdx >= slidesProducts.length - 3) currentSlideIdx = 0;
        showCurrentProductSlide();
      }
    }
  
    function previousProductSlide() {
      currentSlideIdx--;
      if (window.innerWidth < 700) {
        if (currentSlideIdx < 0) currentSlideIdx = slidesProducts.length - 1;
        showCurrentProductSlide();
      } else {
        if (currentSlideIdx <= 3) currentSlideIdx = slidesProducts.length - 3;
        showCurrentProductSlide();
      }
    }
  
    setInterval(nextProductSlide, 5000);
    showCurrentProductSlide();
  
    window.addEventListener("resize", showCurrentProductSlide);
   
    document
      .querySelector(".right-arrow")
      .addEventListener("click", nextProductSlide);
  
    document
      .querySelector(".left-arrow")
      .addEventListener("click", previousProductSlide);
})();
