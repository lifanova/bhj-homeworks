const prevPointer = document.querySelector(".slider__arrow_prev");
const nextPointer = document.querySelector(".slider__arrow_next");
//const dotPointers = document.querySelectorAll(".slider__dot");

// Коллекция элементов, по клику среди элементов найти active и либо сделать active предыдущий, или следующий
let items = document.getElementsByClassName("slider__item");
let array = Array.from(items);

prevPointer.onclick = prevSlide;
nextPointer.onclick = nextSlide;

function prevSlide() {
    let index = array.findIndex((item) => item.classList.contains("slider__item_active"));

    // Элемент больше не активен, =>, убираем у него класс active
    array[index].classList.remove("slider__item_active");

    // Получаем индекс предыдущего элемента-слайда
    index = (index == 0) ? (index = array.length - 1) : index - 1;

    array[index].classList.add("slider__item_active");
}

function nextSlide() {
    let index = array.findIndex((item) => item.classList.contains("slider__item_active"));

    // Элемент больше не активен, =>, убираем у него класс active
    array[index].classList.remove("slider__item_active");

    // Получаем индекс следующего элемента-слайда
    index = (index == array.length - 1) ? 0 : index + 1;

    array[index].classList.add("slider__item_active");
}

