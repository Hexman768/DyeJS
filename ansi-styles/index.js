/* Styles to be used by the other builder class */

const styles = {
  fgColors: {
    black:   [30, 39],
    red:     [31, 39],
    green:   [32, 39],
    yellow:  [33, 39],
    blue:    [34, 39],
    magenta: [35, 39],
    cyan:    [36, 39],
    white:   [37, 39],
    gray:    [90, 39]
  },
  bgColors: {
    bgBlack:   [40, 49],
    bgRed:     [41, 49],
    bgGreen:   [42, 49],
    bgYellow:  [43, 49],
    bgBlue:    [44, 49],
    bgMagenta: [45, 49],
    bgCyan:    [46, 49],
    bgWhite:   [47, 49],
    bgGray:    [100, 49]
  },
  modifiers: {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  }
}

function buildStyles() {
  for (const [groupname, group] of Object.entries(styles)) {
    for (const [stylename, style] of Object.entries(group)) {
      styles[stylename] = {
        open: `\x1b[${style[0]}m`,
        close: `\x1b[${style[1]}m`,
        openCode: `${style[0]}`,
        closeCode: `${style[1]}`
      };
    }
  }

  styles.fgColors.close = '\x1b[39m';
  styles.bgColors.close = '\x1b[49m';

  return styles;
}

const ansistyles = buildStyles();

export default ansistyles;
