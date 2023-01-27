import { Hand } from "./Hand";
import { Player } from "./Player";

export class Master {
  private playerList: Player[] = [];

  prepareGame(cardList: Hand) {
    cardList.shuffle();
    const numberOfCards = cardList.getNumberOfCards();
    const numberOfPlayers = this.playerList.length;
    Array(numberOfCards).forEach((_, i) => {
      const card = cardList.pickCard();
      const player = this.playerList[i % numberOfPlayers];
      player.receiveCard(card);
    });
  }

  startGame() {
    console.log("ババ抜きを開始します");
  }

  declareWin(winner: Player) {
    console.log(`${winner}さんが上がりました`);
    this.playerList.splice(this.playerList.indexOf(winner), 1);
    if (this.playerList.length === 1)
      console.log(`${this.playerList[0]}さんの負けです！`);
  }

  registerPlayer(player: Player) {
    this.playerList.push(player);
  }
}
