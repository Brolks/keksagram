import criatePickcher from "./module/imageGenerator/criatePickcher.js";
import criateElelementsFragment from "./module/imageGenerator/criateElelementsFragment.js";
let pullPhoto = [];
for(let i = 1; i<=25;i++){
  pullPhoto.push(criatePickcher(i));
}
console.log(pullPhoto);
document.querySelector('.pictures').appendChild(criateElelementsFragment(pullPhoto));
