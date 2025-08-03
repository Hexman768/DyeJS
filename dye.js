/*
 * A JavaScript CLI coloring library intended to make the
 * job of coloring strings in the node console easier.
 *
 * Author: Zachary Pedigo
 * Version: 0.0.2-SNAPSHOT
 */

import ansi from "./ansi-styles/index.js";

const ANSI_START = '\x1b[';
const FG_DEFAULT = 39;
const BG_DEFAULT = 49;

// returns the assembled style that can be prepended to a string
const constructStyle = (str, open, close) => {
    const openCode = open != null && open !== "" ? `\x1b[${open}m` : '';
    const closeCode = close != null && close !== "" ? `\x1b[${close}m` :
        `${ANSI_START}${FG_DEFAULT}m`;

    const result = `${openCode}${str}${closeCode}`;

    console.log(`Result string: ${result}`);

    return result;
    //return openCode + str + `\x1b[${close}m`;
}

function build(open, close) {
    const openCode = open !== null && open !== "" ? `\x1b[${open}m` : `${ANSI_START}${FG_DEFAULT}`;
    const closeCode = close !== null && close !== "" ? `\x1b[${close}` : `${ANSI_START}${FG_DEFAULT}`;
    return function (str) {
        return `${openCode}${str}${closeCode}`;
    };
}

// foreground color exports
export const black = (arg) => constructStyle(arg, ansi.fgColors.black[0]);
export const red = (arg) => constructStyle(arg, ansi.fgColors.red[0]);
export const green = (arg) => constructStyle(arg, ansi.fgColors.green[0]);
export const yellow = (arg) => constructStyle(arg, ansi.fgColors.yellow[0]);
export const blue = test(ansi.fgColors.blue[0], ansi.fgColors.blue[1]);
export const magenta = (arg) => constructStyle(arg, ansi.fgColors.magenta[0]);
export const cyan = (arg) => constructStyle(arg, ansi.fgColors.cyan[0]);
export const white = (arg) => constructStyle(arg, ansi.fgColors.white[0]);
export const gray = (arg) => constructStyle(arg, ansi.fgColors.gray[0]);

// background color exports
export const bgBlack = (arg) => constructStyle(arg, ansi.bgColors.bgBlack[0], ansi.bgColors.bgBlack[1]);
export const bgRed = (arg) => constructStyle(arg, ansi.bgColors.bgRed[0], ansi.bgColors.bgRed[1]);
