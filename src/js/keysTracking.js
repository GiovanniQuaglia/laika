import { touchAreaLeft, touchAreaRight, actionNotification } from './domElements/createDomElements';
import state from './state/state';

const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

window.addEventListener('keydown', trackKeys);
window.addEventListener('keyup', trackKeys);
touchAreaLeft.addEventListener('touchstart', () => {
  state.arrowKeys.ArrowLeft = true;
});
touchAreaRight.addEventListener('touchstart', () => {
  state.arrowKeys.ArrowRight = true;
});
touchAreaLeft.addEventListener('touchend', () => {
  state.arrowKeys.ArrowLeft = false;
});
touchAreaRight.addEventListener('touchend', () => {
  state.arrowKeys.ArrowRight = false;
});
actionNotification.addEventListener('touchend', () => {
  state.arrowKeys.ArrowUp = true;
});

function trackKeys(event) {
  if (keys.includes(event.key)) {
    state.arrowKeys[event.key] = event.type === 'keydown';
    event.preventDefault();
  }
}
