const count = document.getElementById("timer");

function addTimer() {
    if (count.textContent > 0) {
        count.textContent -= 1;
    } else {
        alert('Вы победили в конкурсе!');
        clearInterval(timer)
    }
}
let timer = setInterval(addTimer, 1000)