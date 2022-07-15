import criateCommentsFragment from "./criateCommentsFragment.js";
import {showElement} from './../utility.js';
function openFoto(data){
  return (evt)=>{
    evt.preventDefault();

    document.querySelector('.comments-count').textContent=data.comments.length;
    document.querySelector('.likes-count').textContent=data.likes;
    document.querySelector('.social__caption').textContent=data.description;
    document.querySelector('.big-picture__img img').src=evt.srcElement.src;

    document.querySelector('.social__comments').innerHTML='';
    document.querySelector('.social__comments').appendChild(criateCommentsFragment(data.comments))

    document.querySelector('body').classList.add('modal-open');
    showElement('.big-picture');
  }
}
export default openFoto;
