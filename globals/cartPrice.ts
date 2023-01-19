import { atom } from "recoil";

export const cartPrice = atom({
  key: "cartPrice",
  default: 0 as number,
});
