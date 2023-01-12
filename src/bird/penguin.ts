import { Bird } from ".";

type Species = "african" | "black-footed" | "emperor";

export class Penguin extends Bird {
  species: Species;

  constructor(name: string, species: Species) {
    super(name);
    this.species = species;
  }

  walk() {
    console.log("penguin is walking");
  }
}
