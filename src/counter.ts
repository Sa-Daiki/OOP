import { Airplane } from "./bird/airplane";
import { FlyingMuseum } from "./bird/flyingMuseum";
import { Sparrow } from "./bird/sparrow";
import { Janken, Player } from "./lesson3";

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);

  const taro = new Player("taro");
  const jiro = new Player("jiro");
  const janken = new Janken();
  janken.startJanken(taro, jiro);

  const tyunta = new Sparrow("チュン太", 2);
  const jall = new Airplane("日本", "アメリカ");
  FlyingMuseum.discover(tyunta);
  FlyingMuseum.discover(jall);
}
