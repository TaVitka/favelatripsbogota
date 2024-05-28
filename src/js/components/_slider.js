import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

let options = {
  speed: 1400,
  autoplay: {
    delay: 6000,
  },
  modules: [Navigation, Scrollbar, Pagination, Autoplay],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
  },
  breakpoints: {
    476: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },

    1: {
      slidesPerView: 1,
      spaceBetween: 16,
    }
  }
};

const swiperFeatured = new Swiper('.slider__featured', options);
const swiperTeam = new Swiper('.slider__team', options);

const swiperPlaces= new Swiper('.hero__slider', {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 1400,
  autoplay: {
    delay: 6000,
  },
  modules: [Navigation, Scrollbar, Pagination, Autoplay],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__arrow--next',
    prevEl: '.slider__arrow--prev',
  },
});