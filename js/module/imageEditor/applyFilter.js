const slider = document.querySelector('.effect-level__slider');
const loadImageFrom = document.querySelector('#upload-select-image');
const image = document.querySelector('.img-upload__preview img');

function applyFilter() {
  switch (loadImageFrom.effect.value) {
    case 'chrome':
      image.style.filter = `grayscale(${slider.noUiSlider.valueOf().get()})`;
      break;
    case 'sepia':
      image.style.filter = `sepia(${slider.noUiSlider.valueOf().get()})`;
      break;
    case 'marvin':
      image.style.filter = `invert(${slider.noUiSlider.valueOf().get()}%)`;
      break;
    case 'phobos':
      image.style.filter = `blur(${slider.noUiSlider.valueOf().get()}px)`;
      break;
    case 'heat':
      image.style.filter = `brightness(${slider.noUiSlider.valueOf().get()})`;
      break;
  }
  loadImageFrom['effect-level'].value = slider.noUiSlider.valueOf().get();
}

export default applyFilter;
