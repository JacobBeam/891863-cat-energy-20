var burgerButton = document.querySelector(".header__burger")

var mainMenu = document.querySelector(".menu")

burgerButton.addEventListener("click", function () {
  mainMenu.classList.toggle("menu--opened");
  burgerButton.classList.toggle("header__burger--inactive")
})
