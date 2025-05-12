/**
 * @fileoverview ESLint plugins to enforce the content of your code rather than form
 * @author 5cover
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import requireImport from './rules/require-import.js';
import pkg from '../package.json';
import type { ESLint } from 'eslint';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

export default {
    meta: {
        name: pkg.name,
        version: pkg.version,
    },
    rules: {
        'require-import': requireImport,
    },
} satisfies ESLint.Plugin;
