import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import sonarJsPlugin from 'eslint-plugin-sonarjs';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import ts from 'typescript-eslint';

const typescriptConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    extends: [ts.configs.strictTypeChecked],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        // NOTE: projectService must be true if strictTypeChecked config is used
        projectService: true,
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unnecessary-type-conversion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-misused-spread': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-useless-default-assignment': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/prefer-literal-enum-member': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // NOTE: Disable TypeScript Config for JavaScript Files to avoid conflicts
  {
    files: ['**/*.{cjs,mjs,js}'],
    extends: [ts.configs.disableTypeChecked],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

const sonarJsConfig = [
  {
    extends: [sonarJsPlugin.configs.recommended],
    rules: {
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/prefer-immediate-return': 'off',
      'sonarjs/no-commented-code': 'off',
      'sonarjs/todo-tag': 'off',
      'sonarjs/function-return-type': 'off',
      'sonarjs/redundant-type-aliases': 'off',
      'sonarjs/different-types-comparison': 'off',
      'sonarjs/no-nested-conditional': 'off',
      'sonarjs/no-nested-functions': 'off',
      'sonarjs/no-globals-shadowing': 'off',
      'sonarjs/concise-regex': 'off',
    },
  },
];

const importConfig = {
  extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
  rules: {
    'import/default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};

const unusedImportsConfig = {
  plugins: {
    'unused-imports': unusedImportsPlugin,
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

const promiseConfig = {
  extends: [promisePlugin.configs['flat/recommended']],
  rules: {
    'promise/no-return-wrap': 'off',
    'promise/always-return': 'off',
    'promise/no-promise-in-callback': 'off',
    'promise/prefer-await-to-then': 'warn',
  },
};

const reactConfig = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  extends: [
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    reactHooksPlugin.configs.flat.recommended,
    reactRefreshPlugin.configs.recommended,
    tanstackQueryPlugin.configs['flat/recommended'],
    jsxA11yPlugin.flatConfigs.recommended,
    nextPlugin.configs.recommended,
    nextPlugin.configs['core-web-vitals'],
  ],
  languageOptions: {
    parserOptions: {
      ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
      ecmaFeatures: {
        jsx: true,
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'off',
    'react-hooks/refs': 'off',
    'react-hooks/set-state-in-effect': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};

const eslintRules = {
  rules: {
    'one-var': 'off',
    'no-restricted-imports': 'off',
    'linebreak-style': 'off',
    'no-debugger': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'arrow-body-style': ['error', 'as-needed'],
  },
};

const prettierConfig = {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

export default defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/build/',
    '**/dist/',
    '**/.next/',
    '**/.tanstack/',
    '**/.azuredevops/',
    '**/.husky/',
    '**/.vscode/',
    '**/.github/',
    '**/public/',
    '**/docs/',
    '****/next-env.d.ts',
    '**/routeTree.gen.ts',
    '**/reportWebVitals.ts',
  ]),
  js.configs.recommended,
  typescriptConfig,
  sonarJsConfig,
  importConfig,
  unusedImportsConfig,
  promiseConfig,
  reactConfig,
  eslintRules,
  prettierConfig, // prettier must be last in the chain to override other rules
]);
