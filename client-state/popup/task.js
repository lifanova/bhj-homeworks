const popupElement = document.getElementById('subscribe-modal');
const popupCloseElement = document.querySelector('.modal__close');
document.cookie = 'closed=1';

if (!check("modal-closed")) {
    console.log("[2]");
    popupElement.classList.add("modal_active");
}

// Вешаем обработчик на элемент закрытия модалки
popupCloseElement.addEventListener("click", () => {
    popupElement.classList.remove("modal_active");

    document.cookie = 'modal-closed=yes';
    console.log("[] " + document.cookie);
});


function check(name) {
    console.log("[1]");
    const cookies = document.cookie.split('; ');
    console.log("[2] " + cookies);
    const result = cookies.find(c => c.startsWith(name + '='));

    return result ? decodeURIComponent(result.substr(name.length + 1)) : null;
}

