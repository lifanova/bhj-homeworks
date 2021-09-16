// Редактор - textarea
const editorElement = document.getElementById("editor");
// Кнопка очистки содержимого
const clearElement = document.getElementById("clear");

// Забираем из localStorage
editorElement.value = localStorage.getItem("inputText");

// Вешаем обработчик на ввод текста - кладем вводимый текст в localStorage
editorElement.addEventListener("input", () => {
    localStorage.setItem("inputText", editorElement.value);
});

// Очистка области - вешаем обработчик
clearElement.addEventListener("click", () => {    
    localStorage.removeItem("inputText");
    editorElement.value = "";
});


