let reveal = Array.from(document.querySelectorAll('.reveal'))

function isVisible(el) {
  const viewportHeight = window.innerHeight;
  const {top, bottom} = el.getBoundingClientRect();
  if (bottom < 0) {
    return false
  }
  if (top > viewportHeight) {
    return false
  }
  return true
}

function showReveal() {
  for (let i in reveal) {
    if (isVisible(reveal[i]) === true) {
      reveal[i].classList.add('reveal_active')
    } else {
      reveal[i].classList.remove('reveal_active')
    }
  }
}


window.addEventListener('scroll', showReveal)