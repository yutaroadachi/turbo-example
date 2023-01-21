/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  parserOptions: {
    babelOptions: {
      // @see https://github.com/vercel/next.js/issues/40687#issuecomment-1264177674
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
  },
};
