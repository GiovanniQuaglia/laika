import { angle } from '../movement/angleIncrement';
import Actions from './actionsClass';
import year from '../state/yearState';
import displayActionsNotifications from './displayActionsNotifications';

const actionsList1957 = () => {
  const actionsObject = new Actions(angle);
  if (angle >= 100 && angle <= 120) {
    displayActionsNotifications('talk');
    actionsObject.talk();
    return;
  }
  if (angle >= 200 && angle <= 220) {
    displayActionsNotifications('act');
    actionsObject.letSwear();
    return;
  }
  displayActionsNotifications('');
};

// const triggerAction = arrowKeys.ArrowUp;

const actionsYearHandler = () => {
  if (year['1957']) {
    actionsList1957();
    return;
  }
  if (year['1968']) {
    actionsList1957();
  }
};


export default actionsYearHandler;
