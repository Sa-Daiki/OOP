import { Tactics } from "./tactics";

export class Player {
  private name: string;
  private winCount = 0;
  private tactics?: Tactics;

  constructor(name: string) {
    this.name = name;
  }

  setTactics(tactics: Tactics) {
    this.tactics = tactics;
  }

  showHand() {
    if (this.tactics) return this.tactics.readTactics();
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
