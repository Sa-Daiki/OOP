export class Card {
  static JOKER = 0;
  static SPADE = 1;
  static DIAMOND = 2;
  static CLUB = 3;
  static HEART = 4;

  private suit: number;
  private num: number;

  constructor(suit: number, num: number) {
    this.suit = suit;
    this.num = num;
  }

  getNumber() {
    return this.num;
  }

  getCard() {
    return `${this.suit} ${this.num}`;
  }
}
