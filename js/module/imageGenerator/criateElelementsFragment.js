function criateElelementsFragment(data){
  const templatePicture = document.querySelector('#picture').content.querySelector('a');
  const fragment = document.createDocumentFragment();
  data.forEach((elm) => {
    const element = templatePicture.cloneNode(true);
    element.children[0].src=elm.url;
    element.children[0].alt=elm.description;
    element.querySelector('.picture__likes').textContent=elm.likes;
    element.querySelector('.picture__comments').textContent=elm.comments.length;
    fragment.appendChild(element);
  });
  return fragment;
}
export default criateElelementsFragment;
