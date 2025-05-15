/**
 * @fileoverview Enforce importing a specific module
 * @author 5cover
 */

import type { Rule } from 'eslint';

export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'require an import from a particular module',
            recommended: false,
            url: 'https://github.com/5cover/eslint-plugin-content/blob/main/docs/rules/@5cover/require-import.md',
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    moduleName: {
                        type: 'string',
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            missing: "Missing import for module '{{moduleName}}'.",
        },
    },
    create(context) {
        const option = (context.options as Record<string, unknown>[])[0];
        const moduleName = option?.moduleName;
        if (typeof moduleName !== 'string' || moduleName.length === 0) {
            // If the rule isn't configured correctly, don't do anything.
            return {};
        }

        let hasImport = false;

        return {
            ImportDeclaration(node) {
                if (node.source.value === moduleName) {
                    hasImport = true;
                }
            },

            // At the end of the file, if we never saw the import, report it.
            'Program:exit'(programNode) {
                if (!hasImport) {
                    context.report({
                        loc: {
                            line: 1,
                            column: 0
                        },
                        messageId: 'missing',
                        data: { moduleName },
                        fix(fixer) {
                            const importStatement = `import '${moduleName}';\n`;
                            return fixer.insertTextBefore(programNode, importStatement);
                        },
                    });
                }
            },
        };
    },
} satisfies Rule.RuleModule;
