/*
 * A JavaScript CLI coloring library intended to make the
 * job of coloring strings in the node console easier.
 *
 * Author: Zachary Pedigo
 * Version: 0.0.2-SNAPSHOT
 */

import ansi from "./ansi-styles/index.js";

// returns the assembled style that can be prepended to a string
const assembleStyle = (str, open) => {
    const openCode = `\x1b[${open}m`
    return openCode + str;
}

// color exports
export const blue = (arg) => assembleStyle(arg, ansi.fgColors.blue[0]);
export const green = (arg) => assembleStyle(arg, ansi.fgColors.green[0]);

//console.log(`${styles.blue}Hello, World!`);
