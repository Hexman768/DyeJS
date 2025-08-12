# DyeJS
DyeJS (Terminal Dye) is a lightweight and performant ANSI terminal coloring library that is super easy to use, and provides different methods for use!

# Usage
To use DyeJS, simply download dye.js, place it is your working node.js directory, and perform the steps in one of the following guides. 

DyeJS can be used in multiple ways, below is an example of the function chaining method of utilization:

```javascript
import dye from './dye.js';

const str = dye.blue.bold.bgGreen('Hello, World!');

console.log(str);
```

Here is an example of importing option for using DyeJS:
```
import { bgGreen, blue, bold } from './dye.js';

console.log(blue(bold(bgGreen('Hello, World!'))));
```

# Contributing 
I am always happy to have contributions to my project, if you have a contribution to make, please open a PR with your code changes! 
