## DyeJS
DyeJS (Terminal Dye) is a lightweight and performant ANSI terminal coloring library that is super easy to use, and provides different methods for use!

## Usage
To use DyeJS, simply download dye.js, place it is your working node.js directory, and perform the steps in one of the following guides. 

DyeJS can be used in multiple ways, below is an example of the function chaining method of utilization:

```javascript
import dye from './dye.js';

const str = dye.blue.bold.bgGreen('Hello, World!');

console.log(str);
```

Styles can also be imported individually to save time typing repeated function calls!
```javascript
import { bgGreen, blue, bold } from './dye.js';

console.log(blue(bold(bgGreen('Hello, World!'))));
```

## API
### dye.`<style>[.<style>...](string...)`
DyeJS works much in the same way Chalk does, allowing you to chain styles together on the same line!

Example: `dye.blue.underline.bgYellow('Hello, World!');`

If two styles of the same level, (e.g. multiple foreground colors) are called in the same chain, the last color in the chain takes precedent and will be reflected in the console.

For example: `console.log(dye.blue.green('Hello, World!'));` would result in green letters printed to the console.

### import
Styles can also be imported individually for situations where the same style is going to be used multiple times in the same file or class.

Every style in DyeJS is exported for use in outside projects.

Example:
```javascript
import { blue, bold } from './dye.js'

console.log(blue(bold('Hello, World!')));
```

## Contributing 
I am always happy to have contributions to my project, if you have a contribution to make, please open a PR with your code changes!
