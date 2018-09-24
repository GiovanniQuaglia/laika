export default class Actions {
  constructor(angle) {
    this.angle = angle;
    this.speach = 'ciao amico mio';
    this.swear = 'porca vacca';
  }

  talk() {
    console.log(this.speach);
  }

  letSwear() {
    console.log(this.cazzo);
  }
}
