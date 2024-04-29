const nav = document.querySelector('#primaryNav');

function fixNav(){
    if(window.scollY>200){
        nav.classList.add('is-scrolled');
    }else{
        nav.classList.remove('is-scrolled')
    }
}
window.addEventListener('scroll', fixNav); //evento associato allo scroll

let containerSmartphone = document.querySelector('.container-smartphone');

const ULRSMARTPHONE = 'https://dummyjson.com/products';

let smartphone = [];

fetch(ULRSMARTPHONE)

    .then(data => {
        return data.json();
    })

    .then(response => {
        let smartphone = response.products; 
        stampaSmartphone(smartphone);
    })

function stampaSmartphone(products){
    products.forEach(prodotto => {
        containerSmartphone.innerHTML =+ `<div class="slider-smartphone">
                                <div class="swiper-slide">${prodotto.images[0]}</div>
                                <div class="swiper-slide">${prodotto.images[1]}</div>
                                <div class="swiper-slide">${prodotto.images[1]}</div>
                            </div>
                            <div class="info-smartphone">
                                <h2 class="titolo-smartphone">${prodotto.title}</h2>
                            </div>`
    });
}
