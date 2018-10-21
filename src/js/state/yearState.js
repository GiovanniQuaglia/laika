import { yearSelector } from '../domElements/elements';
import action from './actionsState';

let year = 1957;

yearSelector.value = year;
yearSelector.addEventListener('focusout', () => {
  yearSelector.value = year;
});

yearSelector.addEventListener('keypress', (e) => {
  if (action.forbidden === true) {
    return;
  }
  const key = e.which || e.keyCode;
  if (key === 13) {
    console.log('si');
    year = yearSelector.value;
  }
});

export default year;
