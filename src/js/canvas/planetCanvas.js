import asteroidFrontImg from '../../images/asteroidFront_600.png';
import asteroidBackImg from '../../images/asteroidBack_600.png';

const asteroidFront = new Image();
asteroidFront.src = asteroidFrontImg;
const ctxFront = document.getElementById('planetFront').getContext('2d');

const asteroidBack = new Image();
asteroidBack.src = asteroidBackImg;
const ctxBack = document.getElementById('planetBack').getContext('2d');

const displayPlanet = () => {
  ctxBack.drawImage(asteroidBack, 0, 0);
  ctxFront.drawImage(asteroidFront, 0, 0);
};

export default displayPlanet;
