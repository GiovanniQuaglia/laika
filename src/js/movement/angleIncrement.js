import state from '../state/state';

const angleLoop = () => {
  if (state.angle > 360) {
    state.angle %= 360;
  }
  if (state.angle < 0) {
    state.angle = 360 - state.angle;
  }
  return state.angle;
};

const angleIncrement = (direction) => {
  const rotationSpeed = 1.5;
  state.angle = direction === 'left' ? state.angle += rotationSpeed : state.angle -= rotationSpeed;
  return angleLoop();
};

export default angleIncrement;
