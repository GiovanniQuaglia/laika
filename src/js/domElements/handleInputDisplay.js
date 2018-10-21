import { yearSelector } from './createDomElements';

const hideInputDisplay = () => {
  yearSelector.style.opacity = '0';
  setTimeout(
    () => {
      yearSelector.style.visibility = 'hidden';
    }, 300,
  );
};

const showInputDisplay = () => {
  yearSelector.style.opacity = '1';
  yearSelector.style.visibility = 'visible';
};

export { hideInputDisplay, showInputDisplay };
