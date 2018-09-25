import { touchAreaLeft, touchAreaRight } from './display/elements';

const down = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};

const touchTracking = () => {
  touchAreaLeft.addEventListener('touchstart', () => {
    down.ArrowLeft = true;
  });
  touchAreaRight.addEventListener('touchstart', () => {
    down.ArrowRight = true;
  });
  touchAreaLeft.addEventListener('touchend', () => {
    down.ArrowLeft = false;
  });
  touchAreaRight.addEventListener('touchend', () => {
    down.ArrowRight = false;
  });
};

function trackKeys(keys) {
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type === 'keydown';
      event.preventDefault();
    }
  }
  window.addEventListener('keydown', track);
  window.addEventListener('keyup', track);
  touchTracking();
  return down;
}

const arrowKeys = trackKeys(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']);

export default arrowKeys;
