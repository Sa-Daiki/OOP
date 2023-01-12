import { Flyable } from "./flyable";

export class Airplane implements Flyable {
  from: string;
  to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  fly() {
    console.log(`この飛行機は${this.from}発${this.to}行きです`);
  }
}
