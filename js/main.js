$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down");  //кнопка уменьшения этажа
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

var flatsPath = $(".flats path");
var flatLink = $(".flat-link");

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
     floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
     currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
     $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
   });

   /* при клике присваивается класс
   floorPath.on("click", function (){ 
     modal.toggleClass("is-open"); 
    }); */

  floorPath.on("click", toggleModal);  //при клике на этаж, вызвать окно
  modalCloseButton.on("click", toggleModal);  // клик на кнопку закрыть - убирает окно
  viewFlatsButton.on("click", toggleModal); 
    

    // отслеживаем клик по кнопке вверх
   counterUp.on("click", function (){ 
     // проверяем значение этажа, не больше 18 должно быть
    if (currentFloor < 18) { 
       currentFloor++; // прибавлеям один этаж
       usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 02, а не 2
       $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
       floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий
    }
  });

 // отслеживаем клик по кнопке вниз
  counterDown.on("click", function (){
    // проверяем значение этажа, больше 2 должно быть
    if (currentFloor > 2) {
       currentFloor--; // отнимаем один этаж
       usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 02, а не 2
       $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
       floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  // подсвечиваем текущий
    }
  });

  function toggleModal() {  
    // функция открыть/закрыть окно
     modal.toggleClass("is-open"); 
  };


  flatLink.on("mouseover", function (){
       currentFlats = $(this).attr("data-flats"); 
       flatsPath.removeClass("current-flats"); // удаляем активный класс у квартиры
        flatLink.removeClass("cor-flats"); 
       $(`[data-flats=${currentFlats}]`).toggleClass("current-flats");  // подсвечиваем текущий
  });

  flatsPath.on("mouseover", function () {
    currentFlats = $(this).attr("data-flats"); 
     flatLink.removeClass("cor-flats"); // удаляем активный класс 
     flatsPath.removeClass("current-flats"); 
     $(`[data-flats=${currentFlats}]`).toggleClass("cor-flats");  // подсвечиваем текущий
   });


});