export class Player {
  private name: string;
  private winCount = 0;

  constructor(name: string) {
    this.name = name;
  }

  showHand() {
    return Math.floor(Math.random() * 3);
  }
  notifyResult() {
    this.winCount += 1;
  }
  getWinCount() {
    return this.winCount;
  }
  getName() {
    return this.name;
  }
}
