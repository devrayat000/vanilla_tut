import { something } from "./third.js";

console.log("This is another module");
console.log(something);

export function multiply(a, b) {
  return a * b;
}
