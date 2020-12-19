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
      el: '.reviews-swiper-pagination',
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
  var ButtonNext = $(".stories__button-next");
  var ButtonPrev = $(".stories__button-prev");
  ButtonNext.on('click', function(){
    ButtonNext.addClass('stories__button-next--active');
    ButtonPrev.removeClass('stories__button-prev--active');
  });
  ButtonPrev.on('click', function(){
    ButtonPrev.addClass('stories__button-prev--active');
    ButtonNext.removeClass('stories__button-next--active');
  });
  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        emailNews: {
          required: "Please fill this form with your Email"
        }
      },
    });
  })
});