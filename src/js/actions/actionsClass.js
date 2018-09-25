let isActionRunning;

export default class Action {
  constructor(angle, textBox, arrowKeys) {
    this.angle = angle;
    this.speach = 'ciao amico mio';
    this.textBox = textBox;
    this.arrowKeys = arrowKeys;
    this.isActionRunning = isActionRunning;
  }

  talk() {
    isActionRunning = true;
    this.textBox.innerHTML = 'Привет!';
    if (this.arrowKeys.ArrowDown === true
      || this.arrowKeys.ArrowLeft === true
      || this.arrowKeys.ArrowRight === true) {
      this.textBox.innerHTML = '';
      isActionRunning = false;
    }
  }

  swear() {
    isActionRunning = true;
    this.textBox.innerHTML = 'What should I do?';
    if (this.arrowKeys.ArrowDown === true
      || this.arrowKeys.ArrowLeft === true
      || this.arrowKeys.ArrowRight === true) {
      this.textBox.innerHTML = '';
      isActionRunning = false;
    }
  }
}
