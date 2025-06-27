import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: '✅',
        message: `Promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        color: 'green',
        backgroundColor: '#d4edda',
        messageColor: '#155724',
        titleColor: '#155724',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌',
        message: `Promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        backgroundColor: '#f8d7da',
        messageColor: '#721c24',
        titleColor: '#721c24',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
