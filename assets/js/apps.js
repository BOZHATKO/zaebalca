const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: !0,
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
      delay: 3e3
  },
  pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: !0
  },
  breakpoints: {
      320: {
          slidesPerView: 2,
          spaceBetween: 100
      },
      375: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      640: {
          slidesPerView: 3,
          spaceBetween: 20
      },
      768: {
          slidesPerView: 2.5,
          spaceBetween: 10
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 10
      },
      1200: {
          slidesPerView: 5,
          spaceBetween: 10
      }
  }
});