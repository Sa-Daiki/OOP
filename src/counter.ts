import { Airplane } from "./task1/airplane";
import { FlyingMuseum } from "./task1/flyingMuseum";
import { Sparrow } from "./task1/sparrow";
import { Judge, Player } from "./lesson3";
import { RandomTactics } from "./lesson3/tactics";

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);

  const judge = new Judge();
  const taro = new Player("taro");
  const jiro = new Player("jiro");

  taro.setTactics(new RandomTactics());
  jiro.setTactics(new RandomTactics());

  judge.startJanken(taro, jiro);

  const tyunta = new Sparrow("チュン太", 2);
  const jall = new Airplane("日本", "アメリカ");
  FlyingMuseum.discover(tyunta);
  FlyingMuseum.discover(jall);
}
