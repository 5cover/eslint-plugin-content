import eslintjs from "@eslint/js";
import globals from "globals";
import tseslint, { type ConfigWithExtends } from "typescript-eslint";
import { includeIgnoreFile } from "@eslint/compat";
import path from "path";
export default [
    includeIgnoreFile(path.join(__dirname, '.gitignore')),
    eslintjs.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                projectService: true,
                tsconfigRootDir: __dirname,
            }
        }
    },
] satisfies ConfigWithExtends[];