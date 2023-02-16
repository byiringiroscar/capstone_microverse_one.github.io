const menuLogo = document.querySelector('#menu-logo');
const menuClose = document.querySelector('#menu-close');
const mobileBody = document.querySelector('.mobile-body');

menuLogo.addEventListener('click', () => {
  mobileBody.classList.add('active');
});

menuClose.addEventListener('click', () => {
  mobileBody.classList.remove('active');
});