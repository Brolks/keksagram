import criatePickcher from "/js/module/imageGenerator/criate-pickcher.js";
let pullPhoto = [];
for(let i = 1; i<=25;i++){
  pullPhoto.push(criatePickcher(i));
}
console.log(pullPhoto);
