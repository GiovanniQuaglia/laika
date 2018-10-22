import runGame from './runAnimation';
import { asteroidContainer, futureBackground } from './domElements/createDomElements';

const titleWrapper = document.createElement('div');

const displayTitle = () => {
  titleWrapper.id = 'titleWrapper';
  document.body.appendChild(titleWrapper);
  const title = document.createElement('div');
  title.id = 'title';
  title.innerHTML = 'ЛАЙКА';
  document.getElementById('titleWrapper').appendChild(title);
  const undertitle = document.createElement('div');
  undertitle.id = 'undertitle';
  undertitle.innerHTML = 'A DOG LOST IN SPACE';
  document.getElementById('titleWrapper').appendChild(undertitle);
};

function fadeout() {
  document.getElementById('instructions').style.opacity = '0';
}

const displayHiddenCanvas = () => {
  asteroidContainer.style.opacity = '1';
  asteroidContainer.style.visibility = 'visible';
  futureBackground.style.visibility = 'visible';
};

function displayInstructions() {
  const instructions = document.createElement('div');
  instructions.id = 'instructions';
  instructions.innerHTML = 'Move around with the left / right arrow keys<br/>and do things with the arrow up key';
  document.body.appendChild(instructions);
  setTimeout(fadeout, 40);
  setTimeout(
    () => {
      instructions.remove();
      displayHiddenCanvas();
      runGame();
    }, 50,
  );
}

function displayStartButton() {
  const startButton = document.createElement('div');
  startButton.id = 'startButton';
  startButton.innerHTML = 'START';
  document.getElementById('titleWrapper').appendChild(startButton);
  startButton.addEventListener('click', (e) => {
    e.preventDefault();
    titleWrapper.remove();
    displayInstructions();
  });
}

function runTitle() {
  displayTitle();
  displayStartButton();
}

export default runTitle;
