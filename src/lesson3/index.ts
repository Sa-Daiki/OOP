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

export class Judge {
  startJanken(player1: Player, player2: Player) {
    for (let i = 0; i < 3; i++) {
      const winner = this.judgeJanken(player1, player2);
      if (winner) {
        console.log(`${winner}が勝ちました`);
        return;
      }
      console.log("引き分けです");
    }
    console.log("ジャンケン終了");
    const finalWinner = this.judgeFinalWinner(player1, player2);
    console.log(`${player1.getWinCount()}対${player2.getWinCount()}で`);
    if (finalWinner) {
      console.log(`${finalWinner.getName()}の勝ち`);
      return;
    }
    console.log("引き分け");
  }

  private judgeJanken(player1: Player, player2: Player) {
    const hand1 = player1.showHand();
    const hand2 = player2.showHand();
    if (hand1 === Player.STONE) {
      if (hand2 === Player.STONE) return null;
      if (hand2 === Player.SCISSORS) return player1;
      return player2;
    }
    if (hand1 === Player.SCISSORS) {
      if (hand2 === Player.STONE) return player2;
      if (hand2 === Player.SCISSORS) return null;
      return player1;
    }
    if (hand1 === Player.PAPER) {
      if (hand2 === Player.STONE) return player1;
      if (hand2 === Player.SCISSORS) return player2;
      return null;
    }
  }

  private judgeFinalWinner(player1: Player, player2: Player) {
    if (player2.getWinCount() < player1.getWinCount()) return player1;
    if (player1.getWinCount() < player2.getWinCount()) return player2;
    return null;
  }
}
