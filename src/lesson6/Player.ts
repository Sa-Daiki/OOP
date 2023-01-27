import { Card } from "./Card";
import { Hand } from "./Hand";
import { Master } from "./Master";
import { Table } from "./Table";

export class Player {
  private master: Master;
  private table: Table;
  private myHand = new Hand();
  private name: string;

  constructor(master: Master, table: Table, name: string) {
    this.master = master;
    this.table = table;
    this.name = name;
  }

  play(nextPlayer: Player) {
    const nextHand = nextPlayer.showHand();
    const pickedCard = nextHand.pickCard();
    console.log(`${nextPlayer}から${pickedCard}を引きました`);
    this.dealCard(pickedCard);
    if (this.myHand.getNumberOfCards() === 0) {
      this.master.declareWin(this);
      return;
    }
    console.log(`残りの手札は${this.myHand.getNumberOfCards()}枚です。`);
  }

  showHand() {
    if (this.myHand.getNumberOfCards() === 1) {
      this.master.declareWin(this);
    }
    this.myHand.shuffle();
    return this.myHand;
  }

  receiveCard(card: Card) {
    this.dealCard(card);
  }

  private dealCard(card: Card) {
    this.myHand.addCard(card);
    const sameCardList = this.myHand.findSameNumberCard();
    if (sameCardList.length) {
      this.table.disposeCard(sameCardList);
    }
  }

  getName() {
    return this.name;
  }
}
