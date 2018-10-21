import laikaDialogues from './dialogues';
import { textSpan } from '../domElements/elements';
import action from '../state/actionsState';
import { hideInputDisplay, showInputDisplay } from '../domElements/handleInputDisplay';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const firstScript = () => {
  wait(2000).then(() => { textSpan.innerHTML = laikaDialogues.two; });
  wait(4000).then(() => { textSpan.innerHTML = laikaDialogues.three; });
  wait(6000).then(() => { textSpan.innerHTML = ''; });
  wait(7000).then(() => { textSpan.innerHTML = laikaDialogues.four; });
  wait(9900).then(() => { textSpan.innerHTML = ''; });
  wait(10500).then(() => { textSpan.innerHTML = laikaDialogues.five; });
  wait(12300).then(() => { textSpan.innerHTML = laikaDialogues.six; });
  wait(14000).then(() => { textSpan.innerHTML = ''; });
  wait(15000).then(() => { textSpan.innerHTML = laikaDialogues.seven; });
  wait(18000).then(() => { textSpan.innerHTML = laikaDialogues.eight; });
  wait(23000).then(() => { textSpan.innerHTML = ''; action.forbidden = false; showInputDisplay()});
};

const scriptSelector = (previous) => {
  if (previous === laikaDialogues.one && action.forbidden === false) {
    action.forbidden = true;
    hideInputDisplay();
    firstScript();
  }
};

export default scriptSelector;
