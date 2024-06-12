/*
 * A JavaScript console color library intended to make the 
 * job of coloring strings in the node console easier. 
 *
 * Author: Zachary Pedigo
 * Version: 0.0.1
 */

const tint = {
    colors: {
        FgBlack: "\x1b[30m",
        FgRed: "\x1b[31m",
        FgGreen: "\x1b[32m",
        FgYellow: "\x1b[33m",
        FgBlue: "\x1b[34m",
        FgMagenta: "\x1b[35m",
        FgCyan: "\x1b[36m",
        FgWhite: "\x1b[37m",
        FgGray: "\x1b[90m",

        BgBlack: "\x1b[40m",
        BgRed: "\x1b[41m",
        BgGreen: "\x1b[42m",
        BgYellow: "\x1b[43m",
        BgBlue: "\x1b[44m",
        BgMagenta: "\x1b[45m",
        BgCyan: "\x1b[46m",
        BgWhite: "\x1b[47m",
        BgGray: "\x1b[100m"
    },
    modes: {
        Reset: "\x1b[0m",
        Bright: "\x1b[1m",
        Dim: "\x1b[2m",
        Underscore: "\x1b[4m",
        Blink: "\x1b[5m",
        Reverse: "\x1b[7m",
        Hidden: "\x1b[8m"
    }
};

module.exports = {
    blue: (str) => {
        return `${pastel.colors.FgBlue}${str}${pastel.modes.Reset}`;   
    },
    red: (str) => {
        return `${pastel.colors.FgRed}${str}${pastel.modes.Reset}`;
    },
    green: (str) => {
        return `${pastel.colors.FgGreen}${str}${pastel.modes.Reset}`;
    },
    yellow: (str) => {
        return `${pastel.colors.FgYellow}${str}${pastel.modes.Reset}`;
    },
    magenta: (str) => {
        return `${pastel.colors.FgMagenta}${str}${pastel.modes.Reset}`;
    },
    cyan: (str) => {
        return `${pastel.colors.FgCyan}${str}${pastel.modes.Reset}`;
    },
    white: (str) => {
        return `${pastel.colors.FgWhite}${str}${pastel.modes.Reset}`;
    },
    gray: (str) => {
        return `${pastel.colors.FgGray}${str}${pastel.modes.Reset}`;
    },
    BgWhite: (str) => {
        return `${pastel.colors.BgWhite}${str}${pastel.modes.Reset}`;
    }
};

