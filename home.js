const nav = document.querySelector('#nav');

function fixNav(){ /*per mantenere navbar sopra mentre scrolla pagina*/
    if(window.scollY>200){
        nav.classList.add('is-scrolled');
    }else{
        nav.classList.remove('is-scrolled')
    }
}
window.addEventListener('scroll', fixNav);


let containerSmartphone = document.querySelector('.container-smartphone');

const ULRSMARTPHONE = 'https://dummyjson.com/products/smatphones';

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
        containerSmartphone.innerHTML =+ `<div class="swiper-slide">
        <div class="card" style="width: 18rem;">
            <img src="https://source.unsplash.com/600x400?black+cat" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem, ipsum</p>
                <button id="btnMaggioriInfo" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Maggiori info</button>
            </div>
            </div>
        </div>`
    });
}


//fetch per cercare un articolo all'interno dei telefoni
fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);