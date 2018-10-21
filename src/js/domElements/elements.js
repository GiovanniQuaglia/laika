const skyContainer = document.getElementById('sky-container');

const background = document.createElement('div');
skyContainer.appendChild(background);
background.id = 'background';

const planetBack = document.createElement('div');
document.body.appendChild(planetBack);
planetBack.class = 'planet';
planetBack.id = 'planetBack';

const player = document.createElement('canvas');
document.body.appendChild(player);
player.id = 'player';
player.width = 54;
player.height = 106;

const planetFront = document.createElement('div');
document.body.appendChild(planetFront);
planetFront.class = 'planet';
planetFront.id = 'planetFront';

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
yearSelector.type = 'text';
yearSelector.maxlength = '6';

const yearSelectorButton = document.createElement('div');
actionsContainer.appendChild(yearSelectorButton);
yearSelectorButton.id = 'yearSelectorButton';

// const textBox = document.createElement('div');
// yearSelector.appendChild(textBox);
// textBox.id = 'textBox';

const textSpan = document.createElement('span');
actionsContainer.appendChild(textSpan);
textSpan.id = 'textSpan';

const actionNotification = document.createElement('div');
document.body.appendChild(actionNotification);
actionNotification.classList.add('actionNotification');

export {
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
