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
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    }
  });
});