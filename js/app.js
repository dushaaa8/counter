if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/service-worker.js')
    .then(reg => console.log('Service Worker registered', reg))
    .catch(err => console.warn('Error registering service worker', err));
}

document.addEventListener('DOMContentLoaded', function() {
  let i = 0;
  const buttonPlus = document.getElementById('button-plus');
  const buttonMinus = document.getElementById('button-minus');
  const buttonClear = document.getElementById('button-clear');
  let content = document.getElementById('counter');

  buttonPlus.addEventListener('click', function() {
    i++
    content.textContent = String(i);
  });
  buttonMinus.addEventListener('click', function() {
    i--
    content.textContent = String(i);
  });
  buttonClear.addEventListener('click', function() {
    i=0
    content.textContent = String(i);
  });
});
