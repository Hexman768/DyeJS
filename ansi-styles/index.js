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
    Reset: "\x1b[0m",
    Bold: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m"
  }
}

export default styles;
