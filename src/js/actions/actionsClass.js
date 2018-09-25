let isActionRunning;

export default class Action {
  constructor(angle, textSpan, arrowKeys) {
    this.angle = angle;
    this.speach = 'ciao amico mio';
    this.textSpan = textSpan;
    this.arrowKeys = arrowKeys;
    this.isActionRunning = isActionRunning;
  }

  talk() {
    isActionRunning = true;
    this.textSpan.innerHTML = 'Привет!';
    if (this.arrowKeys.ArrowDown === true
      || this.arrowKeys.ArrowLeft === true
      || this.arrowKeys.ArrowRight === true) {
      this.textSpan.innerHTML = '';
      isActionRunning = false;
    }
  }

  swear() {
    isActionRunning = true;
    this.textSpan.innerHTML = 'What should I do?';
    if (this.arrowKeys.ArrowDown === true
      || this.arrowKeys.ArrowLeft === true
      || this.arrowKeys.ArrowRight === true) {
      this.textSpan.innerHTML = '';
      isActionRunning = false;
    }
  }
}
