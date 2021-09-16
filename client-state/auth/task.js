const signinElement = document.getElementById("signin");
const form = document.getElementById("signin__form");

window.addEventListener("load", loadHandler);

form.addEventListener("submit", submitHandler);

function loadHandler() {
    if (localStorage.getItem("id")) {
        document.getElementById("welcome").classList.add("welcome_active");
        document.getElementById("user_id").textContent = localStorage.getItem("id");
    } else {
        signinElement.classList.add("signin_active");
    }
}

function submitHandler(event) {
    // Отменяем дефолтное событие - отправку формы
    event.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    //POST-request
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    // Обработка ответа
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            let data = JSON.parse(xhr.responseText);

            if (!data.success) {
                console.log("Авторизация не прошла, неверные входные данные!");
                                
                return;
            }

            signinElement.classList.remove("signin_active");
            document.getElementById("welcome").classList.add("welcome_active");
            document.getElementById("user_id").textContent = data.user_id;

            localStorage.setItem("id", data.user_id);
        }

    }
}