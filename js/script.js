function feedback() {

    var popupFeedback = document.querySelector('.modal-send');
    var openPopupButton = document.querySelector('.contacts__link');
    var closePopupButton = popupFeedback.querySelector('.close-btn');    

    openPopupButton.addEventListener('click', function (evt) {

        evt.preventDefault();
        popupFeedback.classList.add('modal-send__show');
        popupFeedback.classList.add('anim');        
    });

    closePopupButton.addEventListener('click', function () {
        popupFeedback.classList.remove('modal-send__show');        
    });

    document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            popupFeedback.classList.remove('modal-send__show');            
        }
    });
};

function basket() {

    var popupBasket = document.querySelector('.modal-basket');
    var openPopupButton = document.querySelectorAll('.good__btn_buy');
    var closePopupButton = popupBasket.querySelector('.close-btn_basket');
    var closePopupButton2 = popupBasket.querySelector('.modal-basket__btn');

    for (var i = 0; i < openPopupButton.length; i++) {

        openPopupButton[i].addEventListener('click', function () {
        popupBasket.classList.add('modal-basket_show');
        popupBasket.classList.add('anim');
        });
    }

    closePopupButton.addEventListener('click', function () {
        popupBasket.classList.remove('modal-basket_show');        
    });

    closePopupButton2.addEventListener('click', function () {
        popupBasket.classList.remove('modal-basket_show');        
    });

    document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            popupBasket.classList.remove('modal-basket_show');            
        }
    });
};

function popapMap() {

    var popupMap = document.querySelector('.modal-map');
    var openPopupButton = document.querySelector('.contacts__img');
    var closePopupButton = popupMap.querySelector('.close-btn');    

    openPopupButton.addEventListener('click', function (evt) {

        evt.preventDefault();
        popupMap.classList.add('modal-map_show');
        popupMap.classList.add('anim');        
    });

    closePopupButton.addEventListener('click', function () {
        popupMap.classList.remove('modal-map_show');        
    });

    document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            popupMap.classList.remove('modal-map_show');            
        }
    });
}



if(window.location.toString().indexOf('catalog.html')>0) {

    basket();    

} else {

    feedback();
    popapMap();

};
