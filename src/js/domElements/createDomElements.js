const skyContainer = document.getElementById('sky-container');

const futureBackground = document.createElement('div');
skyContainer.appendChild(futureBackground);
futureBackground.id = 'futureBackground';

const background = document.createElement('div');
skyContainer.appendChild(background);
background.className = 'background';

const asteroidContainer = document.createElement('div');
document.body.appendChild(asteroidContainer);
asteroidContainer.id = 'asteroidContainer';

const planetBack = document.createElement('div');
asteroidContainer.appendChild(planetBack);
planetBack.class = 'planet';
planetBack.id = 'planetBack';

const dynamicCanvas = document.createElement('canvas');
planetBack.appendChild(dynamicCanvas);
dynamicCanvas.id = 'dynamicCanvas';

const player = document.createElement('canvas');
asteroidContainer.appendChild(player);
player.id = 'player';
player.width = 54;
player.height = 106;

const planetFront = document.createElement('div');
asteroidContainer.appendChild(planetFront);
planetFront.class = 'planet';
planetFront.id = 'planetFront';

const yearChangeBlender = document.createElement('div');
document.body.appendChild(yearChangeBlender);
yearChangeBlender.id = 'yearChangeBlender';

const touchAreaLeft = document.createElement('div');
document.body.appendChild(touchAreaLeft);
touchAreaLeft.id = 'touchAreaLeft';

const touchAreaRight = document.createElement('div');
document.body.appendChild(touchAreaRight);
touchAreaRight.id = 'touchAreaRight';

const actionsContainer = document.createElement('div');
document.body.appendChild(actionsContainer);
actionsContainer.id = 'actionsContainer';

const yearSelector = document.createElement('input');
actionsContainer.appendChild(yearSelector);
yearSelector.id = 'yearSelector';
yearSelector.type = 'tel';

const yearSelectorButton = document.createElement('div');
actionsContainer.appendChild(yearSelectorButton);
yearSelectorButton.id = 'yearSelectorButton';

const textSpan = document.createElement('span');
actionsContainer.appendChild(textSpan);
textSpan.id = 'textSpan';

const actionNotification = document.createElement('div');
document.body.appendChild(actionNotification);
actionNotification.classList.add('actionNotification');

const titleWrapper = document.createElement('div');
titleWrapper.id = 'titleWrapper';
document.body.appendChild(titleWrapper);

const title = document.createElement('div');
titleWrapper.appendChild(title);
title.id = 'title';
title.innerHTML = 'ЛАЙКА';

const undertitle = document.createElement('div');
titleWrapper.appendChild(undertitle);
undertitle.id = 'undertitle';
undertitle.innerHTML = 'A DOG LOST IN SPACE';

const instructions = document.createElement('div');
document.body.appendChild(instructions);
instructions.id = 'instructions';
instructions.innerHTML = 'Move around with the left / right arrow keys<br/>and do things with the arrow up key';

const startButton = document.createElement('div');
startButton.id = 'startButton';
startButton.innerHTML = 'START';
titleWrapper.appendChild(startButton);

const endText = document.createElement('div');
skyContainer.appendChild(endText);
endText.id = 'endText';

const credits = document.createElement('div');
skyContainer.appendChild(credits);
credits.id = 'credits';

export {
  asteroidContainer,
  endText,
  credits,
  dynamicCanvas,
  yearChangeBlender,
  futureBackground,
  instructions,
  startButton,
  titleWrapper,
  planetBack,
  planetFront,
  player,
  background,
  touchAreaLeft,
  touchAreaRight,
  actionNotification,
  yearSelector,
  textSpan,
  skyContainer,
};
