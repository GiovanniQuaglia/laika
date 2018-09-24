import arrowKeys from './keysTracking';
import rotateElements from './movement/rotateElements';
import actionsHandler from './actions/actionsHandler';
import displayPlayer from './canvas/playerCanvas';


const runAnimation = () => {
  displayPlayer(arrowKeys);
  rotateElements(arrowKeys);
  actionsHandler(arrowKeys);
  requestAnimationFrame(runAnimation);
};

export default runAnimation;
