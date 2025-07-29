/*
 * A JavaScript CLI coloring library intended to make the
 * job of coloring strings in the node console easier.
 *
 * Author: Zachary Pedigo
 * Version: 0.0.2-SNAPSHOT
 */

import ansi from "./ansi-styles/index.js";

// create object for later
const styles = Object.create(null);

// test message TODO: remove this
const message = "Hello, World!";
//console.log(`${ansi.fgColors.blue}${message}`);


// actual behavior
for (const [stylename, style] of Object.entries(ansi)) {
    //console.log("Stylename: " + stylename);
    //console.log("Style: " + style);
    //console.log("Code: " + code);
}

// returns the assembled style that can be prepended to a string
function assembleStyle(open, close) {
    return `x1b[${open};${close}m`
}

// color exports
export const blue = assembleStyle(ansi.fgColors.blue[0], ansi.fgColors.blue[1]);

//console.log(`${styles.blue}Hello, World!`);
