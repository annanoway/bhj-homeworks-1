let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for(let index = 1; index < 10; index++) {
    const hole = document.getElementById(`hole${index}`)
    hole.onclick = () => {
      if(hole.className.includes('hole_has-mole')) {
        dead.textContent++;
      } else {
        lost.textContent++;
      }

      if(dead.textContent === '10') {
        alert('Вы победили!');
        dead.textContent = 0;
        lost.textContent = 0;
      } else if(lost.textContent === '5') {
        alert('Вы проиграли!');
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
  }