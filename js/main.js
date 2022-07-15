import criatePickcher       from "./module/imageGenerator/criatePickcher.js";
import criateFotosFragment  from "./module/imageGenerator/criateFotosFragment.js";
import "./module/imageEditor.js";

for(let i = 1; i<=25;i++){
  PULL_PHOTO.push(criatePickcher(i));
}

document.querySelector('.pictures').appendChild(criateFotosFragment(PULL_PHOTO));


