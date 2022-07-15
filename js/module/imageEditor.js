import scaleControl from "./imageEditor/scaleControl.js";
import onLoadFoto   from "./imageEditor/onLoadFoto.js";
import changeFilter from "./imageEditor/changeFilter.js";
import applyFilter from "./imageEditor/applyFilter.js";
import "./imageEditor/setValidity.js";

const loadInput = document.querySelector('#upload-file');
const loadImageFrom = document.querySelector('#upload-select-image');
const slider = document.querySelector('.effect-level__slider');

loadInput.addEventListener('click',()=>loadInput.value=null);
loadInput.addEventListener('change',onLoadFoto);

document.querySelector('.scale__control--smaller').addEventListener('click',scaleControl(-EDITOR_CONFIG.SCALE_CONTROL));
document.querySelector('.scale__control--bigger').addEventListener('click',scaleControl(EDITOR_CONFIG.SCALE_CONTROL));

noUiSlider.create(slider, {
  range: {
      min: 0,
      max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
      to: function (value) {
          if (Number.isInteger(value)) {
              return value.toFixed(0);
          }
          return value.toFixed(2);
      },
      from: function (value) {
          return parseFloat(value);
      },
  },
});
loadImageFrom.effect.forEach((ele)=>ele.addEventListener('change',changeFilter));
slider.noUiSlider.on('update',applyFilter);
DOM_ELEMENTS.SLIDER_VALUE_LINK=slider.noUiSlider.valueOf().get();

loadImageFrom.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  console.log('test');
  loadImageFrom.submit()
})

loadImageFrom.hashtags.addEventListener('invalid', () => {
  loadImageFrom.hashtags.classList.add('warning');
});
