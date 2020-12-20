$(document).ready(function(){
  var menuButton = document.querySelector(".header__menu-button");
  menuButton.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector(".header__mobile-menu").classList.toggle('header__mobile-menu--visible');
    document.querySelector(".header__menu-button").classList.toggle('menu-button--visible');
    document.querySelector(".header__button").classList.toggle('header__button--visible');
    document.querySelector(".header__link-list").classList.toggle('header__link-list--visible');
    document.querySelector(".header__menu-close").classList.toggle('header__menu-close--visible');
  });
  var menuButton = document.querySelector(".header__menu-close");
  menuButton.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector(".header__mobile-menu").classList.toggle('header__mobile-menu--visible');
    document.querySelector(".header__menu-button").classList.toggle('menu-button--visible');
    document.querySelector(".header__button").classList.toggle('header__button--visible');
    document.querySelector(".header__link-list").classList.toggle('header__link-list--visible');
    document.querySelector(".header__menu-close").classList.toggle('header__menu-close--visible');
  });
  var tabsItem = $(".trends__item");
  var contentItem = $('.trends__content');
  
  tabsItem.on('click', function(event){
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('trends__item--active');
    contentItem.removeClass('trends__content--active');
    $(activeContent).addClass('trends__content--active');
    $(this).addClass("trends__item--active");
  })
  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 7000,
      autoplayDisableOnInteraction: true
    }
  });
  $(".reviews-swiper-container").mouseenter(function() {
    reviewsSlider.autoplay.stop();
  });

  $(".reviews-swiper-container").mouseleave(function() {
    reviewsSlider.autoplay.start();
  });
  var storiesSlider = new Swiper(".stories-slider", {
    loop: true,
    navigation: {
      nextEl: ".stories__button-next",
      prevEl: ".stories__button-prev"
    },
    effect: 'fade',
    fadeEffect: {
    crossFade: true
  }
  });
  var ModalOverlay = $(".modal__overlay");
  var ModalDialog = $(".modal__dialog");
  ModalOverlay.on('click', function(){
    ModalOverlay.removeClass("modal__overlay--visible");
    ModalDialog.removeClass("modal__dialog--visible");
  });
  var ButtonNext = $(".stories__button-next");
  var ButtonPrev = $(".stories__button-prev");
  ButtonNext.on('click', function(){
    ButtonPrev.addClass("stories__button-prev--active");
    storiesSlider.allowSlidePrev = true;
    if(storiesSlider.previousIndex == 2){
      ButtonNext.removeClass("stories__button-next--active");
    }
  });
  ButtonPrev.on('click', function(){
    ButtonNext.addClass("stories__button-next--active");
    storiesSlider.allowSlideNext = true;
    if(storiesSlider.previousIndex == 2){
      ButtonPrev.removeClass("stories__button-prev--active");
    }
  });
  storiesSlider.on('reachEnd', function(){
    storiesSlider.allowSlideNext = false;
    storiesSlider.allowSlidePrev = true;
    ButtonNext.removeClass("stories__button-next--active");
});
storiesSlider.on('reachBeginning', function(){
  storiesSlider.allowSlidePrev = false;
  storiesSlider.allowSlideNext = true;
  ButtonPrev.removeClass("stories__button-prev--active");
});
var modalButton = $('[data-toggle="modal"]');
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
$(document).on('keydown', function(e) {
  if (e.keyCode == 27){
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
});

function openModal (){
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}

function closeModal (event){
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
};
  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        login: {
          required: "Пожалуйста, введите корректный логин",
          minlength: "Логин должно состоять хотя бы из 5 символов"
        },
        password: {
          required: "Пожалуйста, введите корректный пароль",
          minlength: "Пароль должен состоять хотя бы из 5 символов"
        },
        emailNews: {
          required: "Пожалуйста, введите корректный Email"
        }
      },
    });
  });
});