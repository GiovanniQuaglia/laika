import state from '../state/state';
import chapters from '../scripts/chapters';
import { displayInteractiveObject } from './interactiveObject';

function animateDisplayedElements(framesThisSecond) {
  if (state.chapter === 1) {
    if (chapters.C01.displayTimeMachine) {
      displayInteractiveObject(framesThisSecond);
    }
  }
}

export default animateDisplayedElements;
