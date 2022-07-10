import criatePickcher from "./module/imageGenerator/criatePickcher.js";
import criateFotosFragment from "./module/imageGenerator/criateFotosFragment.js";
let pullPhoto = [];
for(let i = 1; i<=25;i++){
  pullPhoto.push(criatePickcher(i));
}
console.log(pullPhoto);
document.querySelector('.pictures').appendChild(criateFotosFragment(pullPhoto));
