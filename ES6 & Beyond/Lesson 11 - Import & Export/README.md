# Lesson 11 - Import & Export

Import and Export are modern ES6 standard that enables modularity of a program.

## Import

Importing data between files, can be achieved by using the `import` keyword.

#### Example

```js
// index.js

import { data } from "./example";

console.log(data);
```

## Export

Exporting data between files, can be achieved by using the `export` keyword.

#### Example

```js
// ./example.js

export const data = [1, 2, 3];
```
