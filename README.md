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

## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->
