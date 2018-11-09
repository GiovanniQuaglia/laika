import { skyContainer, endText, credits } from './createDomElements';

function handleEndScreen() {
  endText.innerHTML = 'End';
  credits.innerHTML = 'Made by Giovanni Quaglia';
  skyContainer.style.zIndex = '10';
}

export default handleEndScreen;
