/****    Burger menu   *****/

let burger = document.querySelector('.burger');
let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('#menu');

document.querySelector('.burger').addEventListener('click', function(e){
    e.preventDefault();
    
    if(this.classList.contains('is-active')){
        this.classList.remove('is-active');
        menu.classList.remove('nav-active');
        document.body.classList.remove('lock');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.body.classList.add('lock');
    }
});

for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', function(e){
        menu.classList.remove('nav-active');
        burger.classList.remove('is-active');
        document.body.classList.remove('lock');
    });
}

/**** Close menu out click *****/

window.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove('nav-active');
        burger.classList.remove('is-active');
        document.body.classList.remove('lock');
    }
});

/**** First Slider  *****/

let mySwiper = new Swiper('.first-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    
    navigation: {
        nextEl: '.first-next',
        prevEl: '.first-prev',
    },
    
});

/****  Documents Slider  *****/

let docSwiper = new Swiper('.documents-slider', {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
        el: '.documents-slider__bullets',
        type: 'bullets',
        clickable: true,    
    },
    
    navigation: {
        nextEl: '.documents-next',
        prevEl: '.documents-prev',
    },
    breakpoints: {
        575: {
          slidesPerView: 3, 
          slidesPerGroup: 1, 
            pagination: {
            el: '.documents-slider__bullets',
            type: 'bullets',
            clickable: true,    
            }
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
    }
});

/****  Reviews Slider  *****/

let revSwiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.reviews-slider__bullets',
        type: 'bullets',
        clickable: true,    
    },   
    navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
    },
    breakpoints: {
        575: {
            slidesPerView: 2,
            spaceBetween: 20
          },
    }
});