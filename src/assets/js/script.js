'use strict';

document.addEventListener('DOMContentLoaded', () => {

	$('.menu-toggle-cont').click(function (e) {
   e.preventDefault();
    if (!$(this).hasClass('menu-toggle-cont_active')) { 
      $(this).addClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideDown(300); 
      $('body').addClass('hidd'); 
    } else { 
      $(this).removeClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideUp(300);
      $('body').removeClass('hidd');
    } 
  }); 

	const swiper1 = new Swiper(".main-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".main-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-next",
      prevEl: ".main-prev",
    },
  });
   
  setTimeout(function() {
    $('select').styler();
  }, 100)

  const swiper2 = new Swiper(".portfolio-slider", {
    allowTouchMove: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: ".portfolio-next",
      prevEl: ".portfolio-prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        }
    }
  });

  $('.sidebar-button').click(function (e) {
    // $(this).toggleClass('active'); 
    $('.sidebar').slideToggle(); 
  });
  
  jQuery(function($){
    $(".phone").mask("8 (999) 999 - 99 - 99");
  });

});
