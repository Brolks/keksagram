import { hideElement } from './../utility.js';
const body = document.body;

document.querySelectorAll('.big-picture__cancel,.img-upload__cancel').forEach((ele) => {
  ele.addEventListener('click', () => {
    hideElement('.big-picture,.img-upload__overlay');
    body.classList.remove('modal-open');
  })
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    document.querySelectorAll('.big-picture,.img-upload__overlay').forEach((ele) => {
      if (document.activeElement.classList.value !== 'text__hashtags')
        hideElement('.big-picture,.img-upload__overlay');
    });

    body.classList.remove('modal-open');
  }
});

hideElement('.social__comment-count');
hideElement('.comments-loader');
