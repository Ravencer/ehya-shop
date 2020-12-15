var menuButton = document.querySelector(".header__menu-button");
  menuButton.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector(".header__container").classList.toggle('header__container--visible');
    document.querySelector(".header__menu-button").classList.toggle('menu-button--visible');
    document.querySelector(".header__button").classList.toggle('header__button--visible');
    document.querySelector(".header__logo").classList.toggle('header__logo--hidden');
    document.querySelector(".header__link-list").classList.toggle('header__link-list--visible');
    document.querySelector(".header__menu-close").classList.toggle('header__menu-close--visible');
  });
  var menuButton = document.querySelector(".header__menu-close");
  menuButton.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector(".header__container").classList.toggle('header__container--visible');
    document.querySelector(".header__menu-button").classList.toggle('menu-button--visible');
    document.querySelector(".header__button").classList.toggle('header__button--visible');
    document.querySelector(".header__logo").classList.toggle('header__logo--hidden');
    document.querySelector(".header__link-list").classList.toggle('header__link-list--visible');
    document.querySelector(".header__menu-close").classList.toggle('header__menu-close--visible');
  });