export class Bird {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  cry() {
    {
      console.log(`${this.name}が泣いたよ`);
    }
  }
}
