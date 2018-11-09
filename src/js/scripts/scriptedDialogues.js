import { laikaDialogues1957 } from './dialogues';
import dialogueDisplayer from './dialoguesTextDisplay';
import state from '../state/state';
import { hideInputDisplay, showInputDisplay } from '../domElements/handleInputDisplay';
import chapters from './chapters';
import { stylingInteractiveObject } from '../canvas/interactiveObject';
import handleEndScreen from '../domElements/hadleEndScreenDisplay';

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
    chapters.C01.displayTimeMachine = true;
    stylingInteractiveObject('visible', 1, 20, 20, '384px', '111px');
  }, 25000);
  dialogueDisplayer(26000, laikaDialogues1957.nine);
  dialogueDisplayer(29000, '');
  setTimeout(() => {
    chapters.C01.secondDialogue = 'secondDialogue';
    state.actionForbidden = false;
  },
  29000);
};

const secondScript = () => {
  chapters.C01.displayTimeMachine = false;
  stylingInteractiveObject('hidden', 0);
  dialogueDisplayer(1000, laikaDialogues1957.eleven);
  dialogueDisplayer(4000, laikaDialogues1957.twelve);
  dialogueDisplayer(8000, laikaDialogues1957.tredici);
  dialogueDisplayer(11000, laikaDialogues1957.quattordici);
  dialogueDisplayer(14000, '');
  dialogueDisplayer(16000, laikaDialogues1957.quindici);
  dialogueDisplayer(20000, laikaDialogues1957.sedici);
  dialogueDisplayer(23000, '');
  setTimeout(() => {
    state.actionForbidden = false;
    chapters.C01.thirdDialogue = 'thirdDialogue';
    showInputDisplay();
  }, 24000);
};

const thirdScript = () => {
  dialogueDisplayer(1000, laikaDialogues1957.diciotto);
  dialogueDisplayer(4000, laikaDialogues1957.diciannove);
  dialogueDisplayer(8000, laikaDialogues1957.venti);
  dialogueDisplayer(11000, '');
  dialogueDisplayer(14000, laikaDialogues1957.ventuno);
  dialogueDisplayer(16000, laikaDialogues1957.ventidue);
  dialogueDisplayer(17500, '');
  setTimeout(() => {
    handleEndScreen();
  }, 21000);
};


const scriptSelector = (previous) => {
  if (previous === laikaDialogues1957.one && state.actionForbidden === false) {
    state.actionForbidden = true;
    hideInputDisplay();
    firstScript();
    return;
  }
  if (previous === laikaDialogues1957.ten && state.actionForbidden === false) {
    state.actionForbidden = true;
    hideInputDisplay();
    secondScript();
  }
  if (previous === laikaDialogues1957.diciassette && state.actionForbidden === false) {
    state.actionForbidden = true;
    hideInputDisplay();
    thirdScript();
  }
};

export default scriptSelector;
