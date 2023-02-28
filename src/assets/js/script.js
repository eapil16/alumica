'use strict';

document.addEventListener('DOMContentLoaded', () => {

  $('.attention-close').click(function (e) {
    $('.attention').fadeOut(); 
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

  const swiper2 = new Swiper(".services-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".services-next",
      prevEl: ".services-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });

  const swiper3 = new Swiper(".company-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".company-next",
      prevEl: ".company-prev",
    },
  });

  const swiper4 = new Swiper(".docs-slider", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".docs-next",
      prevEl: ".docs-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      }
    }
  });

  const swiper5 = new Swiper(".categories-slider", {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".categories-next",
      prevEl: ".categories-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    }
  });

  const swiper6 = new Swiper(".serv-slider", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".serv-next",
      prevEl: ".serv-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    }
  });

  $(document).on('click','.video-btn',function(e){
    e.preventDefault();
    var video = $(this).closest(".video-block").find(".video")[0];
    if (video.paused) {
      video.play();
      video.controls = "controls";
      e.target.closest('.video-btn').classList.add('play-hidden')
    } else {
      video.pause();
    }
  });

  jQuery(function($){
    $(".phone").mask("8 (999) 999 - 99 - 99");
  });

  const getHeaderSticky = (zero) => {
    let heightattention = 0;
    let heightheader ;    
    heightattention = document.querySelector('.attention').offsetHeight;    
    const heightmenu = document.querySelector('.header-menu').offsetHeight;
    const heighcontent  = document.querySelector('.header-content ').offsetHeight;
    if (zero === 0) {
      heightheader = heightattention + heightmenu + heighcontent - heightattention;
    } else {
      heightheader = heightattention + heightmenu + heighcontent;
    }
    document.querySelector('.header').style.top =  `-${heightheader}px`    
  }

  getHeaderSticky();

  window.addEventListener('resize', () => {
    getHeaderSticky();
  });
  
  document.querySelector('body').addEventListener('click', e => {
    if (e.target.closest('.attention-close')) {
      const zero = 0
      getHeaderSticky(zero);
    }

    if (e.target.closest('.left-menu__link_drop')) {
      e.preventDefault();

      const collLinks = document.querySelectorAll('.left-menu__link');
      const collBlocks = document.querySelectorAll('.left-menu__dropdown');
      const targetBlock = e.target.closest('.left-menu__item').querySelector('.left-menu__dropdown');
      const targeLink = e.target.closest('.left-menu__link')
      e.target.closest('.left-menu__link').classList.toggle('active');
      e.target.closest('.left-menu__item').querySelector('.left-menu__dropdown').classList.toggle('active');
      collBlocks.forEach(element => {if(element!=targetBlock) element.classList.remove('active')});
      collLinks.forEach(element =>  {if(element!=targeLink) element.classList.remove('active')})      
    }
    if (!e.target.closest('.left-menu__link_drop') && !e.target.closest('.left-menu__dropdown')) {
      const collLinks = document.querySelectorAll('.left-menu__link');
      const collBlocks = document.querySelectorAll('.left-menu__dropdown');
      collBlocks.forEach(element => {element.classList.remove('active')});
      collLinks.forEach(element =>  {element.classList.remove('active')})      
    }
  });

  $('.user-block__button_active').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active'); 
    $('.user-block__menu').slideToggle();
  });

  $(document).click(function(event) {
    if ($(event.target).closest(".user-block__button_active, .user-block__menu").length) return;	
    $('.user-block__menu').hide();	
  });

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
   
  setTimeout(function() {
    $('select').styler();
  }, 100)

  $('.header-search__button').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active'); 
    $('.header-search__form').slideToggle();
  });

  $(document).click(function(event) {
    if ($(event.target).closest(".header-search__button, .header-search").length) return;	
    $('.header-search__form').hide();	
  });
 
});
