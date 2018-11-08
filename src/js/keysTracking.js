import { touchAreaLeft, touchAreaRight, actionNotification } from './domElements/createDomElements';
import state from './state/state';

const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

window.addEventListener('keydown', trackKeys);
window.addEventListener('keyup', trackKeys);
touchAreaLeft.addEventListener('touchstart', (event) => {
  state.arrowKeys.ArrowLeft = true;
  event.stopPropagation();
});
touchAreaRight.addEventListener('touchstart', (event) => {
  state.arrowKeys.ArrowRight = true;
  event.stopPropagation();
});
touchAreaLeft.addEventListener('touchend', (event) => {
  state.arrowKeys.ArrowLeft = false;
  event.stopPropagation();
});
touchAreaRight.addEventListener('touchend', (event) => {
  state.arrowKeys.ArrowRight = false;
  event.stopPropagation();
});
actionNotification.addEventListener('touchend', (event) => {
  state.arrowKeys.ArrowUp = true;
  event.stopPropagation();
});

function trackKeys(event) {
  if (keys.includes(event.key)) {
    state.arrowKeys[event.key] = event.type === 'keydown';
    event.preventDefault();
  }
}
