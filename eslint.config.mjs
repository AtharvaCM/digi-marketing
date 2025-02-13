import typescriptEslint from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules', '**/.next'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@sanity/eslint-config-studio',
    'prettier',
    'next',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      'no-console': [
        'warn',
        {
          allow: ['info', 'error'],
        },
      ],

      quotes: ['error', 'single'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': 'off',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: 'ctx|args|req|res|next|^_',
        },
      ],

      '@typescript-eslint/no-empty-interface': 'off',
    },
  },
];
