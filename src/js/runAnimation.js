import rotateElements from './movement/rotateElements';
import actionsYearHandler from './actions/actionsHandler';
import displayPlayer from './canvas/playerCanvas';
import animateDisplayedElements from './canvas/animateDisplayedElements';
import './keysTracking';
import './actions/yearSelectorHandler';

let lastFrameTimeMs = 0;
const maxFPS = 60;
let delta = 0;
const timestep = 1000 / 40;
let fps = 60;
let framesThisSecond = 0;
let lastFpsUpdate = 0;
let frameID = 0;

function update() {
  rotateElements();
  actionsYearHandler();
  displayPlayer();
  animateDisplayedElements(framesThisSecond);
}

function panic() {
  delta = 0;
}

function mainLoop(timestamp) {
  if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
    frameID = requestAnimationFrame(mainLoop);
    return;
  }
  delta += timestamp - lastFrameTimeMs;
  lastFrameTimeMs = timestamp;

  if (timestamp > lastFpsUpdate + 1000) {
    fps = 0.25 * framesThisSecond + 0.75 * fps;

    lastFpsUpdate = timestamp;
    framesThisSecond = 0;
  }
  framesThisSecond += 1;

  let numUpdateSteps = 0;
  while (delta >= timestep) {
    update(timestep);
    delta -= timestep;
    if (++numUpdateSteps >= 240) {
      panic();
      break;
    }
  }
  frameID = requestAnimationFrame(mainLoop);
}

function runGame() {
  frameID = requestAnimationFrame((timestamp) => {
    displayPlayer();
    lastFrameTimeMs = timestamp;
    lastFpsUpdate = timestamp;
    framesThisSecond = 0;
    frameID = requestAnimationFrame(mainLoop);
  });
}

runGame();

export default runGame;
