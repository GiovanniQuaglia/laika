import { yearSelector, background, textSpan } from '../domElements/elements';
import action from './actionsState';

let year = 1957;

yearSelector.value = year;
yearSelector.addEventListener('focusout', () => {
  yearSelector.value = year;
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
  const alert = ms => new Promise(resolve => setTimeout(resolve, ms));
  alert(800).then(() => { textSpan.innerHTML = "This doesn't look good. Better not to go too much into the future."; });
  alert(5000).then(() => { textSpan.innerHTML = ''; });
};

yearSelector.addEventListener('keypress', (e) => {
  if (action.forbidden === true) {
    return;
  }
  const key = e.which || e.keyCode;
  if (key === 13 && yearValidation(yearSelector.value)) {
    lengthValidation(yearSelector.value)
    year = yearSelector.value;
  }
});

export default year;
