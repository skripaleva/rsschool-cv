$('.code-examples').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  centerPadding: '0',
  prevArrow: $('.slider__prev'),
  nextArrow: $('.slider__next'),
  dots: true, // показывать точки индикаторы
  dotsClass: 'slick-dots', // название класса для точек
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
