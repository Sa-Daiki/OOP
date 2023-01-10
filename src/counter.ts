import { Judge, Player } from "./lesson3";

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
  const judge = new Judge();
  judge.startJanken(taro, jiro);
}
