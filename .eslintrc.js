module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    // "plugin:react/recommended",
    // "google",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },

  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "prettier/prettier": "error",
    "require-jsdoc": "off"
  }
};
