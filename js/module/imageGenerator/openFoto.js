import criateCommentsFragment from "./criateCommentsFragment.js";
function openFoto(element,data){
  element.addEventListener('click',(evt)=>{
    evt.preventDefault();

    document.querySelector('.comments-count').textContent=data.comments.length;
    document.querySelector('.likes-count').textContent=data.likes;
    document.querySelector('.social__caption').textContent=data.description;
    document.querySelector('.big-picture__img img').src=evt.srcElement.src;

    document.querySelector('.social__comments').innerHTML='';
    document.querySelector('.social__comments').appendChild(criateCommentsFragment(data.comments))

    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.big-picture').classList.remove('hidden');
  })
}
export default openFoto;
