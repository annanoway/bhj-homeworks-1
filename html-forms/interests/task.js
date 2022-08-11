let checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach(item => {
  item.addEventListener('click', () => {
    if (item.closest('.interests_active') == null) {
      item.parentElement.nextElementSibling.querySelectorAll('input').forEach(element => {
        if (item.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      })
    }
  })
})