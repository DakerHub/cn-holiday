// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
      mocha: true
  },
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['standard'],
  // add your custom rules here
  "rules": {
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }],
    "no-underscore-dangle": 0,
    "no-var": 2,
    "no-unused-vars": ["error", { "varsIgnorePattern": "[iI]gnored" }],
    "camelcase": ["warn"],
    "indent": ["error", 4],
    "comma-dangle": 1,
    "no-multi-str": 1,
    "global-require": 1,
    "no-mixed-operators": 1,
    "import/no-duplicates": 0,
    "max-len": 0,
    "semi": ["error", "always"]
  }
}

