let angle = 0;

const angleLoop = () => {
  if (angle > 360) {
    angle %= 360;
  }
  if (angle < 0) {
    angle = 360 - angle;
  }
  return angle;
};

const angleIncrement = (direction) => {
  const rotationSpeed = 1.5;
  angle = direction === 'left' ? angle += rotationSpeed : angle -= rotationSpeed;
  return angleLoop();
};

export { angleIncrement, angle };
