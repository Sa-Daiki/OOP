export interface Tactics {
  readTactics: () => number;
}

export class RandomTactics implements Tactics {
  static STONE = 0;
  static SCISSORS = 1;
  static PAPER = 2;

  readTactics() {
    return Math.floor(Math.random() * 3);
  }
}

interface Car {
  drive: () => void;
}

class ModelX implements Car {
  drive() {
    console.log("x");
  }
}

class ModelY implements Car {
  drive() {
    console.log("y");
  }
}

class ModleS implements Car {
  drive() {
    console.log("s");
  }
}
