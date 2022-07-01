function criateRandomNamber(varFunc,func,obj){
  let newNamber =func(varFunc[0],varFunc[1]);
  if(obj.find((elm)=>elm.id===newNamber)=== undefined || obj.length===0)
    return newNamber
  else
    return criateRandomNamber(varFunc,func,obj);
}

export {criateRandomNamber};
