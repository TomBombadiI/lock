const body = document.body;

// #region HEADER

const header = document.querySelector('header');
const headerMenu = header.querySelector('.menu');
const mobileMenu = header.querySelector('.mobile-menu');
const burgerTrigger = header.querySelector('.burger-trigger');

burgerTrigger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burgerTrigger.classList.toggle('active');
    body.classList.toggle('scroll-lock');
});

// #endregion HEADER