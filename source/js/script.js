var burgerButton = document.querySelector(".header__burger")
var mainMenu = document.querySelector(".menu")

burgerButton.classList.remove("header__burger--nojs")
mainMenu.classList.remove("menu--nojs")

burgerButton.addEventListener("click", function () {
  mainMenu.classList.toggle("menu--opened");
  burgerButton.classList.toggle("header__burger--inactive")
})
