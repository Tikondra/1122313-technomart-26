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

feedback();