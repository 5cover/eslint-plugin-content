# Require an import from a particular module (`@5cover/content/@5cover/require-import`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Enforces that a specific module is always imported in your files. If the import is missing, ESLint will report an error and can automatically insert the import statement at the top of the file.

## Overview

* **Rule name**: `require-import/require-import`
* **Type**: problem
* **Fixable**: yes (`code`)
* **Configuration**: requires a single option, `moduleName`

## Options

<!-- begin auto-generated rule options list -->

| Name         | Type   |
| :----------- | :----- |
| `moduleName` | String |

<!-- end auto-generated rule options list -->

Example:

```json
{
  "rules": {
    "require-import/require-import": [
      "error",
      {
        "moduleName": "my-cool-module"
      }
    ]
  }
}
```

## Usage

1. Install your plugin (or include the rule in your project):

   ```bash
   npm install --save-dev eslint-plugin-require-import
   ```

2. Update your ESLint config (`.eslintrc.js` or `.eslintrc.json`):

   ```js
   // .eslintrc.js
   module.exports = {
     plugins: ["require-import"],
     rules: {
       "require-import/require-import": [
         "error",
         { moduleName: "my-cool-module" }
       ]
     }
   };
   ```

## Examples

### Correct

```js
// With the required import present

import 'my-cool-module';
import React from 'react';
import { helper } from './utils';

// rest of your code...
```

### Incorrect

```js
// Missing the required import

import React from 'react';
import { helper } from './utils';

// rest of your code...
```

*Error:*

```text
error  Missing import for module 'my-cool-module'.  require-import/require-import
```

## Auto-fix

When run with `--fix`, the rule will insert the missing import at the very top of the file:

```diff
+ import 'my-cool-module';

  import React from 'react';
  import { helper } from './utils';
  
  // rest of your code...
```

## Implementation Details

The rule scans all `ImportDeclaration` nodes for the configured `moduleName`. On exit of the `Program` node, if no matching import was found, it reports an error and provides a fixer callback that inserts:

```js
import '<moduleName>';
```

at the top of the file.

## When to use

* You have a shared side-effecting module (e.g. polyfills, global styles, setup files) that **must** be included in every file.
* You want to guarantee certain setup imports (e.g. test utilities, global types) are never omitted.
