module.exports = {
  root: true,

  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "@vue/prettier"
  ],

  plugins: ["vue"],

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module"
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
