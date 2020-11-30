let burger = document.querySelector('.burger');

document.querySelector('.burger').addEventListener('click', function(e){
    e.preventDefault();
    
    if(this.classList.contains('is-active')){
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.body.classList.remove('lock');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.body.classList.add('lock');
    }
});

let menu = document.querySelectorAll('.menu-item');

for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', function(e){
        document.querySelector('#menu').classList.remove('nav-active');
        burger.classList.remove('is-active');
        document.body.classList.remove('lock');
    });

}