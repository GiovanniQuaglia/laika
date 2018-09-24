import { planetFront, planetBack, backgroundBefore } from '../display/elements';
import { angleIncrement } from './angleIncrement';

const rotateBackground = (rotationDegree) => {
  const reg = /rotate(.*)deg/;
  backgroundBefore.innerHTML = backgroundBefore.innerHTML.replace(reg, `rotate(${rotationDegree}deg`);
};

const rotatePlanet = (rotationDegree) => {
  planetFront.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
  planetBack.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
};

const rotateElements = (arrowKeys) => {
  if (arrowKeys.ArrowRight === true) {
    const rotationDegree = angleIncrement();
    rotatePlanet(rotationDegree);
    rotateBackground(rotationDegree);
  }
  if (arrowKeys.ArrowLeft === true) {
    const rotationDegree = angleIncrement('left');
    rotatePlanet(rotationDegree);
    rotateBackground(rotationDegree);
  }
};

export default rotateElements;
