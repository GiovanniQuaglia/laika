import { laikaDialogues1957 } from './dialogues';
import dialogueDisplayer from './dialoguesTextDisplay';
import state from '../state/state';
import { hideInputDisplay, showInputDisplay } from '../domElements/handleInputDisplay';


const firstScript = () => {
  dialogueDisplayer(2000, laikaDialogues1957.two);
  dialogueDisplayer(4000, laikaDialogues1957.three);
  dialogueDisplayer(6000, '');
  dialogueDisplayer(7000, laikaDialogues1957.four);
  dialogueDisplayer(9900, '');
  dialogueDisplayer(10500, laikaDialogues1957.five);
  dialogueDisplayer(12300, laikaDialogues1957.six);
  dialogueDisplayer(14000, '');
  dialogueDisplayer(15000, laikaDialogues1957.seven);
  dialogueDisplayer(18000, laikaDialogues1957.eight);
  dialogueDisplayer(23000, '');
  setTimeout(() => {
    state.actionForbidden = false;
    showInputDisplay();
  },
  23000);
};

const scriptSelector = (previous) => {
  if (previous === laikaDialogues1957.one && state.actionForbidden === false) {
    state.actionForbidden = true;
    hideInputDisplay();
    firstScript();
  }
};

export default scriptSelector;
