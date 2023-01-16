export interface Tactics {
  readTactics: () => number;
}

export class RandomTactics implements Tactics {
  static STONE = 0;
  static SCISSORS = 1;
  static PAPER = 2;

  readTactics() {
    return Math.floor(Math.random() * 3);
  }
}
