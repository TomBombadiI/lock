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

// #region SLIDER

const slider = new Swiper('.slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1220: {
            slidesPerView: 6,
        }
    }
});

// #endregion SLIDER

// #region FSLIGHTBOX

const fslightboxElements = document.querySelectorAll('[data-fslightbox]');

fslightboxElements.forEach(element => {
    element.addEventListener('click', () => {
        document.documentElement.style.setProperty('--scrollbar-width', body.style.marginRight);
    });
});

// #endregion FSLIGHTBOX

// #region ACCORDION

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const contentWrapper = item.querySelector('.accordion-content-wrapper');

    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        if (isOpen) {
            item.classList.remove('open');
            contentWrapper.style.height = '0';
        } else {
            item.classList.add('open');
            contentWrapper.style.height = contentWrapper.scrollHeight + 'px';
        }

    });
});

// #endregion ACCORDION