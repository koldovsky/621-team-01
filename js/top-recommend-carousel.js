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
        },
        {
            "id": "5",
            "name": "AGA Mice Set",
            "price": "3,00",
            "imgUrl": "img/aga-mise-set.png"
        },
        {
            "id": "6",
            "name": "VITALIFE 2-Bowls Set",
            "price": "9,00",
            "imgUrl": "img/2-bowls-set.png"
        },
        {
            "id": "7",
            "name": "AGA Leash & Collar",
            "price": "13,00",
            "imgUrl": "img/aga-leash-collar.png"
        },
        {
            "id": "8",
            "name": "DUNA Gray Bed",
            "price": "25,00",
            "imgUrl": "img/duna-gray-bed.png"
        },
        {
            "id": "9",
            "name": "DORA Hanging Mirror",
            "price": "14,00",
            "imgUrl": "img/dora-handling-mirror.png"
        },
        {
            "id": "10",
            "name": "VERTA hanging Nest",
            "price": "8,00",
            "imgUrl": "img/vetra-hanging-nest.png"
        },
        {
            "id": "11",
            "name": "DORA Wood Swing",
            "price": "7,00",
            "imgUrl": "img/dora-wood-swing.png"
        },
        {
            "id": "12",
            "name": "OPTY Wooden Stand",
            "price": "13,00",
            "imgUrl": "img/opty-wooden-stand.png"
        },
        {
            "id": "13",
            "name": "SERA Purple Collar",
            "price": "2,00",
            "imgUrl": "img/sera-purple-collar.png"
        },
        {
            "id": "14",
            "name": "AGA Clinking Toy",
            "price": "2,00",
            "imgUrl": "img/aga-clinking-toy.png"
        },
        {
            "id": "15",
            "name": "HARNO Rabbit Cage",
            "price": "7,00",
            "imgUrl": "img/harno-rabbit-cage.png"
        },
        {
            "id": "16",
            "name": "DORA Rabbit Brush",
            "price": "13,00",
            "imgUrl": "img/dora-rabbit-brush.png"
        },
        {
            "id": "17",
            "name": "AGA Bowl for Hamsters",
            "price": "2,00",
            "imgUrl": "img/aga-bowl-for-hamsters.png"
        },
        {
            "id": "18",
            "name": "TISCO Toy Wheel",
            "price": "2,00",
            "imgUrl": "img/tisco-toy-wheel.png"
        },
        {
            "id": "19",
            "name": "STERCO Rainbow Balls",
            "price": "7,00",
            "imgUrl": "img/sterco-rainbow-balls.png"
        },
    
        {
            "id": "20",
            "name": "AGA Green Cage",
            "price": "25,00",
            "imgUrl": "img/aga-green-cage.png"
        },
        {
            "id": "21",
            "name": "DUCCA Air Pump",
            "price": "42,00",
            "imgUrl": "img/ducca-air-pump.png"
        },
        {
            "id": "22",
            "name": "TISCO 50 Liter Aquarium",
            "price": "70,00",
            "imgUrl": "img/tisco-50-liter-aquarium.png"
        },
        {
            "id": "23",
            "name": "VEGA Fish Castle",
            "price": "6,00",
            "imgUrl": "img/vega-fish-castle.png"
        },
        {
            "id": "24",
            "name": "TISCO Landing Net",
            "price": "4,00",
            "imgUrl": "img/tisco-landing-net.png"
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

    document.querySelector('.carousel-top-prods').innerHTML = productsHtml;

})();

// (function () {

//     const slides = [
//         '<img src="img/aga-mise-set.png" alt="Mise set">',
//         '<img src="img/2-bowls-set.png" alt="VITALIFE 2-Bowls Set">',
//         '<img src="img/aga-leash-collar.png" alt="aga leash collar">'
//     ];

//     let currentSlideIdx = 0;

//     function showCurrentSlide () {
//         const slideContainer = document.querySelector('.carousel-top-container .slide');
//         slideContainer.innerHTML = slides[currentSlideIdx];
//     }

//     function nextSlide () {
//         currentSlideIdx++;
//         if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
//         showCurrentSlide;
//     }

//     setInterval(nextSlide, 500);
//     showCurrentSlide();

//     document.querySelector('.carousel-top-container .next-top-slide');
//     addEventListener('click', nextSlide);
// })();
