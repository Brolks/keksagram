const loadImageFrom = document.querySelector('#upload-select-image');
const uploadImg = document.querySelector('.img-upload__preview img');

function clearEditor(){
  loadImageFrom.filename. value=null;
  loadImageFrom.scale.    value=EDITOR_CONFIG.START_SCALE+'%';
  uploadImg.style.transform=`scale(${EDITOR_CONFIG.START_SCALE/100})`;
}
export {clearEditor}
