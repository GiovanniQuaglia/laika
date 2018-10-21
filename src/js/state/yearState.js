import { yearSelector, background, textSpan } from '../domElements/createDomElements';
import action from './actionsState';
import dialogueDisplayer from '../scripts/dialoguesTextDisplay';

const yearState = {
  year: 1957,
};

yearSelector.value = yearState.year;
yearSelector.addEventListener('focusout', () => {
  yearSelector.value = yearState.year;
});

const yearValidation = (value) => {
  const reg = new RegExp('^[0-9]+$');
  const areNumbers = value.match(reg);
  return areNumbers;
};

const lengthValidation = (value) => {
  if (value < 9999) {
    background.style.visibility = 'visible';
    return;
  }
  background.style.visibility = 'hidden';
  dialogueDisplayer(800, "This doesn't look good. Better not to go too much into the future.");
  dialogueDisplayer(5000, '');
};

yearSelector.addEventListener('keypress', (e) => {
  if (action.forbidden === true) {
    return;
  }
  const key = e.which || e.keyCode;
  if (key === 13 && yearValidation(yearSelector.value)) {
    lengthValidation(yearSelector.value);
    yearState.year = yearSelector.value;
  }
});

export default yearState;
