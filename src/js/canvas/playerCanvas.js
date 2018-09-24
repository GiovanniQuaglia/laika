import laikaRunningSprite from '../../images/laika/Laika_run.png';
import laikaStaticSprite from '../../images/laika/Laika_static.png';

const laikaStatic = new Image();
laikaStatic.src = laikaStaticSprite;

const laikaRunning = new Image();
laikaRunning.src = laikaRunningSprite;

const ctx = document.getElementById('player').getContext('2d');

let second;
let line;

const selectedFrame = () => {
  second = Number(Math.floor(Date.now() / 60).toString().slice(-1));
  if (second === 2 || second === 7) {
    return 1;
  }
  if (second >= 3 && second <= 6) {
    return 2;
  }
  return 0;
};

const displayRunningLaika = () => {
  const tile = Math.floor(Date.now() / 60) % 9;
  const tileX = tile * 54;
  ctx.clearRect(0, 0, 54, 106);
  ctx.drawImage(laikaRunning, tileX, line, 54, 106, 0, 0, 54, 106);
};

const turnLaikaSide = (arrowKeys) => {
  if (arrowKeys.ArrowLeft === true) {
    line = 0;
    displayRunningLaika();
    return;
  }
  if (arrowKeys.ArrowRight === true) {
    line = 107;
    displayRunningLaika();
  }
};

const displayPlayer = (arrowKeys) => {
  const isRunning = Object.keys(arrowKeys).some(k => arrowKeys[k]);
  if (isRunning) {
    turnLaikaSide(arrowKeys);
    return;
  }
  const laikaToDisplay = selectedFrame();
  const tileX = laikaToDisplay * 54;
  if (line === 107) {
    ctx.save();
    ctx.translate(54, 0);
    ctx.scale(-1, 1);
  }
  ctx.clearRect(0, 0, 54, 106);
  ctx.drawImage(laikaStatic, tileX, 0, 54, 106, 0, 0, 54, 106);
  ctx.restore();
};

export default displayPlayer;
