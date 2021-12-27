let menu = document.querySelector('.container nav');
let burger = document.querySelector('.header__menu-btn');
let burgerIcon = burger.querySelector('.header__burger');
let links = document.querySelectorAll('.nav__item');
let scrollUp = document.querySelector('.scrollUp');

burger.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
});

let closeMenu = () => {
  burgerIcon.classList.remove('active');
  menu.classList.remove('active');
};


links.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('click', (event) => {
  if(
    !event.target.closest('.container nav')&&
    !event.target.closest('.header__menu-btn')
  ) {
    closeMenu()
  }
});

$('.code-examples').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  centerPadding: '0',
  prevArrow: $('.slider__prev'),
  nextArrow: $('.slider__next'),
  dots: true,
  dotsClass: 'slick-dots',
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    scrollUp.style.display = 'block';
  }
  if (scrolled < coords) {
    scrollUp.style.display = 'none';
  }
}

window.addEventListener('scroll', trackScroll);
