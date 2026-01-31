/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const prettierConfig = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'auto',
  printWidth: 100,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'cva', 'cx'],
  tailwindStylesheet: 'src/styles/globals.css',
};

export default prettierConfig;
