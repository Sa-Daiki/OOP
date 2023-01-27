// 手札

import { Card } from "./Card";

export class Hand {
  private hand: Card[] = [];

  addCard(card: Card) {
    this.hand.push(card);
  }

  pickCard() {
    return this.hand.splice(0, 1)[0];
  }

  shuffle() {
    for (let i = this.hand.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.hand[i], this.hand[j]] = [this.hand[j], this.hand[i]];
    }
  }

  getNumberOfCards() {
    return this.hand.length;
  }

  findSameNumberCard() {
    const lastAddedCard = this.hand[this.hand.length - 1];
    const sameCardList = this.hand.filter((item) => item === lastAddedCard);
    this.hand = [
      ...new Set(this.hand),
      ...new Set(this.hand.filter((item) => item !== lastAddedCard)),
    ];
    return sameCardList;
  }

  showCard() {
    console.log(this.hand);
  }
}
