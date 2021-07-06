module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  "rules": {
    "quotes": [2, "single", { "avoidEscape": true }],
    //"indent": [2, "tab"],
		'indent': 'off',
    "no-tabs": 0
  }
}
