import scriptSelector from '../scripts/scriptedDialogues';
import state from '../state/state';
import { textSpan } from '../domElements/createDomElements';

function talk(text, scriptStep) {
  state.actionIsRunning = true;
  textSpan.innerHTML = text;
  if (state.arrowKeys.ArrowDown === true
    || state.arrowKeys.ArrowLeft === true
    || state.arrowKeys.ArrowRight === true) {
    state.actionIsRunning = false;
    textSpan.innerHTML = '';
    scriptSelector(text);
    return false;
  }
  return scriptStep;
}

export default talk;
