import style from './main.css';
import runAnimation from './js/runAnimation';
import runTitle from './js/opening';
import displayPlanet from './js/canvas/planetCanvas';

// document.onload = runAnimation();
window.onload = () => {
  // runTitle();
  displayPlanet();
  runAnimation();
};


// document.onload =
