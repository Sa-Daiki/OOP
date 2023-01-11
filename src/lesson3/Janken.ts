import { Player } from "./Player";

export class Janken {
  STONE = 0;
  SCISSORS = 1;
  PAPER = 2;

  startJanken(player1: Player, player2: Player) {
    for (let i = 0; i < 3; i++) {
      const winner = this.judgeJanken(player1, player2);
      if (winner) {
        winner.notifyResult();
      }
      if (!winner) {
      }
    }

    const finalWinner = this.judgeFinalWinner(player1, player2);

    if (finalWinner) {
      return;
    }
  }

  private judgeJanken(player1: Player, player2: Player) {
    const hand1 = player1.showHand();
    const hand2 = player2.showHand();

    if (hand1 === this.STONE) {
      if (hand2 === this.STONE) return null;
      if (hand2 === this.SCISSORS) return player1;
      return player2;
    }
    if (hand1 === this.SCISSORS) {
      if (hand2 === this.STONE) return player2;
      if (hand2 === this.SCISSORS) return null;
      return player1;
    }
    if (hand2 === this.STONE) return player1;
    if (hand2 === this.SCISSORS) return player2;
    return null;
  }

  private judgeFinalWinner(player1: Player, player2: Player) {
    if (player2.getWinCount() < player1.getWinCount()) return player1;
    if (player1.getWinCount() < player2.getWinCount()) return player2;
    return null;
  }
}
