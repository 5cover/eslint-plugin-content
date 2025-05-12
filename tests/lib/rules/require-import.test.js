import { RuleTester } from 'eslint';
import rule from '../../../lib/rules/require-import.js';

const tester = new RuleTester({
    languageOptions: {
        sourceType: 'module',
    },
});

tester.run('require-import', rule, {
    valid: [
        {
            code: "import 'my-cool-module';",
            options: [{ moduleName: 'my-cool-module' }],
        },
        {
            code: "import something from 'my-cool-module';",
            options: [{ moduleName: 'my-cool-module' }],
        },
        {
            code: `
import 'other-module';
import 'my-cool-module';
const x = 42;
        `,
            options: [{ moduleName: 'my-cool-module' }],
        },
    ],

    invalid: [
        {
            code: "import something from 'another-module';",
            options: [{ moduleName: 'required-module' }],
            errors: [
                {
                    messageId: 'missing',
                    data: { moduleName: 'required-module' },
                    type: 'Program',
                },
            ],
            output: "import 'required-module';\nimport something from 'another-module';",
        },
        {
            code: '',
            options: [{ moduleName: 'my-cool-module' }],
            errors: [
                {
                    messageId: 'missing',
                    data: { moduleName: 'my-cool-module' },
                    type: 'Program',
                },
            ],
            output: "import 'my-cool-module';\n",
        },
    ],
});
