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
        // координаты центра фрагмента карты
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



if (document.documentElement.clientWidth > 767) {
  let thumb = slider.querySelector(".slider__control");

  thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

      // курсор вышел из слайдера => оставить бегунок в его границах.
      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumb.style.left = (newLeft / rightEdge) * 94.5 + "%";
      slideBefore.style.width = 170 + newLeft + "px";



      if (document.documentElement.clientWidth < 1300) {
        slideBefore.style.width = 150 + newLeft + "px";
      }
    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }

  };

  thumb.ondragstart = function () {
    return false;
  }
}

var doit;
var thumb = slider.querySelector(".slider__control");
var imageBefore = document.querySelector(".slider__before")
var imageAfter = document.querySelector(".slider__after")
var buttonBefore = document.querySelector(".slider__toggle--before")
var buttonAfter = document.querySelector(".slider__toggle--after")

function sliderAnimatingMobile() {
  slideBefore.style.width = "";
  thumb.style.left = "";
  imageBefore.style.display = "";
  imageAfter.style.display = "";

  function clickBeforeMobile() {
    imageBefore.style.display = "block";
    imageAfter.style.display = "none";
    thumb.style.left = 6 + "px";
  }
  buttonBefore.onclick = clickBeforeMobile

  function clickAfterMobile() {
    imageBefore.style.display = "none"
    imageAfter.style.display = "block"
    thumb.style.left = 40 + "px"
  }

  buttonAfter.onclick = clickAfterMobile
}

function sliderAnimatingTablet() {

  var thumb = slider.querySelector(".slider__control");
  var imageBefore = document.querySelector(".slider__before");
  var imageAfter = document.querySelector(".slider__after");
  let buttonBefore = document.querySelector(".slider__toggle--before");
  let buttonAfter = document.querySelector(".slider__toggle--after");

  slideBefore.style.width = "";
  thumb.style.left = "";
  imageBefore.style.display = "";
  imageAfter.style.display = "";


  function clickBeforeTablet() {
    slideBefore.style.width = 100 + "%"
    thumb.style.left = 94.5 + "%";
  }

  buttonBefore.onclick = clickBeforeTablet;


  function clickAfterTablet() {
    slideBefore.style.width = 0 + "%"
    thumb.style.left = 0 + "px";
  }

  buttonAfter.onclick = clickAfterTablet;
}


window.onresize = function () {
  clearTimeout(doit);
  doit = setTimeout(function () {
    if (document.documentElement.clientWidth < 768) {
      sliderAnimatingMobile();
    }
    if (document.documentElement.clientWidth >= 768) {
      sliderAnimatingTablet();
    }
  }, 300);
};


window.onload = function () {
  if (document.documentElement.clientWidth < 768) {
    sliderAnimatingMobile();
  }
  if (document.documentElement.clientWidth >= 768) {
    sliderAnimatingTablet();
  }
};
