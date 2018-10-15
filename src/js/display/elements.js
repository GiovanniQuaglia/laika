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

const actionNotification = document.createElement('div');
document.body.appendChild(actionNotification);
actionNotification.classList.add('actionNotification');

const textBox = document.createElement('div');
document.body.appendChild(textBox);
textBox.id = 'textBox';

const textSpan = document.createElement('span');
textBox.appendChild(textSpan);
textSpan.id = 'textSpan';

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

export {
  planetBack,
  planetFront,
  player,
  background,
  touchAreaLeft,
  touchAreaRight,
  actionNotification,
  textBox,
  textSpan,
};
