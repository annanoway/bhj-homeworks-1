let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

const showDropdownList = () => dropdownList.classList.add('dropdown__list_active');

dropdownValue.addEventListener('click', showDropdownList);
dropdownLink.forEach(item => item.addEventListener('click', (event) => {
  event.preventDefault();
  dropdownList.classList.remove('dropdown__list_active');
  dropdownValue.textContent = item.textContent;
}));