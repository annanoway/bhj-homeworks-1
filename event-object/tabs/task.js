let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(item => item.addEventListener('click', function() {
  let tabIndex = tabs.indexOf(item);
  tabs.forEach(item => item.classList.remove('tab_active'));
  tabContent.forEach(item => item.classList.remove('tab__content_active'));
  item.classList.add('tab_active');
  tabContent[tabIndex].classList.add('tab__content_active')
}))