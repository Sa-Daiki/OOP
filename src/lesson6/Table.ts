import { Card } from "./Card";

export class Table {
  private disposedCard: Card[] = [];

  disposeCard(cardList: Card[]) {
    cardList.forEach((card) => {
      console.log(`${card}を捨てます`);
      this.disposedCard.push(card);
    });
  }
}
