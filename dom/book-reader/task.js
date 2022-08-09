let bookFontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');

bookFontSize.forEach(item => item.addEventListener('click', (event) => {
  event.preventDefault();
  bookFontSize.forEach(item => item.classList.remove('font-size_active'));
  item.classList.add('font-size_active');
  if (item.classList.contains('font-size_big')) {
    book.classList.remove('book_fs-small');
    book.classList.add('book_fs-big');
  } else if (item.classList.contains('font-size_small')) {
    book.classList.remove('book_fs-big');
    book.classList.add('book_fs-small');
  } else {
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
  }
}))