/*
*Возвращает все комментарии фотографии
*/
function criateCommentsFragment(data){
  const templateComment = document.querySelector('#social__comment').content.querySelector('li');
  const fragment = document.createDocumentFragment();
  data.forEach((elm) => {
    const element = templateComment.cloneNode(true);
    element.children[0].src=elm.avatar;
    element.children[0].alt=elm.name;
    element.children[1].textContent=elm.message;
    fragment.appendChild(element);
  });
  return fragment;
}
export default criateCommentsFragment;
