import {
  planetFront, planetBack, background,
} from '../display/elements';
import { angleIncrement } from './angleIncrement';

const rotatePlanet = (rotationDegree) => {
  planetFront.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
  planetBack.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
  background.style.transform = `rotate(${rotationDegree}deg)`;
};

const rotateElements = (arrowKeys) => {
  if (arrowKeys.ArrowRight === true) {
    const rotationDegree = angleIncrement();
    rotatePlanet(rotationDegree);
  }
  if (arrowKeys.ArrowLeft === true) {
    const rotationDegree = angleIncrement('left');
    rotatePlanet(rotationDegree);
  }
};

export default rotateElements;
