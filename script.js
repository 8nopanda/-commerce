const nav = document.querySelector('#primaryNav');

function fixNav(){
    if(window.scollY>200){
        nav.classList.add('is-scrolled');
    }else{
        nav.classList.remove('is-scrolled')
    }
}
window.addEventListener('scroll', fixNav); //evento associato allo scroll