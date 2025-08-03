/*
 * A JavaScript CLI coloring library intended to make the
 * job of coloring strings in the node console easier.
 *
 * Author: Zachary Pedigo
 * Version: 1.0.0-SNAPSHOT
 */

import ansi from "./ansi-styles/index.js";

const ANSI_START = '\x1b[';
const FG_DEFAULT = 39;
const BG_DEFAULT = 49;

/*
 * This function takes in a 'color' variable that is actually key-value pair.
 * The first value (key) is the opening ANSI code. The second (value) is the
 * closing ANSI code.
 *
 * @param {list} Key-value pair pulled from ansi-styles.
 * @return {function} function that returns ANSI colored string.
  */
const build = color => {
    if (color === undefined || color.length == 0) {
        console.error(`[ERROR]: Color array is undefined or has no values!`);
    }

    const open = color[0];
    const close = color[1];

    const openCode = open !== null && open !== "" ? `${ANSI_START}${open}m` : `${ANSI_START}${FG_DEFAULT}m`;
    const closeCode = close !== null && close !== "" ? `${ANSI_START}${close}m` : `${ANSI_START}${FG_DEFAULT}m`;

    return inputStr => {
        const result = `${openCode}${inputStr}${closeCode}`;
        return result;
    };
}

// foreground color exports
export const black = build(ansi.fgColors.black);
export const red = build(ansi.fgColors.red);
export const green = build(ansi.fgColors.green);
export const yellow = build(ansi.fgColors.yellow);
export const blue = build(ansi.fgColors.blue);
export const magenta = build(ansi.fgColors.magenta);
export const cyan = build(ansi.fgColors.cyan);
export const white = build(ansi.fgColors.white);
export const gray = build(ansi.fgColors.gray);

// background color exports
export const bgBlack = build(ansi.bgColors.bgBlack);
export const bgRed = build(ansi.bgColors.bgRed);
export const bgGreen = build(ansi.bgColors.bgGreen);
export const bgYellow = build(ansi.bgColors.bgYellow);
export const bgBlue = build(ansi.bgColors.bgBlue);
export const bgMagenta = build(ansi.bgColors.bgMagenta);
export const bgCyan = build(ansi.bgColors.bgCyan);
export const bgWhite = build(ansi.bgColors.bgWhite);
export const bgGray = build(ansi.bgColors.bgGray);
