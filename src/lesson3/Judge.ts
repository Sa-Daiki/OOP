import { Janken } from "./Janken";
import { Player } from "./Player";

export const startJanken = (player1: Player, player2: Player) => {
  for (let i = 0; i < 3; i++) {
    const winner = judgeJanken(player1, player2);
    if (winner) {
      winner.notifyResult();
      console.log(`${winner.getName()}が勝ちました`);
    }
    if (!winner) {
      console.log("引き分けです");
    }
  }
  console.log("ジャンケン終了");

  const finalWinner = judgeFinalWinner(player1, player2);
  console.log(`${player1.getWinCount()}対${player2.getWinCount()}で`);
  if (finalWinner) {
    console.log(`${finalWinner.getName()}の勝ち`);
    return;
  }
  console.log("引き分け");
};

const judgeJanken = (player1: Player, player2: Player) => {
  const hand1 = player1.showHand();
  const hand2 = player2.showHand();

  if (hand1 === Janken.STONE) {
    if (hand2 === Janken.STONE) return null;
    if (hand2 === Janken.SCISSORS) return player1;
    return player2;
  }
  if (hand1 === Janken.SCISSORS) {
    if (hand2 === Janken.STONE) return player2;
    if (hand2 === Janken.SCISSORS) return null;
    return player1;
  }
  if (hand2 === Janken.STONE) return player1;
  if (hand2 === Janken.SCISSORS) return player2;
  return null;
};

const judgeFinalWinner = (player1: Player, player2: Player) => {
  if (player2.getWinCount() < player1.getWinCount()) return player1;
  if (player1.getWinCount() < player2.getWinCount()) return player2;
  return null;
};
