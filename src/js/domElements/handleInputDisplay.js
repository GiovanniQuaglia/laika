import { yearSelector } from './createDomElements';

const hideInputDisplay = () => {
  yearSelector.style.opacity = '0';
  setTimeout(
    () => {
    }, 300,
  );
};

const showInputDisplay = () => {
  yearSelector.style.opacity = '1';
};

export { hideInputDisplay, showInputDisplay };
