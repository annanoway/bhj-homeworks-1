let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let activeCase = document.querySelector('.rotator__case_active');

function rotator() {
  if (activeCase.className.includes('rotator__case rotator__case_active')) {
    if (rotatorCase.indexOf(activeCase) === rotatorCase.length - 1) {
      activeCase.classList.remove('rotator__case_active');
      activeCase = rotatorCase[0];
      activeCase.classList.add('rotator__case_active');
    } else {
      activeCase.classList.remove('rotator__case_active');
      activeCase = rotatorCase[rotatorCase.indexOf(activeCase) + 1];
      activeCase.classList.add('rotator__case_active');
    }
  }
}

let timerID = setInterval(rotator, 1000)