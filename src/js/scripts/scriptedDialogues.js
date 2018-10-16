import laikaDialogues from './dialogues';
import { textSpan } from '../display/elements';

let actionForbidden = false;

const firstScript = () => {
  setTimeout(
    () => {
      textSpan.innerHTML = laikaDialogues.two;

    },
    2000
  );
  setTimeout(
    () => {
      textSpan.innerHTML = '';
      textSpan.innerHTML = laikaDialogues.two;
    },
    3000
  );
  setTimeout(
    () => {
      textSpan.innerHTML = '';
      textSpan.innerHTML = laikaDialogues.three;
    },
    5000
  );
  setTimeout(
    () => {
      textSpan.innerHTML = '';
    },
    6900
  );
  setTimeout(
    () => {
      textSpan.innerHTML = laikaDialogues.four;
    },
    7500
  );
  setTimeout(
    () => {
      textSpan.innerHTML = '';
    },
    9900
  );
  setTimeout(
    () => {
      textSpan.innerHTML = laikaDialogues.five;
    },
    10500
  );
  setTimeout(
    () => {
      textSpan.innerHTML = '';
      textSpan.innerHTML = laikaDialogues.six;
    },
    12300
  );
  setTimeout(
    () => {
      textSpan.innerHTML = '';
    },
    14000
  );
  setTimeout(
    () => {
      textSpan.innerHTML = laikaDialogues.seven;
    },
    15000
  );
  setTimeout(
    () => {
      textSpan.innerHTML = laikaDialogues.eight;
    },
    17000
  );
  setTimeout(
    () => {
      textSpan.innerHTML = '';
      actionForbidden = false;
    },
    20000
  );
};

const scriptSelector = (previous) => {
  if (previous === laikaDialogues.one) {
    actionForbidden = true;
    firstScript();
  }
};

export { scriptSelector, actionForbidden };
