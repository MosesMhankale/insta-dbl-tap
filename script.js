const img = document.querySelector('img');
const icon = document.querySelector('.icon');
const countEl = document.querySelector('span');
let count = 1000000;

countEl.innerHTML = count.toLocaleString();

img.addEventListener('dblclick', () => {
  count++;
  countEl.innerHTML = count.toLocaleString();

  icon.classList.add('like');

  setTimeout(() => {
    icon.classList.remove('like');
  }, 1250);
});
