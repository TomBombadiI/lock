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

let lastScrollTop = null;

window.addEventListener('scroll', () => {
    let currentScrollTop = window.scrollY;

    if (lastScrollTop < currentScrollTop) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScrollTop = currentScrollTop;
});

// #endregion HEADER