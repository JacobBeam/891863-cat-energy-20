var burgerButton = document.querySelector(".header__burger")
var mainMenu = document.querySelector(".menu")

burgerButton.classList.remove("header__burger--nojs")
mainMenu.classList.remove("menu--nojs")

burgerButton.addEventListener("click", function () {
  mainMenu.classList.toggle("menu--opened");
  burgerButton.classList.toggle("header__burger--inactive")
})


document.addEventListener("DOMContentLoaded", function (event) {
  var mapEl = document.querySelector("#map");

  if (mapEl) {
    ymaps.ready(init); // активируем карту после загрузки страницы
    var map;

    function init() {
      map = new ymaps.Map("map", { // в кавычках id элемента куда загружается карта
        center: [59.93862517669296, 30.322941541671756],
        // координаты центра фрагмента карты, подобрать можно на https://vk.cc/9n163G
        zoom: 16,
        controls: []
      }, {
        autoFitToViewport: "always"
      });
      var placemark = new ymaps.Placemark([59.93862517669296, 30.322941541671756], { // координаты метки
        hintContent: "ул. Большая Конюшенная, д. 19/8"
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.png", // иконка метки
        iconImageSize: [56, 52],
        iconImageOffset: [-25, -55] // размер метки
      });
      map.geoObjects.add(placemark);
    }
  }
});


if (document.body.classList.contains("index-page")) {

  var imageBefore = document.querySelector(".slider__before")
  var imageAfter = document.querySelector(".slider__after")
  var buttonBefore = document.querySelector(".slider__toggle--before")
  var buttonAfter = document.querySelector(".slider__toggle--after")

  buttonBefore.addEventListener("click", function (evt) {
    evt.preventDefault();
    imageAfter.classList.remove("slider__after--current");
    imageBefore.classList.add("slider__before--current");
  })

  buttonAfter.addEventListener("click", function (evt) {
    evt.preventDefault();
    imageBefore.classList.remove("slider__before--current");
    imageAfter.classList.add("slider__after--current");
  })
}
