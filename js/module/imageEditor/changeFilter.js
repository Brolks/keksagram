import {showElement,hideElement} from '../utility.js';

const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = document.querySelector('.effect-level__slider');
const loadImageFrom = document.querySelector('#upload-select-image');
const image = document.querySelector('.img-upload__preview img');

function changeFilter() {
  if(loadImageFrom.effect.value === 'none'){
    image.style.filter =null;
    hideElement(sliderContainer);
    loadImageFrom['effect-level'].value = 0;
  }
  else{
    slider.noUiSlider.updateOptions(EDITOR_CONFIG.FILTER[loadImageFrom.effect.value].slider);
    image.style.filter = EDITOR_CONFIG.FILTER[loadImageFrom.effect.value].filter;

    showElement(sliderContainer);
    loadImageFrom['effect-level'].value = DOM_ELEMENTS.SLIDER_VALUE_LINK;
  }
}

export default changeFilter;
