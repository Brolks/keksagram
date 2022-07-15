import {showElement} from '../utility.js';
import {clearEditor} from './fotoEditorUtility.js';
import changeFilter from './changeFilter.js';

const loadImageFrom = document.querySelector('#upload-select-image');

function onLoadFoto(evt){
  const files = evt.target.files;
  // FileReader support
  if (FileReader && files && files.length) {
    var fr = new FileReader();
    fr.onload = function () {
        document.querySelector('.img-upload__preview img').src = fr.result;
        document.documentElement.style.setProperty('--img-new', `url(${fr.result})`);
    }
    fr.readAsDataURL(files[0]);
  }
  // Not supported
  else {
    // fallback -- perhaps submit the input to an iframe and temporarily store
    // them on the server until the user's session ends.
  }
  loadImageFrom.hashtags.classList.remove('warning');
  loadImageFrom.hashtags.value='';
  loadImageFrom.description.value='';
  document.querySelector('.effects__radio.visually-hidden').checked=true;
  changeFilter();
  showElement('.img-upload__overlay');
}
const loadInput = document.querySelector('#upload-file');
loadInput.addEventListener('click',clearEditor);
loadInput.addEventListener('change',onLoadFoto);

export default onLoadFoto;
