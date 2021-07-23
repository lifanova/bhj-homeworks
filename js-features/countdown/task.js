const timer = document.getElementById("timer");
let counter = timer.textContent;

let intervalId = setInterval( minusCounter, 1000);

function minusCounter(){
    counter--;
    timer.textContent = counter;

    if(counter == 0) {
        alert("Вы победили в конкурсе");
        clearInterval(intervalId);
    }
}