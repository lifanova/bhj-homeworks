const editorElement = document.getElementById('editor');
const clearElement = document.getElementById('clear');

window.addEventListener('unload', () => {
    localStorage.setItem('message', editorElement.value);
})

window.addEventListener('load', () => {
    editorElement.value = localStorage.getItem('message');
})

// Очистка области - вешаем обработчик
clearElement.addEventListener('click', () => {
    editorElement.value = '';
})