const background = document.createElement('div');
document.body.appendChild(background);
background.id = 'background';

const backgroundBefore = document.createElement('style');
backgroundBefore.innerHTML = `#background:before {
    content: "";
    position: absolute;
    width: 600%;
    height: 600%;
    left: -300%;
    bottom: -300%;
    z-index: -1;
    background: url('https://image.ibb.co/m4EEK9/space.png') 0 0 repeat;
    transform-origin: calc(50% + 50vw) calc(50% - 300px);
    transform: rotate(0deg);
  }`;
document.head.appendChild(backgroundBefore);

const planetBack = document.createElement('canvas');
document.body.appendChild(planetBack);
planetBack.class = 'planet';
planetBack.id = 'planetBack';
planetBack.width = 600;
planetBack.height = 600;

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
textSpan.id = 'textBox';

const planetFront = document.createElement('canvas');
document.body.appendChild(planetFront);
planetFront.class = 'planet';
planetFront.id = 'planetFront';
planetFront.width = 600;
planetFront.height = 600;

const touchAreaLeft = document.createElement('div');
background.appendChild(touchAreaLeft);
touchAreaLeft.id = 'touchAreaLeft';

const touchAreaRight = document.createElement('div');
background.appendChild(touchAreaRight);
touchAreaRight.id = 'touchAreaRight';

export {
  planetBack,
  planetFront,
  player,
  background,
  touchAreaLeft,
  touchAreaRight,
  backgroundBefore,
  actionNotification,
  textBox,
};
