let killedMoles = 0;
let missedMoves = 0;

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function () {
        if (this.classList.contains('hole_has-mole')) {
            killedMoles++;
            document.getElementById('dead').textContent = killedMoles;
        } else {
            missedMoves++;
            document.getElementById('lost').textContent = missedMoves;
        }

        check();
    };
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function check() {
    
    if (killedMoles == 10) {
        finishGame("Победа! Убито 10 кротов!");
    } else if (missedMoves == 5) {
        finishGame("5 поражений((( Кроты сильнее!:) ");
    }    
    
}

function finishGame(msg) {
    killedMoles = 0;
    missedMoves = 0;

    document.getElementById('dead').textContent = "0";
    document.getElementById('lost').textContent = "0";

    alert(msg);
}