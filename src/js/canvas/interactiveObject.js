import interactiveObjectSprite from '../../images/interactiveElements/interactiveObject.png';
import { dynamicCanvas } from '../domElements/createDomElements';

const interactiveObject = new Image();
interactiveObject.src = interactiveObjectSprite;

const ctx = dynamicCanvas.getContext('2d');

function stylingInteractiveObject(visibility, opacity, width, height, top, left) {
  dynamicCanvas.style.visibility = visibility;
  dynamicCanvas.style.opacity = opacity;
  dynamicCanvas.style.width = width;
  dynamicCanvas.style.height = height;
  dynamicCanvas.style.top = top;
  dynamicCanvas.style.left = left;
}

function displayInteractiveObject(framesThisSecond) {
  dynamicCanvas.style.width = 20;
  dynamicCanvas.style.height = 20;
  const tileX = (Math.ceil(framesThisSecond / 4) % 8) * 20;
  ctx.clearRect(0, 0, 20, 20);
  ctx.drawImage(interactiveObject, tileX, 0, 20, 20, 0, 0, 20, 20);
}

export { displayInteractiveObject, stylingInteractiveObject };
