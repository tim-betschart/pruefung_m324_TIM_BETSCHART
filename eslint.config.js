import globals from 'globals'
import pluginJs from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended, {
        rules: {
            // Aktiviert die Regel für ungenutzte Variablen
            'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],

            // Erzwingt die Verwendung von const, wenn Variablen nicht neu zugewiesen werden
            'prefer-const': 'error',

            // Erzwingt die Verwendung von `===` und `!==` anstelle von `==` und `!=`
            'eqeqeq': ['error', 'always'],
        },
    }
]
