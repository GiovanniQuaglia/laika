import talk from './laikaActions';
import displayActionsNotifications from '../domElements/handleActionsDisplay';
import { laikaDialogues1957, laikaDialogues1968 } from '../scripts/dialogues';
import state from '../state/state';
import { textSpan } from '../domElements/createDomElements';
import chapters from '../scripts/chapters';

const actionsList1957 = () => {
  if (state.angle >= 200 && state.angle <= 220) {
    if (state.arrowKeys.ArrowUp || state.actionIsRunning) {
      displayActionsNotifications('');
      chapters.C01.firstDialogue = talk(laikaDialogues1957.one);
      return;
    }
    if (chapters.C01.firstDialogue) {
      displayActionsNotifications('talk');
      return;
    }
  }
  if (state.angle >= 140 && state.angle <= 155) {
    if (state.arrowKeys.ArrowUp || state.actionIsRunning) {
      displayActionsNotifications('');
      talk(laikaDialogues1957.ten);
      chapters.C01.displayTimeMachine = false;
      return;
    }
    if (chapters.C01.displayTimeMachine) {
      displayActionsNotifications('talk');
      return;
    }
  }
  displayActionsNotifications('');
};

const actionsList1968 = () => {
  if (state.angle >= 10 && state.angle <= 60) {
    if (state.arrowKeys.ArrowUp || state.actionIsRunning) {
      displayActionsNotifications('');
      talk(laikaDialogues1968.one);
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
    case '1968':
      actionsList1968();
      break;
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
