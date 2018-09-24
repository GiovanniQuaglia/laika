import arrowKeys from './keysTracking';
import rotateElements from './movement/rotateElements';
import actionsYearHandler from './actions/actionsHandler';
import displayPlayer from './canvas/playerCanvas';


const runAnimation = () => {
  displayPlayer(arrowKeys);
  rotateElements(arrowKeys);
  actionsYearHandler(arrowKeys);
  requestAnimationFrame(runAnimation);
};

export default runAnimation;
