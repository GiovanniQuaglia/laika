import { angle } from '../movement/angleIncrement';
import Actions from './actionsClass';

const actionsList = () => {
  const actionsObject = new Actions(angle);
  if (angle >= 100 && angle <= 140) {
    actionsObject.talk();
  }
  if (angle >= 200 && angle <= 250) {
    actionsObject.letSwear();
  }
};

const actionHandler = (arrowKeys) => {
  if (arrowKeys.ArrowUp === true) {
    actionsList();
  }
};

export default actionHandler;
