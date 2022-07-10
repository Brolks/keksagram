import criateCommentsFragment from "./criateCommentsFragment.js";
function criateFotosFragment(data){
  const templatePicture = document.querySelector('#picture').content.querySelector('a');
  const fragment = document.createDocumentFragment();
  data.forEach((elm) => {
    const element = templatePicture.cloneNode(true);
    element.children[0].src=elm.url;
    element.children[0].alt=elm.description;
    element.querySelector('.picture__likes').textContent=elm.likes;
    element.querySelector('.picture__comments').textContent=elm.comments.length;
    element.addEventListener('click',(evt)=>{
      document.querySelector('.comments-count').textContent=elm.comments.length;
      document.querySelector('.likes-count').textContent=elm.likes;
      document.querySelector('.social__caption').textContent=elm.description;
      document.querySelector('.big-picture__img img').src=evt.srcElement.src;

      document.querySelector('.social__comments').innerHTML='';
      document.querySelector('.social__comments').appendChild(criateCommentsFragment(elm.comments))

      document.querySelector('body').classList.add('modal-open');
      document.querySelector('.big-picture').classList.remove('hidden');
    })
    fragment.appendChild(element);
  });
  return fragment;
}
export default criateFotosFragment;
