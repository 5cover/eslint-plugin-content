/**
 * @fileoverview ESLint plugins to enforce the content of your code rather than form
 * @author 5cover
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import requireImport from './rules/require-import.js';
import pkg from '../package.json' with { type: 'json' };

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
export default {
    meta: {
        name: pkg.name,
        version: pkg.version,
    },
    rules: {
        [rulename('require-import')]: requireImport,
    },
};

function rulename(name) {
    return `@${pkg.author}/${name}`;
}
