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
        center: [59.9386332382438, 30.32308101654053],
        // координаты центра фрагмента карты, подобрать можно на https://vk.cc/9n163G
        zoom: 16,
        controls: []
      });
      var placemark = new ymaps.Placemark([59.9386332382438, 30.32308101654053], { // координаты метки
        hintContent: "ул. Большая Конюшенная, д. 19/8",
        iconLayout: "default#image",
        iconImageHref: "../img/map-pin.png", // иконка метки
        iconImageSize: [56, 52], // размер метки

      });
      map.geoObjects.add(placemark);
    }
  }
});
