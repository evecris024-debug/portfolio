var swiper = new Swiper(".visual_banner .mySwiper", {
 effect:"coverflow",
 slidesPerView: 3,
 grabcursor:true,
 ceteredSlides:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,     pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2,
    slideShadows: true,
  },
});
//sec_story

var swiper = new Swiper(".sec_imax .mySwiper .main_mini", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".sec_imax .mySwiper2 .main_big", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: "sec_imax .swiper-button-next",
    prevEl: "sec_imax .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
   autoplay: {
     delay: 2500,
  //  disableOnInteraction: false,
   },
});