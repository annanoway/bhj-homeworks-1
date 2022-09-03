const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

button.onclick = (event) => {
  event.preventDefault()
  if (input.value.trim() !== '') {
    tasksList.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
    input.value = '';

    let taskRemove = document.querySelectorAll('.task__remove');
    taskRemove[taskRemove.length - 1].addEventListener('click', () => {
      taskRemove[taskRemove.length - 1].parentElement.remove();
    });
  }
}