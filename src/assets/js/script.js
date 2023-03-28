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
    slidesPerView: 'auto',
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
    pagination: {
      el: ".company-pagination",
      clickable: true,
    },
  });

  const swiper4 = new Swiper(".docs-slider", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
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
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    navigation: {
      nextEl: ".categories-next",
      prevEl: ".categories-prev",
    },
    breakpoints: {
      992: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    }
  });

  const swiper6 = new Swiper(".serv-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    navigation: {
      nextEl: ".serv-next",
      prevEl: ".serv-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 30,
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
    if (document.querySelector('.attention')) {
      heightattention = document.querySelector('.attention').offsetHeight;    
    }
   
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
    $('.header-search__form').addClass('show');
  });

  $('.header-search__form__slose').click(function (e) {
    e.preventDefault();
    $('.header-search__button').removeClass('active');
    $('.header-search__form').removeClass('show');
  });

  $('.button-catalog').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active'); 
    $('body').toggleClass('body-hidden');
    $('header').toggleClass('header-hidden');
    $('.sidebar-menu').slideToggle();
  });

  $('.sidebar-menu__button').click(function (e) {
    e.preventDefault();
    $('.sidebar-menu__list').slideToggle();
  });

  $('.favorites-item-button').click(function (e) {
    e.preventDefault();
    if ( !$(this).hasClass("disabled") ) {
      $(this).toggleClass('active'); 
    }
  });

  $('.button-in-basket').click(function (e) {
    e.preventDefault();
    if ( !$(this).hasClass("disabled") ) {
      $(this).toggleClass('active'); 
    }
  });
  
  $('.disabled').click(function (e) {
    e.preventDefault();
  });
  
  const loginButton = document.querySelector('#login-button');
  const phoneButton = document.querySelector('#phone-button');

  if (loginButton) {
		loginButton.addEventListener('click' , (event) => {
			$('#login-item').show();
			$('#phone-item').hide();
    });
  }
  if (phoneButton) {
		phoneButton.addEventListener('click' , (event) => {
			$('#login-item').hide();
			$('#phone-item').show();
    });
  }
  
  var swiper11 = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
    }
  });

  var swiper22 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper11,
    },
  });

  const swiper10 = new Swiper(".other-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    navigation: {
      nextEl: ".other-next",
      prevEl: ".other-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: ".other-pagination",
      clickable: true,
    },
  });

  if (document.querySelector('.catalog-item')) {
		const blockHeiht = () => {
			const collBrands = document.querySelectorAll('.catalog-item');
      

			collBrands.forEach(element => {
				element.addEventListener("mouseenter", (e) => {
					const height = e.target.querySelector('.catalog-item__text').clientHeight +  e.target.querySelector('.catalog-item__image').clientHeight;
          const heightBlock = e.target.clientHeight;
          
          if (heightBlock < height) {
            e.target.querySelector('.catalog-item__content').style.height = `${height}px`
            e.target.style.zIndex = 10;
          }
         
				});
				element.addEventListener("mouseleave", (e) => {
					const height = e.target.clientHeight;
          e.target.querySelector('.catalog-item__content').style.height = `${height}px`
					e.target.style.zIndex = 5;
				});
			});
		};	
		
		if (window.innerWidth > 991) {
			blockHeiht();
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth > 991) {
				blockHeiht();
			}
		});
	}

  $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});
 
  $('.category-button').click(function (e) {
    e.preventDefault();
    $('.category-sidebar').slideToggle();
  });

  $('.full-in-basket').click(function (e) {
    e.preventDefault();
    if ( !$(this).hasClass("disabled") ) {
      $(this).toggleClass('active'); 
    }
  });

  var swiper11 = new Swiper(".mySwiper3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
    }
  });

  var swiper22 = new Swiper(".mySwiper4", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper11,
    },
  });

  $('.to-favorites').click(function (e) {
    e.preventDefault();
    if ( !$(this).hasClass("disabled") ) {
      $(this).toggleClass('active'); 
    }
  });

  const swiper111 = new Swiper(".slider-other", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 800,
    navigation: {
      nextEl: ".slider-other-next",
      prevEl: ".slider-other-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: ".slider-other-pagination",
      clickable: true,
    },
  });

  $('.input-clear').click(function (e) {
    e.preventDefault();
    console.log(1)
    document.querySelector('.form-control.city').value = '';
  });

  const physicalButton = document.querySelector('#physical-button');
  const yurButton = document.querySelector('#yur-button');

  if (physicalButton) {
		physicalButton.addEventListener('click' , (event) => {
			$('#physical-item').show();
			$('#yur-item').hide();
    });
  }
  if (yurButton) {
		yurButton.addEventListener('click' , (event) => {
			$('#physical-item').hide();
			$('#yur-item').show();
    });
  }
  
  const blocks = document.querySelectorAll('.product-in-basket');

  if (blocks) {    
    if (blocks.length > 2) {
      $('.basket-list__more').show();
    } else {
      $('.basket-list__more').hide();
    }
  }


});
