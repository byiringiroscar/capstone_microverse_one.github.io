const menuLogo = document.querySelector('#menu-logo');
const menuClose = document.querySelector("#menu-close");
const mobileBody = document.querySelector('.mobile-body');

menuLogo.addEventListener('click', function(){
    mobileBody.classList.add('active')
});

menuClose.addEventListener('click', function(){
    mobileBody.classList.remove('active')
});