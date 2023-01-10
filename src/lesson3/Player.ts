export class Player {
  static STONE: number = 0;
  static SCISSORS: number = 1;
  static PAPER: number = 2;

  private name: string;
  private winCount = 0;

  constructor(name: string) {
    this.name = name;
  }

  showHand() {
    const hand = Math.random() * 3;
    if (hand < 1) return Player.STONE;
    if (hand < 2) return Player.SCISSORS;
    return Player.PAPER;
  }
  notifyResult(result: boolean) {
    if (result) this.winCount += 1;
  }
  getWinCount() {
    return this.winCount;
  }
  getName() {
    return this.name;
  }
}
