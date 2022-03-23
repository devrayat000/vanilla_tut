import { multiply } from "./another.js";
import { exp1 as exp2, fun2 as fun3, something } from "./exports/named.js";
import expDef23 from "./exports/default.js";

console.log("This is a js module");
const exp1 = "jaijdaf";
console.log(multiply(4, 5));

expDef23();
