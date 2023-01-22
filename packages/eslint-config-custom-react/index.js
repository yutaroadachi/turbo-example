/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
    "no-undef": "off",
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
