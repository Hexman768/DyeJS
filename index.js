import {bgRed, blue, green, yellow, red, black, white, magenta} from "./dye.js";
import dye from './dye.js';

console.log(blue("Hello, World!"));
console.log(green("Hello, World!"));
console.log(yellow("Hello, World!"));
console.log(red("Hello, World!"));
console.log(white("Hello, World!"));
console.log(magenta("Hello, World!"));
console.log(black("Hello, World!"));


console.log(bgRed(blue("Hello, World!")));

console.log(dye.green.blink.bgBlack('Hello, World!'));
