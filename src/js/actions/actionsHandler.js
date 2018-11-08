import talk from './laikaActions';
import displayActionsNotifications from '../domElements/handleActionsDisplay';
import { laikaDialogues1957, laikaDialogues2018 } from '../scripts/dialogues';
import state from '../state/state';
import { textSpan } from '../domElements/createDomElements';
import chapters from '../scripts/chapters';

function dialogueTrigger(scriptStep, dialogue) {
  if (state.arrowKeys.ArrowUp || state.actionIsRunning) {
    displayActionsNotifications('');
    chapters.C01[scriptStep] = talk(dialogue, scriptStep);
    return;
  }
  displayActionsNotifications('talk');
}

const actionsList1957 = () => {
  if (chapters.C01.firstDialogue && state.angle >= 200 && state.angle <= 230) {
    dialogueTrigger(chapters.C01.firstDialogue, laikaDialogues1957.one);
  } else if (chapters.C01.secondDialogue && state.angle >= 140 && state.angle <= 155) {
    dialogueTrigger(chapters.C01.secondDialogue, laikaDialogues1957.ten);
  } else if (
    state.hasTravelledInTime
    && chapters.C01.thirdDialogue
    && state.angle >= 140
    && state.angle <= 155) {
    dialogueTrigger(chapters.C01.thirdDialogue, laikaDialogues1957.diciassette);
  } else displayActionsNotifications('');
};

const actionsList2018 = () => {
  if (state.angle >= 10 && state.angle <= 60) {
    if (state.arrowKeys.ArrowUp || state.actionIsRunning) {
      displayActionsNotifications('');
      talk(laikaDialogues2018.one);
      return;
    }
    textSpan.innerHTML = '';
    displayActionsNotifications('talk');
    return;
  }
  displayActionsNotifications('');
};

function checkYear() {
  const yearString = `${state.year}`;
  switch (yearString) {
    case '1957':
      actionsList1957();
      break;
    case '2018':
      actionsList2018();
      break;
    // case '1968':
    //   actionsList1968();
    //   break;
    default:
  }
}

const actionsYearHandler = () => {
  if (state.actionForbidden) {
    return;
  }
  checkYear();
};

export default actionsYearHandler;
