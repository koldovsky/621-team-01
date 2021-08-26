// (function () {
//     const slides = [
//         `<img src="img/dog-fun-set.png" alt="doggy fun set">`,
//         `<img src="img/pillow-bed.png" alt="duna pillow bed">`,
//         `<img src="img/retractable-leach.png" alt="aga retractable leach">`,
//         `<img src="img/doggy-2-bunch-toy.png" alt="doggy 2 bunch toy">`
//     ];

//     let currentSlideIdx = 0;

//     function showCurrentSlide () {
//         const slideContainer = document.querySelector('.carousel-prod .top-slide');
//         slideContainer.innerHTML = slides[currentSlideIdx];
//     }

//     function nextSlide () {
//         currentSlideIdx++;
//         if (currentSlideIdx > slides.length) currentSlideIdx = 0;
//         showCurrentSlide();
//     }

//     setInterval(nextSlide, 4000);
//     showCurrentSlide();
// });

// const navBar = document.querySelector('.top-recommend-text');
// navBar.innerText += '!!!!!!@@@@'; 
// navBar.style.color = 'red';
setInterval(updateTime, 1000);

function updateTime() {
    const clockContainer = document.querySelector('.top-clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}

(function () {
    const productJson =`[
        {
            "id": "1",
            "name": "DOGGY Fun Set",
            "price": "6,00",
            "imgUrl": "img/dog-fun-set.png"
        },
        {
            "id": "2",
            "name": "DUNA Pillow Bed",
            "price": "10,00",
            "imgUrl": "img/pillow-bed.png"
        },
        {
            "id": "3",
            "name": "AGA Retractable Leash",
            "price": "33,00",
            "imgUrl": "img/retractable-leach.png"
        },
        {
            "id": "4",
            "name": "DOGGY 2-Bunch Toy",
            "price": "5,00",
            "imgUrl": "img/doggy-2-bunch-toy.png"
        }
        
    ]`;

    const products = JSON.parse(productJson);

    let productsHtml = '';     
    for (const product of products) {
        productsHtml += `
            <div class="top-goods">
                <a href="doggy-fun-set"><img src="${product.imgUrl}" alt="${product.name}"></a>
                <a class="top-good-name" href="doggy-fun-set">${product.name}</a>
                <p>$${product.price}</p>
                <a class="button" href="add-to-cart">Add to Card</a>
            </div>`;
    }

    document.querySelector('.carousel-prod').innerHTML = productsHtml;

})();

(function () {

    const slides = [
        '<img src="img/aga-mise-set.png" alt="Mise set">',
        '<img src="img/2-bowls-set.png" alt="VITALIFE 2-Bowls Set">',
        '<img src="img/aga-leash-collar.png" alt="aga leash collar">'
    ];

    let currentSlideIdx = 0;

    function showCurrentSlide () {
        const slideContainer = document.querySelector('.carousel-top-container .slide');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide () {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        showCurrentSlide;
    }

    setInterval(nextSlide, 500);
    showCurrentSlide();

    document.querySelector('.carousel-top-container .next-top-slide');
    addEventListener('click', nextSlide);
})();
