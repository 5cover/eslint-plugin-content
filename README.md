# eslint-plugin-content

ESLint plugins to enforce the content of your code rather than form

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-content`:

```sh
npm install eslint-plugin-content --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-content` and add `content` to the `plugins` key:

```js
import content from "eslint-plugin-content";

export default [
    {
        plugins: {
            content
        }
    }
];
```

Then configure the rules you want to use under the `rules` key.

```js
import content from "eslint-plugin-content";

export default [
    {
        plugins: {
            content
        },
        rules: {
            "content/rule-name": "warn"
        }
    }
];
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                           | Description                                | 🔧 |
| :------------------------------------------------------------- | :----------------------------------------- | :- |
| [@5cover/require-import](docs/rules/@5cover/require-import.md) | require an import from a particular module | 🔧 |

<!-- end auto-generated rules list -->
