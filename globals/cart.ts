import { atom } from "recoil";

export const cart = atom({
  key: "cart",
  default: [] as String[],
});
