import arrowKeys from './keysTracking';
import rotateElements from './movement/rotateElements';
import actionsYearHandler from './actions/actionsHandler';
import displayPlayer from './canvas/playerCanvas';


let lastFrameTimeMs = 0,
maxFPS = 60,
delta = 0,
timestep = 1000 / 60,
fps = 60,
framesThisSecond = 0,
lastFpsUpdate = 0,
frameID = 0;

function update(delta) {
  rotateElements(arrowKeys, delta);
  actionsYearHandler(arrowKeys);
}


function panic() {
    delta = 0;
}

// function begin() {
// }

function runGame() {
  frameID = requestAnimationFrame(function(timestamp) {
    displayPlayer(arrowKeys);
    lastFrameTimeMs = timestamp;
    lastFpsUpdate = timestamp;
    framesThisSecond = 0;
    frameID = requestAnimationFrame(mainLoop);
  });
}

function mainLoop(timestamp) {
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        frameID = requestAnimationFrame(mainLoop);
        return;
    }
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    // begin(timestamp, delta);

    if (timestamp > lastFpsUpdate + 1000) {
        fps = 0.25 * framesThisSecond + 0.75 * fps;

        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;

    let numUpdateSteps = 0;
    while (delta >= timestep) {
        update(timestep);
        delta -= timestep;
        if (++numUpdateSteps >= 240) {
            panic();
            break;
        }
    }

    displayPlayer(arrowKeys);
    frameID = requestAnimationFrame(mainLoop);
}

runGame();







// const runAnimation = () => {
//   displayPlayer(arrowKeys);
//   rotateElements(arrowKeys);
//   actionsYearHandler(arrowKeys);
//   requestAnimationFrame(runAnimation);
// };

export default runGame;
