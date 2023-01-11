export const Janken = {
  STONE: 0,
  SCISSORS: 1,
  PAPER: 2,
  DRAW: 3,
} as const;
export type Janken = ValueOf<typeof Janken>;

type ValueOf<T> = T[keyof T];
