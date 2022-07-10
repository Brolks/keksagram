import {hiddenElement} from './../utility.js';

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  hiddenElement('.big-picture');
  document.querySelector('body').classList.remove('modal-open');
});
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    hiddenElement('.big-picture');
    document.querySelector('body').classList.remove('modal-open');
  }
});
hiddenElement('.social__comment-count');
hiddenElement('.comments-loader');
