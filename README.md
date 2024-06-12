# TermTint
TermTint (short for Terminal Tint) is a lightweight terminal coloring library that is easy to use and maintain.

# Usage
To use termtint, simply download termtint.js and place it is your working node.js directory. 
The following is an example of painting a string blue:
```javascript
const tint = require('./termtint.js');

const str = tint.blue('Hello, World!');

console.log(str);
process.stdout.write(str);
```

# Contributing 
I am always happy to have contributions to my project, if you have a contribution to make, please open a PR with your code changes! 
