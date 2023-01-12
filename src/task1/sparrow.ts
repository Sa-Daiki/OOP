import { Bird } from "./bird";
import { Flyable } from "./flyable";

export class Sparrow extends Bird implements Flyable {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}
