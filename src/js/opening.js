import runGame from './runAnimation';
import {
  asteroidContainer, futureBackground, instructions, startButton, titleWrapper,
} from './domElements/createDomElements';

function fadeout() {
  instructions.style.opacity = '0';
}

const displayHiddenCanvas = () => {
  asteroidContainer.style.opacity = '1';
  asteroidContainer.style.visibility = 'visible';
  futureBackground.style.visibility = 'visible';
};

function displayInstructions() {
  instructions.style.visibility = 'visible';
  setTimeout(fadeout, 4000);
  setTimeout(
    () => {
      instructions.remove();
      displayHiddenCanvas();
      runGame();
    }, 5000,
  );
}

function displayStartButton() {
  startButton.addEventListener('click', (e) => {
    e.preventDefault();
    titleWrapper.remove();
    displayInstructions();
  });
}

function runTitle() {
  displayStartButton();
}

export default runTitle;
