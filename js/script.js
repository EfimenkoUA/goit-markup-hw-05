
    (() => {
        const refs = {
            openPopupBtn: document.querySelector('[data-popup-open]'),
            closePopupBtn: document.querySelector('[data-popup-close]'),
            popup: document.querySelector('[data-popup]'),
        };

        refs.openPopupBtn.addEventListener('click', togglePopup);
        refs.closePopupBtn.addEventListener('click', togglePopup);

        function togglePopup() {
            refs.popup.classList.toggle('is-hidden');
        }
    })();