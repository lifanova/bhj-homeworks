const controlBlock = document.querySelector(".book__controls");
const fonts = Array.from(controlBlock.querySelectorAll(".font-size"));
const colors = Array.from(controlBlock.querySelectorAll(".book__control_color .color"));
const backgrounds = Array.from(controlBlock.querySelectorAll(".book__control_background .color"));
const bookContent = document.querySelector(".book__content");


fonts.forEach(element => {
    element.addEventListener("click", toggleFontSize);
});

colors.forEach(element => {
    element.addEventListener("click", toggleColor);
});

backgrounds.forEach(element => {
    element.addEventListener("click", toggleBackground);
});

function toggleFontSize(event) {
    event.preventDefault();

    const button = event.target;   

    fonts.forEach(element => {
        element.classList.remove("font-size_active");
    });

    button.classList.add("font-size_active");
    
    const {size} = button.dataset;
    console.log(size);
    if (size === "small") {
        bookContent.classList.remove('book_fs-small');
        bookContent.classList.add('book', 'book_fs-small');
      } else if (size === "big") {
        bookContent.classList.remove('book_fs-big', 'book_fs-small');
        bookContent.classList.add('book', 'book_fs-big');
      } else {
        bookContent.classList.remove('book_fs-small', 'book_fs-big');
        bookContent.classList.add('book');
      }
}



function toggleColor(event) {
    event.preventDefault();

    const button = event.target;   

    fonts.forEach(element => {
        element.classList.remove("font-size_active");
    });

    button.classList.add("font-size_active");
}

function toggleBackground(event) {
    event.preventDefault();

    const button = event.target;   

    fonts.forEach(element => {
        element.classList.remove("font-size_active");
    });

    button.classList.add("font-size_active");
}