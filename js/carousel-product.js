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
                  <img src="${product.imgUrl}" width="70" alt="${product.name}">
                  <h4>"${product.name}"</h4>
                  <p>"${product.description}"</p>
               </div>  
            );
        }
      return productsHtml;
  
   
    document
      .querySelector(".right-arrow")
      .addEventListener("click", nextProductSlide);
  
    document
      .querySelector(".left-arrow")
      .addEventListener("click", previousProductSlide);
})();
