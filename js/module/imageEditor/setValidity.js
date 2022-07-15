const loadImageFrom = document.querySelector('#upload-select-image');

loadImageFrom.hashtags.addEventListener('input', () => {
  const hashtags = loadImageFrom.hashtags;
  const hashTagMass = hashtags.value.toLowerCase().split(' ').sort();
  const MIN_TAG_LENGTH = 3;
  const MAX_TAG_LENGTH = 21;
  const MAX_TAG_COUNT = 5;
  hashtags.setCustomValidity('');
  if (hashTagMass.length > MAX_TAG_COUNT) {
    hashtags.setCustomValidity('Удалите лишние ' + (hashTagMass.length - MAX_TAG_COUNT) + ' теги.');
    hashtags.reportValidity();
  }
  else if (
    hashTagMass.some((element, id) => {
      const valueLength = element.length;
      if (element === hashTagMass[id + 1] && element!=='') {
        hashtags.setCustomValidity('Нельзя повторять теги');
        return true;
      }
    })) {

  }
  else{
    hashTagMass.some((element, id) => {
      const valueLength = element.length;
      if (element[0] !== "#" && typeof(element[0])!=='undefined') {
        hashtags.setCustomValidity('Тег должен начинаться с #');
        return true;
      } else if (valueLength > MAX_TAG_LENGTH) {
        hashtags.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TAG_LENGTH) + ' симв.');
        return true;
      } else if (valueLength < MIN_TAG_LENGTH && typeof(element[0])!=='undefined') {
        hashtags.setCustomValidity('Ещё ' + (MIN_TAG_LENGTH - valueLength) + ' симв.');
        return true;
      }
    });
  }

  loadImageFrom.hashtags.classList.remove('warning');
  hashtags.reportValidity();
});
loadImageFrom.description.addEventListener('input', () => {
  const description = loadImageFrom.description;
  const descriptionLength = loadImageFrom.description.value.length;
  const MAX_DESCRIPTION_LENGTH = 140;

  description.setCustomValidity('');

  if (descriptionLength > MAX_DESCRIPTION_LENGTH) {
    description.setCustomValidity('Удалите лишние ' + (descriptionLength - MAX_DESCRIPTION_LENGTH) + ' симв.');
  }

  description.reportValidity();
})

