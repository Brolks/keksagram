const inputValue = document.querySelector('.scale__control--value');
function scaleControl(val) {
  return () => {
    const newValue = parseInt(inputValue.value) + val;
    if (newValue >= EDITOR_CONFIG.MIN_SCALE && newValue <= EDITOR_CONFIG.MAX_SCALE){
      inputValue.value = newValue+"%";
      document.querySelector('.img-upload__preview img').style.transform=`scale(${newValue/100})`
    }
  }
}

export default scaleControl;
