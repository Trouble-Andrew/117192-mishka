var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var order = document.querySelector(".order-link");
var videoBtn = document.querySelector(".making__video-link");
var videoSvg = document.querySelector(".svg--play");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if(order) {
  order.addEventListener("click", function(evt) {
    if(popup) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      overlay.classList.add("modal-show");
    }
  });
}

addOrderBtn();

function addOrderBtn() {
  if (popup) {
    var i;
    var orderBtn = document.getElementsByClassName("order-link");
    for (i = 0; i < orderBtn.length; i++) {
      // orderBtn[i].classList.remove("slider__slide--active");
      orderBtn[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        overlay.classList.add("modal-show");
      });
    }
  }
}

overlay.addEventListener("click", function(evt) {
  if (popup) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function(evt) {
  if (popup) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
      } else if (map.classList.contains("modal-show")) {
        evt.preventDefault();
        map.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
      }
    }
  }
});

// if (videoBtn) {
//   videoBtn.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     videoSvg.classList.toggle("svg--play-active");
//   });
// }
