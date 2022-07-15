function criateRandomNamber(varFunc,func,obj){
  let newNamber =func(varFunc[0],varFunc[1]);
  if(obj.find((elm)=>elm.id===newNamber)=== undefined || obj.length===0)
    return newNamber
  else
    return criateRandomNamber(varFunc,func,obj);
}

function hideElement(name){
  if(typeof(name)==='object')
    name.classList.add('hidden');
  else
    document.querySelectorAll(name).forEach((ele)=>{ele.classList.add('hidden');})
}

function showElement(name){
  if(typeof(name)==='object')
    name.classList.remove('hidden');
  else
    document.querySelectorAll(name).forEach((ele)=>{ele.classList.remove('hidden');})
}

export {criateRandomNamber,hideElement,showElement};
