import { yearSelector, background } from '../domElements/createDomElements';
import yearTransitionDisplay from '../domElements/handleYearTransitionDisplay';
import defaultDialogues from '../scripts/defaultDialogues';
import state from '../state/state';

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

function setYear(e) {
  if (state.actionForbidden === true) {
    return;
  }
  const { value } = yearSelector;
  const key = e.which || e.keyCode;
  if (key === 13 && yearValidation(value)) {
    yearTransitionDisplay();
    lengthValidation(value);
    defaultDialogues(value);
    state.year = value;
  }
}

(() => {
  yearSelector.value = state.year;
  yearSelector.addEventListener('focusout', () => {
    yearSelector.value = state.year;
  });
  yearSelector.addEventListener('keypress', setYear);
})();
