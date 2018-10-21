import { angle } from '../movement/angleIncrement';
import Actions from './actionsClass';
import yearState from '../state/yearState';
import displayActionsNotifications from '../domElements/handleActionsDisplay';
import { textSpan } from '../domElements/createDomElements';
import arrowKeys from '../keysTracking';
import { laikaDialogues1957, laikaDialogues1968 } from '../scripts/dialogues';
import action from '../state/actionsState';

const actionsList1957 = () => {
  if (angle >= 200 && angle <= 220) {
    const actionsObject = new Actions(angle, textSpan, arrowKeys);
    if (arrowKeys.ArrowUp || actionsObject.isActionRunning) {
      displayActionsNotifications('');
      actionsObject.talk(laikaDialogues1957.one);
      return;
    }
    displayActionsNotifications('talk');
    return;
  }
  displayActionsNotifications('');
};

const actionsList1968 = () => {
  if (angle >= 10 && angle <= 60) {
    const actionsObject = new Actions(angle, textSpan, arrowKeys);
    if (arrowKeys.ArrowUp || actionsObject.isActionRunning) {
      displayActionsNotifications('');
      actionsObject.talk(laikaDialogues1968.one);
      return;
    }
    displayActionsNotifications('talk');
    return;
  }
  displayActionsNotifications('');
};

function checkYear() {
  const yearString = `${yearState.year}`;
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
  if (action.forbidden) {
    return;
  }
  checkYear();
};

export default actionsYearHandler;
