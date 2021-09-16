const popupElement = document.getElementById('subscribe-modal');
const popupCloseElement = document.querySelector('.modal__close');

if (!checkParam("closed")) {
    popupElement.classList.add("modal_active");
}

// Вешаем обработчик на элемент закрытия модалки
popupCloseElement.addEventListener("click", closePopup);

function closePopup() {
    popupElement.classList.remove("modal_active");

    document.cookie = 'closed=true';
}


function checkParam(name) {
    const cookies = document.cookie.split('; ');
    const result = cookies.find(c => c.startsWith(name + '='));

    return result ? decodeURIComponent(result.substr(name.length + 1)) : null;
}

