import { angle } from '../movement/angleIncrement';
import Actions from './actionsClass';
import year from '../state/yearState';
import displayActionsNotifications from './displayActionsNotifications';
import { textSpan } from '../domElements/elements';
import arrowKeys from '../keysTracking';
import laikaDialogues from '../scripts/dialogues';
import action from '../state/actionsState';

const actionsList1957 = () => {
  if (angle >= 200 && angle <= 220) {
    const actionsObject = new Actions(angle, textSpan, arrowKeys);
    if (arrowKeys.ArrowUp || actionsObject.isActionRunning) {
      displayActionsNotifications('');
      actionsObject.talk(laikaDialogues.one);
      return;
    }
    displayActionsNotifications('talk');
    return;
  }
  displayActionsNotifications('');
};

const actionsYearHandler = () => {
  if (action.forbidden) {
    return;
  }
  if (year === 1957) {
    actionsList1957();
    return;
  }
  if (year === 1968) {
    actionsList1957();
  }
};

export default actionsYearHandler;
