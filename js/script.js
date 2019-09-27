function feedback() {

    var popupFeedback = document.querySelector('.modal-send');
    var openPopupButton = document.querySelector('.contacts__link');
    var closePopupButton = popupFeedback.querySelector('.close-btn');    

    openPopupButton.addEventListener('click', function (evt) {

        evt.preventDefault();
        popupFeedback.classList.add('modal-send__show');        
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
    var openPopupButton = document.querySelector('.good__btn_buy');
    var closePopupButton = popupBasket.querySelector('.close-btn_basket');    

    openPopupButton.addEventListener('click', function (evt) {

        evt.preventDefault();
        popupBasket.classList.add('modal-basket_show');        
    });

    closePopupButton.addEventListener('click', function () {
        popupBasket.classList.remove('modal-basket_show');        
    });

    document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            popupBasket.classList.remove('modal-basket_show');            
        }
    });
};



feedback();
