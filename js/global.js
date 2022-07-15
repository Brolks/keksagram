const PULL_PHOTO = [];
const DOM_ELEMENTS= {
  SLIDER_VALUE_LINK:null,
}
const EDITOR_CONFIG = {
  SCALE_CONTROL:15,
  START_SCALE:100,
  MAX_SCALE:100,
  MIN_SCALE:15,
  FILTER:{
    chrome:{
      slider:{
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.01,
      },
      filter:`grayscale(${DOM_ELEMENTS.SLIDER_VALUE_LINK})`,
    },
    sepia:{
      slider:{
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.01,
      },
      filter:`sepia(${DOM_ELEMENTS.SLIDER_VALUE_LINK})`,
    },
    marvin:{
      slider:{
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      },
      filter: `invert(${DOM_ELEMENTS.SLIDER_VALUE_LINK}%)`,
    },
    phobos:{
      slider:{
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      },
      filter:`blur(${DOM_ELEMENTS.SLIDER_VALUE_LINK}px)`,
    },
    heat:{
      slider:{
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      },
      filter:`brightness(${DOM_ELEMENTS.SLIDER_VALUE_LINK})`,
    },
  }
};
