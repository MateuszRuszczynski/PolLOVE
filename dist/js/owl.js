$('.owl-carousel').owlCarousel({
  // rtl: true,
  loop: true,
  margin: 20,
  nav: true,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    300: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});