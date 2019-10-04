function feedback() {

  var popupFeedback = document.querySelector('.modal-send');
  var openPopupButton = document.querySelector('.contacts__link');
  var closePopupButton = popupFeedback.querySelector('.close-btn');
  var overlay = document.querySelector('.overlay');
  var inputs = popupFeedback.querySelectorAll('.send-form__input');
  var form = popupFeedback.querySelector(".send-form");
  var login = popupFeedback.querySelector(".send-form__input_name");

  openPopupButton.addEventListener('click', function (evt) {

    evt.preventDefault();
    popupFeedback.classList.add('modal-send__show');
    overlay.classList.add('overlay__show');
    login.focus();
  });

  closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal-send__show');
    overlay.classList.remove('overlay__show');
    popupFeedback.classList.remove('err');        
  });

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
      popupFeedback.classList.remove('modal-send__show');
      overlay.classList.remove('overlay__show');
      popupFeedback.classList.remove('err');
    }
  });

  overlay.addEventListener('click', function() {
    popupFeedback.classList.remove('modal-send__show');
    overlay.classList.remove('overlay__show');
    popupFeedback.classList.remove('err');
  });

  form.addEventListener("submit", function (evt) {
    for (var i = 0; i < inputs.length; i++) {

      var input = inputs[i];

      if (input.value == '') {

        evt.preventDefault();
        popupFeedback.classList.remove('err');
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add('err');
      }
    }
  });

};

function basket() {

  var popupBasket = document.querySelector('.modal-basket');
  var openPopupButton = document.querySelectorAll('.good__btn_buy');
  var closePopupButton = popupBasket.querySelector('.close-btn_basket');
  var closePopupButton2 = popupBasket.querySelector('.modal-basket__btn');
  var overlay = document.querySelector('.overlay');

  for (var i = 0; i < openPopupButton.length; i++) {

    openPopupButton[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      popupBasket.classList.add('modal-basket_show');
      overlay.classList.add('overlay__show');
    });
  }

  closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove('modal-basket_show');
    overlay.classList.remove('overlay__show');
  });

  closePopupButton2.addEventListener('click', function (evt) {
    evt.preventDefault();
    overlay.classList.remove('overlay__show');
    popupBasket.classList.remove('modal-basket_show');        
  });

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
      evt.preventDefault();
      popupBasket.classList.remove('modal-basket_show'); 
      overlay.classList.remove('overlay__show');           
    }
  });

  overlay.addEventListener('click', function() {
    popupBasket.classList.remove('modal-basket_show');
    overlay.classList.remove('overlay__show');    
  });
};

function popapMap() {

  var popupMap = document.querySelector('.modal-map');
  var openPopupButton = document.querySelector('.contacts__img');
  var closePopupButton = popupMap.querySelector('.close-btn');
  var overlay = document.querySelector('.overlay');    

  openPopupButton.addEventListener('click', function (evt) {

    evt.preventDefault();
    popupMap.classList.add('modal-map_show');
    overlay.classList.add('overlay__show');
  });

  closePopupButton.addEventListener('click', function () {
    popupMap.classList.remove('modal-map_show');
    overlay.classList.remove('overlay__show');
  });

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
      popupMap.classList.remove('modal-map_show');
      overlay.classList.remove('overlay__show');            
    }
  });

  overlay.addEventListener('click', function() {
    popupMap.classList.remove('modal-map_show');
    overlay.classList.remove('overlay__show');    
  });
}



if(window.location.toString().indexOf('catalog.html')>0) {

  basket();    

} else {

  feedback();
  popapMap();

};
