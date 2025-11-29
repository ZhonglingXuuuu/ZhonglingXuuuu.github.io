// Swiper carousel initialization for all work pages
function initWorkSwiper(containerSelector) {
  return new Swiper(containerSelector, {
    pagination: { 
      el: containerSelector + ' .swiper-pagination',
      clickable: true
    },
    navigation: { 
      nextEl: containerSelector + ' .swiper-button-next', 
      prevEl: containerSelector + ' .swiper-button-prev' 
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // For each .swiper-container in the page, initialize Swiper
  document.querySelectorAll('.swiper-container').forEach(function(container) {
    initWorkSwiper('.swiper-container');
  });
});
