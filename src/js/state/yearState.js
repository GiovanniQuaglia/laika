import { yearSelector, background, textSpan } from '../domElements/createDomElements';
import action from './actionsState';
import dialogueDisplayer from '../scripts/dialoguesTextDisplay';
import yearTransitionDisplay from '../domElements/handleYearTransitionDisplay';
import automaticNewYearDialogues from '../scripts/automaticNewYearDialogues';

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
    setTimeout(() => {
      background.style.visibility = 'visible';
    }, 400);
    return;
  }
  setTimeout(() => {
    background.style.visibility = 'hidden';
  }, 400);
};

yearSelector.addEventListener('keypress', (e) => {
  if (action.forbidden === true) {
    return;
  }
  const { value } = yearSelector;
  const key = e.which || e.keyCode;
  if (key === 13 && yearValidation(value)) {
    yearTransitionDisplay();
    lengthValidation(value);
    automaticNewYearDialogues(value);
    yearState.year = value;
  }
});

export default yearState;
