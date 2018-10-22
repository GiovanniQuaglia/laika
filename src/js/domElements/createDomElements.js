const skyContainer = document.getElementById('sky-container');

const futureBackground = document.createElement('div');
skyContainer.appendChild(futureBackground);
futureBackground.id = 'futureBackground';

const background = document.createElement('div');
skyContainer.appendChild(background);
background.id = 'background';

const asteroidContainer = document.createElement('div');
document.body.appendChild(asteroidContainer);
asteroidContainer.id = 'asteroidContainer';

const planetBack = document.createElement('div');
asteroidContainer.appendChild(planetBack);
planetBack.class = 'planet';
planetBack.id = 'planetBack';

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

export {
  asteroidContainer,
  yearChangeBlender,
  futureBackground,
  planetBack,
  planetFront,
  player,
  background,
  touchAreaLeft,
  touchAreaRight,
  actionNotification,
  yearSelector,
  textSpan,
};
