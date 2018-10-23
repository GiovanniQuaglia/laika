import {
  planetFront, planetBack, background,
} from '../domElements/createDomElements';
import angleIncrement from './angleIncrement';
import state from '../state/state';

const rotatePlanet = (rotationDegree) => {
  planetFront.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
  planetBack.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
  // background.style.transform = `rotate(${rotationDegree}deg)`;
};

const rotateElements = () => {
  if (state.arrowKeys.ArrowRight === true) {
    const rotationDegree = angleIncrement();
    rotatePlanet(rotationDegree);
  }
  if (state.arrowKeys.ArrowLeft === true) {
    const rotationDegree = angleIncrement('left');
    rotatePlanet(rotationDegree);
  }
};

export default rotateElements;
